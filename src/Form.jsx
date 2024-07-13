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
    const [checked, Setchecked] = useState(false)
    const togglecheck = () =>{
    Setchecked(!checked)
    console.log(checked);
    }
    return (
  <form onSubmit={HandLeSubmit} >
    <input type="text" name="firstname" value={firstname} onChange={handlechange} disabled= {!checked}  />
    {/* <input type="text" name="second" /> */}

    <input type="checkbox" checked = {checked} onChange={togglecheck} />
 {   checked &&   <button   >Envoyer</button> }
  <textarea value={"dd"} onChange={handlechange}/>
      </form>
    );
};

export default Form;