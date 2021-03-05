import React,  {useEffect, useState}from 'react'

const FormA = () => {

const [state, setState] = useState('');


       useEffect(() => {
        console.log("Behavior before the component is added to the DOM");
      }, []);
 
 
     useEffect(() => {
        console.log("Behavior when the component receives new state or props.");
      },);
     

    useEffect(() => {
        return () => {
          console.log("Behavior right before the component is removed from the DOM.");
            }
      }, []);

    return (
         <div>
          <input  type ="text" value={state} onChange={(e) => setState(e.target.value) }/>  
          
         </div>
    )
}

export default FormA
