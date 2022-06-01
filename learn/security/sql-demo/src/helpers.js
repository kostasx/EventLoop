const helpers = {

    tableCreate: (function () {

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
    }()),

    trimmer: str => str.split( "\n" ).filter( line => line ).map( line => line.trim() ).join( "\n" ),

    config: {
		locateFile: ( filename, prefix ) => {
			console.log( `prefix is : ${prefix}` );
			return `./src/${filename}`;
		}
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