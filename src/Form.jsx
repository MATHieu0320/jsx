import React, { useState } from 'react';

const Form = () => {

    const [firstname , SetFirstname] = useState("ma")
    const handlechange = (e)=> {

        SetFirstname(e.target.value)
    }
    const HandLeSubmit = (e) => {
        e.preventDefault()
        SetFirstname(e.target.value)
        console.log(new FormData(e.target));
    }
    return (
  <form onSubmit={HandLeSubmit} >
    <input type="text" name="firstname" value={firstname} onChange={handlechange}/>
    {/* <input type="text" name="second" /> */}
    <button>Envoyer</button>
      </form>
    );
};

export default Form;