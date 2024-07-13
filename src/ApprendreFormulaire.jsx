import React, { useState } from 'react';

const ApprendreFormulaire = () => {

   const  [Form,SetForm] =  useState(true)

    const TrueOrFalse = (e) => {
        e.preventDefault()
SetForm(!Form)
console.log(Form);

    }
    return (
 

  <form onSubmit={TrueOrFalse} { ...Form ?  console.log("cv") : console.log("p")}>
<button></button>
  </form>
    );
};

export default ApprendreFormulaire;