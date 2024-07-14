import React, { useState } from 'react';

const ApprendreFormulaire = () => {

  const [Form, SetForm] = useState(true)
  const [FormEmail, SetFormEmail] = useState("")
  const [FormName, SetFormName] = useState("")





function Input(e) {
SetFormEmail(e.target.value)
console.log(FormEmail);
}
function Input2(e) {
SetFormName(e.target.value)
console.log(FormEmail);
}
  // const TrueOrFalse = (e) => {

  //   SetForm(!Form)
  //   console.log(Form);


  // }
function submit(e) {

e.preventDefault()


  if (FormEmail.includes("@") ) {
  alert("ça marche")
  
  const obj = {
    email: FormEmail,
    prenom: FormName
  }
window.localStorage.setItem("formulaire", FormEmail)

  console.log(obj);
}
else{
  console.log("non");
}
 };


  return (


    <form onSubmit={submit} style={{background: "red", height: "200px"}}  {...Form ? console.log("") : console.log("p") }>
     
      <input style={{background: "yellow"}} type="mail" placeholder='email' value={FormEmail} onChange={Input} id='email'/>
       <input  type='text'  placeholder='Name' value={FormName} onChange={Input2} />;
<button>Envoyer</button>
    </form>
  )};

export default ApprendreFormulaire;