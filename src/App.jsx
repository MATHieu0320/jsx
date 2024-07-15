import { Fragment, useState } from 'react'
import echec from "../IMG/echec.jpg"

import viteLogo from '/vite.svg'
function Title({color,children}) {
  return <h1 style={{color}}> {children} </h1>
}

const showh2 = true;
// false je vois pas true je vois le h4
const h1 = "bonsoir";
const styleH1 = {color: "green",lineHeight: "15px", fontSize: "3rem"}
function App() {

 const tableau = [1,2,4,5,6,4,5,5]
const todos = [ 
  "Presenter",
  "creer",
  "conclure"
 ]
const Handleclick = ( e) =>{
  console.log(e);

  alert("vous venez de cliquer")
}
  return (

<Fragment>
<Title color={"red"} children={"titre active"}  />
    <h1 onClick={Handleclick} id='Logo' style={styleH1}> {h1} </h1>
    {showh2 && <h2>cv bien</h2>}
    { showh2 ?
     <p style={{color: "red", backgroundColor: "blue", }}> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti exercitationem 
      dolor doloribus, natus debitis ad incidunt eos unde veritatis iusto sit harum sapiente? 
      Omnis, quisquam? Quisquam, tenetur! Voluptatibus, voluptatem rem! </p> 
      : "si c est false"  } 
 <span>Result global : {tableau.reduce((a,b) => a + b)} </span>
      <ul >
     {todos.map((todo) => <li key={todo}> {todo} </li>)}
      </ul>

   <img src= {echec} alt="vitejs"  />
   </Fragment>
   
  //  <div className="div">
  //   <h5>cxcc</h5>
  //  </div>

  // il doit y avoir un element racine au balise h1 p btn input element racine comme div ou fragment si je ne mets pas.


  )
}
export default App;