import React, { useState } from 'react';

const CheckedFlux = () => {
 
const [Press,SetPress] = useState(false) 

const Changemenent = () => {
    SetPress(!Press)
console.log(Press);
}
    return (

        <div className='Check'>
        <input type="checkbox" checked = {Press} onChange={Changemenent}   />
        <button disabled= {Press}></button>
        </div>
 
    );
};

export default CheckedFlux;