// import React from 'react'
// import {absoluteURL} from "../../utils";
// import GoogleLogin from 'react-google-login';

// function Register() {

//     const responseGoogle= (response) => {
//         console.log(response)
//     }
//     return (
//         <div className="registerWrapper">
//             <div className="register_heading">
//                 <h1>let's get started ?</h1>
//             </div>
//             <div className="register_gifWrapper"><img src={absoluteURL("/register.gif")} className="register_gif" /></div>
//             <div className="content"> register with us now. We are going to ...... </div>
//             <div className = "register_btns">
//                 <div className="google_login_btn">
//                     <GoogleLogin
//                         clientId="645622975502-oeuq1vkqae3tfe40p1m2perekp2a3ck5.apps.googleusercontent.com"
//                         render={renderProps => (
//                             <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="googleBtn">
//                                 <div className="googleRegisterWrapper">
//                                     <div className="google_img"><img src={absoluteURL("/google.png")} className="register_googleImg" /></div>
//                                     <div className="google_text">Sign up with Google</div>
//                                 </div>
//                             </button>
//                           )}      
//                         buttonText = "Sign up with Google"
//                         onSuccess = {responseGoogle}
//                         onFailure = {responseGoogle}
//                         cookiePolicy={'single_host_origin'}
//                     />
//                 </div>
//                 <div className="or">OR</div>
//                 <div className="manual_registration">
//                     <button className="manual_btn_register">
//                         <div className="eion_btn_registerWrapper">
//                             <img src={absoluteURL("/eionlogo.png")} className="eion_btn_img" />
//                             <div className="manual_register_text">Register Manually</div>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Register
