import React, {useState, useEffect} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {absoluteURL} from "../../utils";
// import QrCode from "../sections/QrCode"
// import { GiConsoleController } from 'react-icons/gi';
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";

function CustomButton({
    bgColor, 
    color, 
    titleText, 
    // width,  
    fontSize, 
    border,
    padding
}) {

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [link, setLink] = useState("")
    const [storeName, setStoreName] = useState("");

    function iOS() {
        return [
          'iPad Simulator',
          'iPhone Simulator',
          'iPod Simulator',
          'iPad',
          'iPhone',
          'iPod',
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document ? setLink("https://play.google.com/store/apps/details?id=com.aizo.business") : setLink("https://play.google.com/store/apps/details?id=com.aizo.business") )
      }


      useEffect(() => {
        //   iOS();
          {iOS() ? setStoreName("ios") : setStoreName("android")}
      }, [])

      console.log("storeName", storeName);

    return (
        <div className="customButtonWrapper">
            <button className="customBtn" 
            style={{
                backgroundColor : `${bgColor}`, 
                color: `${color}`,
                // width: `${width}`, 
                fontSize : `${fontSize}`,
                border: `${border}`,
                padding : `${padding}`
            }} 
                onClick={onOpenModal}>
                    {titleText}
                </button>
            <Modal 
                open={open}
                onClose={onCloseModal}
                center
                classNames = {{modal : 'customModal' }}
            >
                {/* {modalContent} */}
                <div className="modal_1" id="modal_1">
                    <img src={absoluteURL("/eionlogo.png")} 
                        className="logoImg" alt="" />
                    <div className="modal1_content">
                        <div className="modal1_instructions">
                            <div className="modal1_header">
                                scan this QR code.
                            </div>
                            <div className="modal1_list">
                                <ul style={{listStyleType:"square"}}>
                                    <li>open your phone camera and point it at the qr code</li>
                                    <li>alternatively, download any qr code scanner to scan</li>
                                    <li>click on the link generated to download EION </li>
                                </ul>
                            </div>
                        </div>

                        {/* <img 
                        src={absoluteURL("/qrcode.png")} 
                        className="qrImage"  
                        /> */}
                        {/* <QrCode value={link} /> */}
                    </div>
                </div>
                <div className="modal_2">
                    <div className="modal2_imgWrapper">
                        <img src = {absoluteURL("/eionlogo.png")} className="modal2_img"  alt="" />
                    </div>
                    <div className="modal2_download_img">
                        <img src="https://image.freepik.com/free-vector/download-concept-illustration_114360-2857.jpg" className="download_img" alt="" />
                    </div>
                    <div className="modal2_text">
                        Download Now
                    </div>
                    <div className="modal2_link">
                    {/* <MobileStoreButton
                        store={storeName}
                        url={link}
                        // linkProps={{ title: 'iOS Store Button' }}
                        // store = "ios"
                        // url = "https://itunes.apple.com/app/spotify-music/id324684580"
                    >
                    </MobileStoreButton>  */}
                        <button className="appstore_btn">
                            {storeName==="ios" ? 
                                <a href={link}>
                                    <div className="btn_link_style_wrapper">
                                        <div><AiIcons.AiOutlineApple color="white" size="22px" /></div>
                                        <div className="btn_link_text">Download on App Store</div>
                                    </div>
                                </a> : 
                                <a href={link} style={{textDecoration:"none"}}>
                                    <div className="btn_link_style_wrapper">
                                        <div><RiIcons.RiGooglePlayLine color="white" size="22px" /></div>
                                        <div className="btn_link_text">Download on Google Play</div>
                                    </div>
                                </a>
                            }
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CustomButton
