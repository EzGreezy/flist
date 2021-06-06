// import React from 'react';
// import FoodsForm from "./FoodsForm"
// import firebaseDb from "../fire";

// const Foods = () => {

//     const addOrEdit = obj=>{
//         firebaseDb.child('foods').push(
//             obj,
//             err => {
//                 if(err)
//                     console.log(err)
//             }
//         )
//     }

//     return (
//         <>
//             {/* <div class="jumbotron jumbotron-fluid">
//                 <div class="container">
//                     <h1 class="display-4">asd</h1>
//                 </div>
//             </div> */}
//             <div className="row">
//                 <div className="col-md-5">
//                     <FoodsForm addOrEdit={addOrEdit} />
//                 </div>
//                 <div className="col-md-7">
//                     <div>List of foods</div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Foods;