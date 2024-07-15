import React, { useState } from 'react';
import "../styles/components/_TpReact.scss"



const TpReact = () => {
    const PRODUCTS = [  
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

const  [Check , SetCheck] = useState(false)

const Checker = () => {
    SetCheck(!Check)
    console.log(Check);
}
const Form = () => {
      return <div className='Formulaire' >
            <input type="text" placeholder='Rechercher' />
            <div className='flex'>
                <input type="checkbox" checked = {Check} onChange={Checker} />
                <span>N"afficher que les produits en stock</span>
                </div> 
        </div>
}

const Produits = (element,ingredient , prix) => {
    return  <div>
<h1 > `${element}` </h1>
<div style={{background: "gray" ,  padding: " 0 20px"}} >
  <div ></div>
  <div ></div>
  <div ></div>
</div>

    </div>
       

    
}
    return (
    
<div className='TPreact'>
         <Form  />
<Produits element = "b"/>
</div>
  
  

    );
};

export default TpReact;