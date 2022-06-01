const execBtn     = document.getElementById( "execute" );
const outputElm   = document.getElementById( 'output' );
const messageText = document.getElementById( "message" );
let initialSQL = helpers.trimmer(`
	DROP TABLE IF EXISTS employees;
	CREATE TABLE employees( id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,fullname TEXT, email TEXT, role TEXT );


	INSERT INTO employees (fullname, email, role) VALUES ('JOHNSON','johnson@gmail.com', 'admin');
	INSERT INTO employees (fullname, email, role) VALUES ('ADA','adagmail.com' ,'readonly');
	INSERT INTO employees (fullname, email, role) VALUES ('JONAS','jonas@gmail.com','readonly');


	CREATE TABLE messages( id INTEGER PRIMARY KEY, uid INTEGER, message TEXT );
	INSERT INTO messages (uid, message) VALUES (3,'This is Jonas!');
	INSERT INTO messages (uid, message) VALUES (2,'Hey!');
	INSERT INTO messages (uid, message) VALUES (3,'How are you?');
`);

function escapeHtml( text ) {
	if ( typeof text !== "string" ){
		return text;
	}
	return text
		.replace( /</g, "&lt;" )
		.replace( />/g, "&gt;" );
}

(async function () {

	const SQL = await initSqlJs( helpers.config );
	const db = new SQL.Database();

	// ATTENTION!
	function handleSubmit ( e ){

		e.preventDefault();
		const message = form.querySelector( "textarea" ).value;
	
		// VULNERABLE
		execEditorContents(
			`INSERT INTO messages (uid,message) VALUES (1, '${message}');`
		);
	
		//>> A) CORRECT: PREPARED STATEMENTS/ESCAPING/FILTERING
		// execEditorContents(
		// 	`INSERT INTO messages (uid,message) VALUES (1, $msg);`, 
		// 	{ $msg: message }
		// 	// B) >>
		// 	// { $msg: escapeHtml(message) }
		// );
		//>> REF: https://stackoverflow.com/questions/8263371/how-can-prepared-statements-protect-from-sql-injection-attacks#answer-8265319
	}

	function execEditorContents( sql, params = {} ) {
		outputElm.classList.remove("error");
		outputElm.textContent = "";
		try {
			const results = db.exec( sql, params );
			if ( results && ( results.length > 0 ) ) {
				const output = helpers.tableCreate( results[ 0 ].columns, results[ 0 ].values );
				outputElm.innerHTML = "";
				outputElm.appendChild( output );
			}
			showDatabases();
		} catch (e){
			outputElm.classList.add("error");
			outputElm.textContent = e.message;
		}
	}

	// CLIPBOARD:
	document.body.addEventListener( "click", e => {
		if ( e.target.className.includes( "copy_clipboard" ) ) {
			const code = e.target.previousElementSibling.textContent;
			// COPY TO CLIPBOARD: 
			navigator.clipboard.writeText( code );
			const old = e.target.textContent;
			e.target.textContent = "Copied!";
			e.target.setAttribute( "style", "background: limegreen !important" );
			setTimeout( () => {
				e.target.textContent = "Copy";
				e.target.style.background = "tomato";
			}, 2000 );
		}
	} )

	// INITIALIZE MONACO EDITOR:
	const monacoEditor = helpers.initMonaco({ onChange: onMonacoChange, container: document.getElementById( "sql" ) })

	function onMonacoChange( code ){
		// console.log("onMonacoChange()", code);
	}

	// EXECUTE SQL ON Alt+Enter:
	document.body.addEventListener("keyup", e =>{
		if ( ( e.target.nodeName === "TEXTAREA" ) && ( e.target.classList.contains("inputarea") ) ){
			if ( ( e.key === "Enter" ) && e.altKey ){
				execEditorContents( monacoEditor.getValue() );	
			}
		}
	});

	// Execute BUTTON:
	execBtn.addEventListener( "click", ()=> {
			execEditorContents( monacoEditor.getValue() );
		}, true 
	);

	// FORM (CUSTOM)
	const form = document.querySelector( "form" );

	// Save Message:
	form.addEventListener( "submit", handleSubmit );

	// Load Messages BUTTON:
	document.querySelector( "button#load" ).addEventListener( "click", e => {
		document.querySelector( "#render" ).innerHTML = "";
		const sql = `SELECT message FROM messages`;
		const results = db.exec( sql + ';' );
		console.log( results[0].values );
		const ul = document.createElement("ul");
		ul.setAttribute("class","chat");
		results[0].values.map( m =>{
			const li = document.createElement("li");
			li.innerHTML = m[0];
			ul.appendChild(li);
		});
		document.querySelector( "#render" ).appendChild( ul );

	});

	function showDatabases(){
		outputElm.classList.remove("error");
		outputElm.textContent = "";
		const sql = `SELECT name FROM sqlite_master WHERE type ='table' AND name NOT LIKE 'sqlite_%'`
		const results = db.exec( sql + ';' );
		outputElm.innerHTML = "";
		if (results.length === 0){
			return;
		}
		results[0].values.forEach(([table]) =>{
			const res = db.exec( `SELECT * FROM ${table}` );
			if ( res.length === 0 ){
				const cols = db.exec( `SELECT name FROM PRAGMA_TABLE_INFO('${table}');` );
				console.log( cols );
				const tbl = helpers.tableCreate( cols[ 0 ].values, [], table );
				outputElm.appendChild(tbl);
			} else {
				const tbl = helpers.tableCreate( res[ 0 ].columns, res[ 0 ].values, table );
				outputElm.appendChild(tbl);
			}
		});
	}

	// Show Database BUTTON:
	document.getElementById("show_db").addEventListener("click", showDatabases );

	// RESET SQL PANEL:
	const reset = document.getElementById("reset");
	reset.addEventListener("click", e =>{
		monacoEditor.setValue( initialSQL );
		// monacoEditor.getModel().setValue('some value');
	});
	
	// HELPERS:
	helpers.init();

}());
