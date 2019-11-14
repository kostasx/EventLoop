Reveal.addEventListener( "ready", handleRevealReady );

// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({

    // Print one page for separate slide fragments:
    pdfSeparateFragments: false,

    history: true,

    dependencies: [{
        src: 'plugin/markdown/marked.js'
    }, {
        src: 'plugin/markdown/markdown.js'
    }, {
        src: 'plugin/notes/notes.js',
        async: true
    }, {
        src: 'plugin/highlight/highlight.js',
        async: true
    }]
});

const debugModeOn = true;

function handleRevealReady( e ){

    // REMOVE PRINT ONLY SLIDES
    const isPrintPdf = ( /print-pdf/gi ).test( window.location.search );
    if ( !isPrintPdf  ){
    // if (!document.location.search.slice(1).match("print-pdf")) {
        const printOnlySections = document.querySelectorAll("section.print-only");
        Array.from(printOnlySections).forEach((section) => section.remove());
        Reveal.sync();
    }

}
