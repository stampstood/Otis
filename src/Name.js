//import React from 'react'; // พิมพ์ imr +tab
//import React, { Component } from 'react'; // พิมพ์ imrc + tab
import React from 'react';
// 1
// class Name extends Component {
//     render(){
//         return(
//             <div>
//                 STAMPPPPP
//             </div>
//         )
//     }

// }
// export default Name

//---------------------------------------------------


//2
const Name = props => {
    const addAge = ()=> {
        props.age = props.age+1

    }

    return (<div>
        <p>{props.title}{props.age}</p>
        <button onClick={addAge}>add</button>
    </div>)

}
export default Name
// ถ้า export ธรรมดา จะเขียน  export {Name}

//--------------------------------------------------
