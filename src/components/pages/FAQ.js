// import React, {useState, useEffect} from 'react';
// import {Link} from "react-router-dom";
// import * as AIIcons from "react-icons/ai";
// import FaqCard from "../helpers/FaqCard";
// import GeneralFaq from "../sections/FAQ/FaqContent";
// import FaqContent from '../sections/FAQ/FaqContent';

// function FAQ() {

//     const [state, setState] = useState("1");

//     // function onClick(){
//     //     console.log("Hello Bitches");
//     // }

//     console.log(state)

//     return (
//         <div className="faqWrapper">
//             <div className="faqHero">
//                 <div className="backtoHome">
//                     <Link to="/" style={{textDecoration:"none", color:"white"}}>
//                         <div className="linkWrapper">
//                         <div className="homeIcon"><AIIcons.AiOutlineHome color="white" size="30px" /></div>
//                         <div className="txt">Take me back</div> 
//                         </div>
//                     </Link>
//                 </div>
//                 <div className="faqbigText">
//                     <div className="faq">FAQ</div>
//                     <div className="questionMark">?</div>
//                 </div>
//             </div>
//             <div className="faqTopicCards">
//                 <FaqCard 
//                     text="general questions"
//                     bgImage = "orange"
//                     onClick = {() => setState("1")}
//                     // boxShadow = {boxShadow}
//                 />
//                 <FaqCard 
//                     text="Payment Queries"
//                     bgImage = "purple"
//                     onClick = {() => setState("2")}
//                     // boxShadow = {boxShadow}
//                 />

//                 <FaqCard 
//                     text="Payment Queries"
//                     bgImage = "purple"
//                     onClick = {() => setState("2")}
//                     // boxShadow = {boxShadow}
//                 />
//             </div>
//             <FaqContent cardId = {state} />
//         </div>
//     )
// }

// export default FAQ
