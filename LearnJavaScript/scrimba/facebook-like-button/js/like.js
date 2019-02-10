let $likeButton = document.querySelector( ".like i" );
let $likeCount = document.getElementById( "like-count" );
let $likeWrapper = document.querySelector( ".like" );
let hasBeenClicked = false;

function likeClickHandler(){

    let likes = $likeCount.innerText;
    likes = Number( likes );
    
    if ( hasBeenClicked ){

        likes--;
        $likeWrapper.classList.remove( "liked" );
        hasBeenClicked = false;
        
    } else {

        likes++;
        $likeWrapper.classList.add( "liked" );
        hasBeenClicked = true;
        
    }

    $likeCount.innerText = likes;
    
}

$likeButton.addEventListener( "click", likeClickHandler );