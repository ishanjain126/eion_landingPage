// import React, {useState, useEffect} from 'react'
// import { absoluteURL } from '../../utils'
// import Card2 from "../helpers/Card2";
// import PlanList from "../helpers/PlanList"
// import * as IoIcons from "react-icons/io";

// function Plans() {

//     const [country, setCountry] = useState("")

//     useEffect(() => {
//         // fetch('https://api64.ipify.org?format=json')
//         // .then(results => results.json())
//         // .then(data => console.log(data.ip))
//         fetch('https://extreme-ip-lookup.com/json/')
//         .then( res => res.json())
//         .then(response => {
//             setCountry(response.country);
//             // console.log("Country: ", response.country);
//         })
//         .catch((data, status) => {
//             console.log('Request failed');
//         })
//     })

//     console.log('country', country);

//     return (
//         <div className="planWrapper" 
//         style={{backgroundImage:`url(${absoluteURL("/plan.jpg")})`}}
//         >
//             <div className="plan_heading">
//                 we stand with you in this tough time
//             </div>
//             <div className="plan_body">
//                 no cost for first six months <br />
//                 <span className="tnc_1">*Valid from the date of launch</span>
//                 <span className="tnc_2">**No credit card required</span>
//             </div>
//             <div className="plansCard">
//                 <Card2 
//                 bgColor="#FFF3F3"
//                 logo_image = {<IoIcons.IoIosPaperPlane color="white" size="22px" />}
//                 plan_text = "Basic Plan"
//                 color="#526FE5"
//                 price = {country === "India" ? '₹ 1999' : '$ 499'}
//                 time = "month"
//                 contentColor = "black"
//                 text = {
//                     <div>
//                         <PlanList 
//                         bgCheckColor="#333333" 
//                         checkColor="white" 
//                         featureText="Secure your account" 
//                         />
//                         <PlanList 
//                         bgCheckColor="#333333" 
//                         checkColor="white" 
//                         featureText="No credit cards required" 
//                         />
//                         <PlanList 
//                         bgCheckColor="#333333" 
//                         checkColor="white" 
//                         featureText="Personalised Guidance" 
//                         />
//                     </div>
//                 }
//                 />

//                 <Card2 
//                 bgColor="#526FE5"
//                 logo_image = {<IoIcons.IoIosJet color="white" size="22px" />}
//                 plan_text = "Pro Plan"
//                 color="#102168"
//                 price = {country === "India" ? '₹ 3999' : '$ 799'}
//                 time = "month"
//                 contentColor = "white"
//                 text = {
//                     <div>
//                         <PlanList 
//                         bgCheckColor="white" 
//                         checkColor="#526FE5" 
//                         featureText="Secure your account" 
//                         />
//                         <PlanList 
//                         bgCheckColor="white" 
//                         checkColor="#526FE5" 
//                         featureText="No credit cards required" 
//                         />
//                         <PlanList 
//                         bgCheckColor="white" 
//                         checkColor="#526FE5" 
//                         featureText="Personalised Guidance" 
//                         />
//                     </div>
//                     }
//                 />

//             </div>
//         </div>
//     )
// }

// export default Plans
