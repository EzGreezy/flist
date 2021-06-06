// import React,{useState, useEffect} from 'react';

// const FoodsForm = (props) => {
//     const initialFieldValues = {
//         foodName:'',
//         price:''
//     }

//     var [values, setValues] = useState(initialFieldValues)

//     const handleInputChange = e =>{
//         var {name, value} = e.target
//         setValues({
//             ...values,
//             [name]: value
//         })
//     }
//     const handleFormSubmit = e =>{
//         e.preventDefault();
//         props.addOrEdit(values)
//     }

//     return (
//         <>
//         <div>Insert Form</div>
//         <form autoComplete="off" onSubmit={handleFormSubmit}>
//             <div className="form-group input-group">
//                 <div className="input-group-prepend">
//                     <div className="input-group-text">
//                         <i className="fas fa-hamburger"> </i>
//                     </div>
//                 </div>
//                 <input className="form-control" 
//                     placeholder="Food name" 
//                     name="foodName" 
//                     value={values.foodName}
//                     onChange={handleInputChange}
//                     />
//             </div>
//             <div className="form-group input-group">
//                 <div className="input-group-prepend">
//                     <div className="input-group-text">
//                         <i className="fas fa-dollar-sign"> </i>
//                     </div>
//                 </div>
//                 <input className="form-control" 
//                     placeholder="Price" 
//                     name="price" 
//                     value={values.price}
//                     onChange={handleInputChange}
//                     />
//             </div>
//             <div className="form-group">
//                     <input type="submit" value="Save" className="btn btn-primary btn-block" />
//             </div>
//         </form>
//         </>
//     );
// }

// export default FoodsForm;