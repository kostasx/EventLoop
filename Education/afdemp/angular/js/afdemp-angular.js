Reveal.addEventListener( "ready", handleRevealReady );

const debugModeOn = true;

function handleRevealReady( e ){

    // [1] REMOVE STUDENT NOTES SLIDES IF THIS IS NOT A PDF
    const isPrintPdf = ( /print-pdf/gi ).test( window.location.search );
    if ( !isPrintPdf && !debugModeOn  ){

        const studentNotes = document.querySelectorAll(".student-notes");
        studentNotes.forEach(function(studentNote){
        
            studentNote.remove();
        
        })
        
        Reveal.sync();

    }

}
