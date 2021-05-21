import React, {useEffect} from 'react';
import {absoluteURL} from "../../utils";
// import * as moment from "moment";
import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';
import CustomButton from "../helpers/CustomButton";
import CustomButton2 from "../helpers/CustomButton2";
// import QrCode from "./QrCode";

function Introsection() {

    // const nowTime = moment().format("HH:MM A");
    // const [state, setState] = useState("");
    // const [imgHero, setImgHero] = useState("");

    // console.log(state, nowTime);

    // const [open, setOpen] = useState(false);
    // const onOpenModal = () => setOpen(true);
    // const onCloseModal = () => setOpen(false);

    // var split_afternoon = "12:00 PM";
    // var split_evening = "17:00 PM";


    function iOS() {
        return [
          'iPad Simulator',
          'iPhone Simulator',
          'iPod Simulator',
          'iPad',
          'iPhone',
          'iPod',
          'win32'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document ? "true" : "false")
      }

    useEffect(() => {
        console.log(iOS())
    })

    // console.log(navigator.platform)



    return (

        <div className="introWrapper">
            <div className="home_content">
                <div className="heading">
                    Take Your Business online, In less than a minute
                </div>
                <div className="subheading">
                    Give your customers a seamless experience and run your business 
                    right from your phone
                </div>
            </div>
            <div className="home_buttons">
                <div className="downloadNow_btn">
                    <CustomButton 
                    titleText="Download EION" 
                    // class_name = "modal1_1"
                    bgColor = "#1564C0"
                    color = "white"
                    />
                </div>
                <div className="linkButton">
                    <CustomButton2 
                    text="Know More"
                    link="/"
                    />
                </div>
            </div>
            <div className="homepage_image">
                <img src={absoluteURL("/illust.svg")} className="illustImage" alt="" />
            </div>
        </div>
    )
}

export default Introsection

