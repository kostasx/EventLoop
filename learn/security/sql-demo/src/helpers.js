const helpers = {

    tableCreate: (function () {

        const theadColor = "#2587ce";

        return function ( columns, values, table ) {
            var tbl = document.createElement( 'table' );
            tbl.setAttribute("class", "sql-tables");
            var thead = document.createElement("thead");
            if ( table ){
                const tr = document.createElement("tr");
                const th = document.createElement("th");
                th.style.background = theadColor;
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
    }()),

    trimmer: str => str.split( "\n" ).filter( line => line ).map( line => line.trim() ).join( "\n" ),

    config: {
		locateFile: ( filename, prefix ) => {
			console.log( `prefix is : ${prefix}` );
			return `./src/${filename}`;
		}
	},

    initMonaco: function({ onChange = ()=>{}, container }){
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
					foreground: "7da1ff",
					token: "string.sql",
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
	},

    init: function(){

		// TOGGLE SQL PANEL:
        const toggle = document.getElementById("toggle");
        toggle.addEventListener("click", e =>{
            document.getElementById("sql").classList.toggle("hidden");
        });

        // TOGGLE DB ICON:
        const dbImg = document.querySelector("#sql img");

        if ( dbImg ){
            let counter = 1;
            dbImg.addEventListener("click", e =>{
                dbImg.src = `img/db${counter}.svg`;
                if ( ++counter > 5 ){
                    counter = 1;
                }
            })
        }
    }    
}