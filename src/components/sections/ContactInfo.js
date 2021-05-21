// import React, {useState, useEffect} from 'react';
// import ReactWhatsapp from 'react-whatsapp';
// import {absoluteURL} from "../../utils";
// import {send} from "emailjs-com";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import CustomerSupport from "./CustomerSupport"
// import {Link} from "react-router-dom";

// function ContactInfo() {

//     const [state, setState] = useState({
//         yourName : "",
//         email : "",
//         phone : null,
//         restaurant : "",
//         query : ""
//     })

//     const [disabled, setDisabled] = useState(true)

//     function isDisabled(){
//         if(state.yourName && state.email && state.phone && state.restaurant && state.query){
//             setDisabled(false);
//         }
//         else{
//             setDisabled(true);
//         }
//     }

//     useEffect(() => {
//         isDisabled();
//     })

//     function handleInputChange(event){
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;

//         setState({
//             ...state,
//             [name]: value
//         })
//     }

//     console.log('state', state);

//     function onSubmit(event){

//         console.log(state);
//         event.preventDefault()
//         send(
//             'service_q7p0hoe',
//             'template_jr027sq',
//             state,
//             'user_NUhSHpI0brAH1zVnDWtQk'
//         )
//         .then((response) => {
//             toast("Message delivered successfully");
//             console.log('SUCCESS', response.status)
//             setState({
//                 yourName:"",
//                 email:"",
//                 phone: "",
//                 restaurant:"",
//                 query:""
//             })
//         })
//         .catch((err) => {
//             console.log('FAILED...', err);
//             toast(err);
//         });
//     };



//     const message = 
//           [
//             `${"Name : " + state.yourName + " "}`,
//             `${" Email Address : " + state.email + " "}`,
//             `${" Phone Number : " + state.phone + " "}` ,
//             `${" Restaurant Name : " + state.restaurant + " "}`, 
//             `${" Query : " + state.query + " "}` ,
          
//           ]
  
    

//     return (
//         <div className="contactWrapper">
//             <div className="contactHeading">
//                 Let's grow your Business together? 
//             </div>
//             <div className="contactsubHeading">
//                 Please reach out to us through email or whatsapp directly!
//             </div>
//             <div className="contactInfo">
//                 <form>
//                    <input
//                         name = "yourName"
//                         type = "string"
//                         value = {state.yourName}
//                         onChange = {handleInputChange}
//                         placeholder = "Name *"
//                         className = "contactForm"
//                         required
//                    /> 
//                    <br />
//                     <input
//                         name = "email"
//                         type = "email"
//                         value = {state.email}
//                         onChange = {handleInputChange}
//                         placeholder = "Email *"
//                         className = "contactForm"
//                         required
//                    /> 
//                    <br />
//                     <input
//                         name = "phone"
//                         type = "number"
//                         value = {state.phone}
//                         onChange = {handleInputChange}
//                         placeholder = "Phone Number *"
//                         className = "contactForm"
//                         required
//                    /> 
//                    <br />
//                     <input
//                         name = "restaurant"
//                         type = "string"
//                         value = {state.restaurant}
//                         onChange = {handleInputChange}
//                         className = "contactForm"
//                         placeholder = "Restaurant Name*"
//                         required
//                    /> 
//                    <br />
//                     <textarea
//                         name = "query"
//                         type = "string"
//                         value = {state.query}
//                         onChange = {handleInputChange}
//                         className = "contactFormArea" 
//                         placeholder = "Query *"
//                         required
//                    /> 
//                 </form>
//                 <div className="btnGrp">
//                     <div>
//                         <ReactWhatsapp
//                             number = "+91 9982659449"
//                             message = {message}
//                             className="btn1"
//                             disabled = {disabled}
//                         >
//                             <span className="btn1_span1"><img src = {absoluteURL("/whatsapp.png")} className="whatsapp" /></span>
//                             <span className="btn1_span2">Whatsapp us</span> 
//                         </ReactWhatsapp>
//                     </div>
//                     <div className="btn2">
//                         {/* service_q7p0hoe */}
//                         <button className="email_button" onClick = {onSubmit} disabled={disabled}>
//                             <span className="btn2_span1"> <img src={absoluteURL("/gmail.png")} className="gmail" /></span>
//                             <span className="btn2_span2">Email us</span> 
//                             <ToastContainer />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div className="brandName">
//                 EION
//             </div>
//             <div className="navtabs">
//                 <div className="privacyPolicy">
//                     Privacy Policy
//                 </div>
//                 <div className="terms">
//                     Terms & Conditions
//                 </div>
//                 <div className="faqs">
//                     <Link to="/faq" style={{textDecoration:"none", color:"inherit"}}>
//                         FAQs
//                     </Link>
//                 </div>
//             </div>
//             {/* <CustomerSupport /> */}
//         </div>
//     )
// }

// export default ContactInfo
