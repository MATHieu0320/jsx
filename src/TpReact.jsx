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
function MetEnRougePlusGrosPrix(prix1,prix2,prix3) {
  
//  let tab = []
// tab.push(prix1,prix2,prix3)
// console.log(tab);
    
}
MetEnRougePlusGrosPrix(PRODUCTS[0].price,PRODUCTS[1].price,PRODUCTS[2].price)


const  [Check , SetCheck] = useState(false)


const Form = () => {
      return <div className='Formulaire' >
            <input type="text" placeholder='Rechercher' />
            <div className='flex'>
                <input type="checkbox" checked = {Check} onChange={Checker} />
                <span>N"afficher que les produits en stock</span>
                </div> 
        </div>
}

const Produits = ({texte,texte2,ingredient , prix}) => {
    return  <main>
<h1 > {texte} </h1>
<div className='ProduitsElements' >
  <div className='flex' style={{background: "gray"}} >
    <h3 > {ingredient} </h3>
    <span> {prix} </span>
  </div>
  <div className='flex'>
   <h3> {PRODUCTS[1].name} </h3>
    <span> {PRODUCTS[1].price} </span>
  </div>
  <div className='flex'>
  <h3> {PRODUCTS[2].name} </h3>
    <span> {PRODUCTS[2].price} </span>
  </div>
  <h1> {texte2} </h1>
    <div className='flex' style={{background: "gray"}}>
    <h3 > {PRODUCTS[3].name} </h3>
    <span> {PRODUCTS[3].price} </span>
  </div >
  <div className='flex'> 
  
   <h3>   {PRODUCTS[4].name} </h3>
    <span> {PRODUCTS[4].price} </span>
  </div>
  <div  className='flex'>
  <h3> {PRODUCTS[5].name} </h3>
    <span> {PRODUCTS[5].price} </span>
  </div>
</div>

    </main>
       

    
}
const Checker = () => {
  SetCheck(!Check)
console.log(Check);
if (Check === true) {
     for(let i = 0; i < PRODUCTS.length; i++) {
   
   if (PRODUCTS[i].stocked == true) {

return <Produits ingredient={PRODUCTS[i].name} prix={PRODUCTS[i].price}/>


   }
    }
}

 
}
    return (
    
<div className='TPreact'>
    <Form />
<Produits  texte="Fruits" texte2="Vegetables" ingredient={PRODUCTS[3].name} prix={PRODUCTS[3].price}  />



</div>
  
  

    );
};

export default TpReact;