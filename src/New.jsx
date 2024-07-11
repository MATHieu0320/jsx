


import React, { Fragment, useState } from 'react';

function DivBleuBlancRouge({background,nomCouleur,...props}) {
  return <div style= {{width: "50%", background}}> {nomCouleur} </div>
}
const props = {
  id: "monid",
  className: "maclass"
}

console.log(import.meta.env.VITE_SOME_KEY);
const New = () => {

  const [count , SetCount] = useState(0)
  const [person , SetPerson] = useState({
    prenom: "math",
    age: 21
  })

    const incremant = () => {
SetCount(count + 1)

SetPerson({...person, age: person.age + 1})
console.log(person);

// SetCount((count) => count + 1)
// SetCount((count) => count + 1)

    }
  
    return (
      <Fragment>
 
 <p>compteur : {count } ,{person.age} </p>
<button style={{height: "30px", width: "100px"}} onClick={incremant}>Ajouter 1</button>
  <DivBleuBlancRouge background={"blue"} nomCouleur={"bleu"} />
  <DivBleuBlancRouge background={"white"} nomCouleur={"blanc"} />
  <DivBleuBlancRouge background={"red"} nomCouleur={"rouge"} />
  </Fragment>
    );
};

export default New;