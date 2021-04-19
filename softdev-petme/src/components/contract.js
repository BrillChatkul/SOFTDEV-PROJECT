import './contract.css'
import React,{useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GoogleMapReact from 'google-map-react';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";


import Profile_icon_src from './img/profile.jpg'
import Bell_icon_src from './img/bell-icon.png'
import Logo_icon_src from './img/top-icon.png'
import Bottom_logo_icon from './img/bottom-icon.png'
import Address_icon_src from './img/address_icon.png'
import Tel_icon_src from './img/tel_icon.png'
import Mail_icon_src from './img/mail_icon.png'

import about_background_src from './img/welcome_dog.png' //need to edit



library.add(fas, fab, far);

const Home2 = ()=> {
    const [classStyle, setClassStyle] = useState('menu-header')
    const [astStyle, setAstStyle] = useState('ast')

    const [currentPage,setCurrentPage] = useState('home')

    const setToggle = () => {
        classStyle == 'menu-header'?setClassStyle('menu-header active'):setClassStyle('menu-header')
        classStyle == 'menu-header active'?setAstStyle('ast-fullbg'):setAstStyle('ast')
        console.log({astStyle})

    
    }

    return (
        <div>
            <nav>
                <li class='menu'>               
                    <div class = 'menu-logo'><img src={Logo_icon_src} class='menu-logo-img'/></div>
                    <li class = {classStyle}><div className={astStyle}>หน้าหลัก</div></li>
                    <li class = {classStyle}><div className={astStyle}>เกี่ยวกับ</div></li>
                    <li class = {classStyle}><div className={astStyle}>ซื้อขาย</div></li>
                    <li class = {classStyle}><div className={astStyle}>บริจาค</div></li>
                    <li class = {classStyle}><div className='current-ast'><div class = 'paddy'>ติดต่อเรา</div></div></li>


                    <li class = 'menu-header logo button'><button class = 'a-center' href='#'><img class ='bell-icon' src={Bell_icon_src}/></button></li>
                    <li class = 'menu-header logo button profile'><botton class='profileBtt'><img class = 'profile-icon' src = {Profile_icon_src}/></botton></li>
                    <li class = 'toggle' onClick = {setToggle}><button class ='toggle-button'><FontAwesomeIcon icon={['fas', 'bars']}/></button></li>

                </li>
            </nav>
            <div className= 'sizePane'>
            
            {/* ------------------ติดต่อเรา--------------- */}
            <div className = 'pageStyle'> 
                <div class='Topic'>
                    <img class='aboutTopic-bg' src={about_background_src}></img>
                    <div class='aboutTopic'>
                        <p class='aboutTopic-text'>ติดต่อเรา</p>
                    </div>
                </div>
            {/* ---------------------address abd Contract------------------ */}
                <div className = 'addressContractBox'>
                
                <div className = 'addressContractWrap'>
                <div className = 'addressBox'>
                    <h1 className = 'headText'>ที่อยู่</h1>
                    <div className = 'textBox'>
                        <img className='logoAddress' src={Bell_icon_src}></img>
                        <div>
                            <p className = 'textAddress'>เลขที่ 1 ซอยฉลองกรุง 1 เขตลาดกระบัง กรุงเทพมหานคร ประเทศไทย 10520</p>
                            
                        </div>
                        
                    </div>
                    <div className = 'textBox'>
                        <img className='logoAddress' src={Bell_icon_src}></img>
                        <p className = 'textAddress'>xxx-xxx-xxxx</p>
                    </div>
                    <div className = 'textBox'>
                        <img className='logoAddress' src={Bell_icon_src}></img>
                        <p className = 'textAddress'>petMe@gmail.com</p>
                    </div>

                </div>

                <div className = 'contractBox'>
                        <h1 className = 'headText'>ติดต่อเรา</h1>
                        <div className = 'inputLayer'>
                            <input id="name" type="text" class ='inputTextB'placeholder="ชื่อจริง-นามสกุล" maxlength="40"></input>
                            <input type="text" class ='inputTextB'placeholder="อีเมล"></input>
                        </div>
                        <div className = 'inputLayer'>
                            <input type="text" class ='inputTextB'placeholder="เบอร์โทรศัพท์" maxlength="10" pattern="[0-9]*"></input>
                            <input type="text" class ='inputTextB'placeholder="หัวข้อ"></input>
                        </div>
                        <textarea type="text" class ='inputTextBLong'placeholder="ข้อความ" maxlength="100"></textarea>
                        <button className='buttonSumit'>ส่ง</button>
                </div>
                </div>
                </div>
                {/* --------google map------- */}
                <div style={{height: '300px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key:'AIzaSyArHsxljBsVldhX-DXQWFenKBhvW9K05DE'}}
                        defaultCenter={{ lat: 13.727732292542216, lng: 100.77078854813402 }}
                        defaultZoom={18}
                    >
                    <div lat={13.727732292542216} lng={100.77078854813402}>
                        <div className = 'pointPane'>
                            <img className='logoAddress' src={Bottom_logo_icon}></img>
                            <div className = 'pointText'>PetMe</div>
                        </div>
                        
                    </div>
                    </GoogleMapReact>
                </div>
            </div>
            {/* -----------the END-------------- */}

            <div className = 'contact-section'>
                <div class='bottom-icon-pad'>
                        <img class ='bottom-icon' src={Bottom_logo_icon}></img>
                        <div class = 'bottom-icon-text'>PetMe</div>
                    </div>

                    <div class='contact-pad'>
                        <div class='contact-pad-roll-1'>
                            <img class='tel-icon' src = {Tel_icon_src}/>
                            <div class='contact-text'>Phone:</div>
                        </div>
                        <div class='contact-pad-roll-2'>
                            <div class='contact-text'>xxx-xxx-xxxx</div>
                        </div>
                    </div>
                <div class='contact-pad'>
                        <div class='contact-pad-roll-1'>
                            <img class='mail-icon' src = {Mail_icon_src}/>
                            <div class='contact-text'>Email:</div>
                        </div>
                        <div class='contact-pad-roll-2'>
                            <div class='contact-text'>petme@gmail.com</div>
                        </div>
                    </div>
                <div class='contact-pad'>
                        <div class='contact-pad-roll-1'>
                            <img class='address-icon' src = {Address_icon_src}/>
                            <div class='contact-text'>ที่อยู่:</div>
                        </div>
                        <div class='contact-pad-roll-2'>
                            <div class='contact-text'>เลขที่ 1 ซอยฉลองกรุง 1</div>
                            <div class='contact-text'>เขตลาดกระบัง กรุงเทพมหานคร</div>
                            <div class='contact-text'>ประเทศไทย 10520</div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}   

export default Home2











