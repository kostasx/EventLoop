import React, { useState } from 'react';            
import { createRoot } from 'react-dom/client'
import "./styles.css";

const list = [ "JavaScript", "TypeScript", "CoffeeScript", "PHP", "Python", "Go", "Ruby", "Java", "C#", "C++" ];
const postsPerPage = 3; 
const totalPages = Math.ceil( list.length / postsPerPage ); 

function Post({ title }){
  return <div>{ title }</div>;  
}

function App(){
  const [ posts ] = useState( list ); 
  const [ currentPage, setCurrentPage ]= useState( 1 );
  const prev = ()=>{
    if ( currentPage > 1 ){ setCurrentPage( currentPage - 1 ); } 
  }
  const next = ()=>{
    if ( currentPage < totalPages ){ setCurrentPage( currentPage + 1 ); } 
  }
  const from = ( currentPage - 1 ) * postsPerPage; 
  const upTo = from + postsPerPage;                

  return (
    <>
      <h1>React: Pagination</h1>
      <button onClick={ prev }>Prev</button> <span>{currentPage}/{totalPages}</span> <button onClick={ next }>Next</button>
      <hr/>
      {
        posts.slice( from, upTo ).map( ( post, index ) => <Post key={ index } title={ post } /> ) 
      }
    </>
  )
}

const root = createRoot(document.getElementById("root"));
root.render( <App/> );