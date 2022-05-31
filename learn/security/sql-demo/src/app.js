const execBtn = document.getElementById( "execute" );
const outputElm = document.getElementById( 'output' );
const messageText = document.getElementById( "message" );
const trimmer = str => str.split( "\n" ).filter( line => line ).map( line => line.trim() ).join( "\n" );
let initialSQL = trimmer(`
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

const tableCreate = function () {

	return function ( columns, values, table ) {
		var tbl = document.createElement( 'table' );
		tbl.setAttribute("class", "sql-tables");
		var thead = document.createElement("thead");
		if ( table ){
			const tr = document.createElement("tr");
			const th = document.createElement("th");
			th.style.background = "lightseagreen";
			th.style.color = "white";
			th.setAttribute("colspan", columns.length);
			th.textContent = table;
			tr.appendChild(th);
			thead.appendChild(tr);
		}
		var tr = document.createElement("tr");
		columns.forEach( col => {
			const th = document.createElement("th");
			th.textContent = col;
			tr.appendChild( th );
		});
		thead.appendChild( tr );
		tbl.appendChild( thead );

		const tbody = document.createElement("tbody");
		values.forEach( row =>{
			const tr = document.createElement("tr");
			row.forEach( data  =>{
				const td = document.createElement("td");
				td.textContent = data;
				tr.appendChild(td);
			})
			tbody.appendChild(tr);
		})
		tbl.appendChild( tbody );
		return tbl;
	}
}();

(async function () {

	const config = {
		locateFile: ( filename, prefix ) => {
			console.log( `prefix is : ${prefix}` );
			return `./src/${filename}`;
		}
	}
	const SQL = await initSqlJs( config );
	const db = new SQL.Database();

	// ATTENTION!
	function handleSubmit ( e ){

		e.preventDefault();
		const message = form.querySelector( "textarea" ).value;
	
		// VULNERABLE
		execEditorContents(
			`INSERT INTO messages (uid,message) VALUES (1, '${message}');`
		);
	
		// A) >> CORRECT:
		// execEditorContents(
		// 	`INSERT INTO messages (uid,message) VALUES (1, $msg);`, 
		// 	{ $msg: message }
		// 	// B) >>
		// 	// { $msg: escapeHtml(message) }
		// );
	}

	function execEditorContents( sql, params = {} ) {
		outputElm.classList.remove("error");
		outputElm.textContent = "";
		try {
			const results = db.exec( sql, params );
			if ( results && ( results.length > 0 ) ) {
				const output = tableCreate( results[ 0 ].columns, results[ 0 ].values );
				outputElm.innerHTML = "";
				outputElm.appendChild( output );
			}
			showDatabases();
		} catch (e){
			outputElm.classList.add("error");
			outputElm.textContent = e.message;
		}
	}

	messageText.value = `What time do you get off?`;

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

	// MONACO >>
	var monacoEditor = (function( onChange ){
		const container = document.getElementById( "sql" );
		const themeData = {
			base: "vs-dark",
			inherit: true,
			rules: [
				{
					background: "002451",
					token: "",
				},
				{
					foreground: "7285b7",
					token: "comment",
				},
				{
					foreground: "ffffff",
					token: "keyword.operator.class",
				},
				{
					foreground: "ffffff",
					token: "keyword.operator",
				},
				{
					foreground: "ffffff",
					token: "constant.other",
				},
				{
					foreground: "ffffff",
					token: "source.php.embedded.line",
				},
				{
					foreground: "ff9da4",
					token: "variable",
				},
				{
					foreground: "ff9da4",
					token: "support.other.variable",
				},
				{
					foreground: "ff9da4",
					token: "string.other.link",
				},
				{
					foreground: "ff9da4",
					token: "string.regexp",
				},
				{
					foreground: "ff9da4",
					token: "entity.name.tag",
				},
				{
					foreground: "ff9da4",
					token: "entity.other.attribute-name",
				},
				{
					foreground: "ff9da4",
					token: "meta.tag",
				},
				{
					foreground: "ff9da4",
					token: "declaration.tag",
				},
				{
					foreground: "ff9da4",
					token: "markup.deleted.git_gutter",
				},
				{
					foreground: "ffc58f",
					token: "constant.numeric",
				},
				{
					foreground: "ffc58f",
					token: "constant.language",
				},
				{
					foreground: "ffc58f",
					token: "support.constant",
				},
				{
					foreground: "ffc58f",
					token: "constant.character",
				},
				{
					foreground: "ffc58f",
					token: "variable.parameter",
				},
				{
					foreground: "ffc58f",
					token: "punctuation.section.embedded",
				},
				{
					foreground: "ffc58f",
					token: "keyword.other.unit",
				},
				{
					foreground: "ffeead",
					token: "entity.name.class",
				},
				{
					foreground: "ffeead",
					token: "entity.name.type.class",
				},
				{
					foreground: "ffeead",
					token: "support.type",
				},
				{
					foreground: "ffeead",
					token: "support.class",
				},
				{
					foreground: "d1f1a9",
					token: "string",
				},
				{
					foreground: "d1f1a9",
					token: "constant.other.symbol",
				},
				{
					foreground: "d1f1a9",
					token: "entity.other.inherited-class",
				},
				{
					foreground: "d1f1a9",
					token: "markup.heading",
				},
				{
					foreground: "d1f1a9",
					token: "markup.inserted.git_gutter",
				},
				{
					foreground: "99ffff",
					token: "keyword.operator",
				},
				{
					foreground: "99ffff",
					token: "constant.other.color",
				},
				{
					foreground: "bbdaff",
					token: "entity.name.function",
				},
				{
					foreground: "bbdaff",
					token: "meta.function-call",
				},
				{
					foreground: "bbdaff",
					token: "support.function",
				},
				{
					foreground: "bbdaff",
					token: "keyword.other.special-method",
				},
				{
					foreground: "bbdaff",
					token: "meta.block-level",
				},
				{
					foreground: "bbdaff",
					token: "markup.changed.git_gutter",
				},
				{
					foreground: "ebbbff",
					token: "keyword",
				},
				{
					foreground: "ebbbff",
					token: "storage",
				},
				{
					foreground: "ebbbff",
					token: "storage.type",
				},
				{
					foreground: "ebbbff",
					token: "entity.name.tag.css",
				},
				{
					foreground: "ffffff",
					background: "f99da5",
					token: "invalid",
				},
				{
					foreground: "ffffff",
					background: "bbdafe",
					token: "meta.separator",
				},
				{
					foreground: "ffffff",
					background: "ebbbff",
					token: "invalid.deprecated",
				},
				{
					foreground: "ffffff",
					token: "markup.inserted.diff",
				},
				{
					foreground: "ffffff",
					token: "markup.deleted.diff",
				},
				{
					foreground: "ffffff",
					token: "meta.diff.header.to-file",
				},
				{
					foreground: "ffffff",
					token: "meta.diff.header.from-file",
				},
				{
					foreground: "718c00",
					token: "markup.inserted.diff",
				},
				{
					foreground: "718c00",
					token: "meta.diff.header.to-file",
				},
				{
					foreground: "c82829",
					token: "markup.deleted.diff",
				},
				{
					foreground: "c82829",
					token: "meta.diff.header.from-file",
				},
				{
					foreground: "ffffff",
					background: "4271ae",
					token: "meta.diff.header.from-file",
				},
				{
					foreground: "ffffff",
					background: "4271ae",
					token: "meta.diff.header.to-file",
				},
				{
					foreground: "3e999f",
					fontStyle: "italic",
					token: "meta.diff.range",
				},
			],
			colors: {
				"editor.foreground": "#FFFFFF",
				"editor.background": "#002451",
				"editor.selectionBackground": "#003F8E",
				"editor.lineHighlightBackground": "#00346E",
				"editorCursor.foreground": "#FFFFFF",
				"editorWhitespace.foreground": "#404F7D",
			},
		}; 
		var editor = monaco.editor.create( container, {
			// Editor Options: https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html#EditorOptions
			value: initialSQL,
			lineNumbers: 'off',
			minimap: { enabled: false },
			// language: "javascript",
			editorClassName: "monaco-sql-editor",
			language: "sql",
			fontSize: 18,
			theme: "vs-dark", // https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html#BuiltinTheme
		} );
		monaco.editor.defineTheme( 'mytheme', themeData );
		monaco.editor.setTheme( 'mytheme' );
		editor.getModel().onDidChangeContent( ( event ) => {
			onChange( editor.getValue() );
		});
		return editor;
	}(onMonacoChange));
	// MONACO <<

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

	// Load BUTTON:
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
				const tbl = tableCreate( cols[ 0 ].values, [], table );
				outputElm.appendChild(tbl);
			} else {
				const tbl = tableCreate( res[ 0 ].columns, res[ 0 ].values, table );
				outputElm.appendChild(tbl);
			}
		});
	}

	// Show Database BUTTON:
	document.getElementById("show_db").addEventListener("click", showDatabases );

}());
