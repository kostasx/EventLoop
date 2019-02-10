let $likeButton = document.querySelector( ".like i" );
let $likeCount = document.querySelector( "#like-count" );
let hasBeenClicked = false;

function likeClickHandler(){

    console.log( hasBeenClicked );

    if ( hasBeenClicked ){

        let likes = $likeCount.innerText;
        likes = Number( likes );
        likes--;
        $likeCount.innerText = likes;
        hasBeenClicked = false;
        document.querySelector( ".like" ).classList.remove( "liked" );
        
    } else {

        let likes = $likeCount.innerText;
        likes = Number( likes );
        likes++;
        $likeCount.innerText = likes;
        hasBeenClicked = true;
        document.querySelector( ".like" ).classList.add( "liked" );
        
    }
}

$likeButton.addEventListener( "click", likeClickHandler );