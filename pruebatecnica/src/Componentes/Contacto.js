import React from 'react';
import '../assets/css/Contacto.css';
import MayorQue from '@material-ui/icons/ArrowForwardIos';
import logo from '../assets/images/logo horizontal.png';
import Banner1 from '../assets/images/Banner1.jpg';
import logo2 from '../assets/images/Logo.jpg';
import face from '../assets/images/face.png';
import insta from '../assets/images/insta.png';
import email from '../assets/images/email.png';
import sucursales from '../assets/images/sucursales.png';

function Contacto(){
    return(
        <div className="main-contacto">
            <div className="content-wrap">
                <div className="leftSiteC">
                    <div className="logoC">
                        <img src={logo}></img>
                    </div>                    
                    <h2>Inicio <MayorQue/> Contacto</h2>
                    <div className="logo2C">
                        <img src={logo2}></img>
                    </div>                   
                </div>
                <div className="rightSiteC">
                    <div className="BannerC">
                        <img src={Banner1}></img>
                    </div>                   
                    <div className="informacion"> 
                        <h2>INFORMACIÓN</h2>
                        <div className="ColumnasC">
                            <div className="col1">
                                <a href="https://www.facebook.com/"><img src={face}></img></a>
                                <h4>Facebook</h4>
                                <h3>Facturacion 123.</h3>
                            </div>
                            <div className="col2">
                            <a href="https://www.instagram.com/"><img src={insta}></img></a>                                
                                <h4>Instagram</h4>
                                <h3>@facturacion123</h3>
                            </div>
                            <div className="col3">
                                <a href="https://mail.google.com/"><img src={email}></img></a>                                
                                <h4>Email</h4>
                                <h3>facturacion123@gmail.com</h3>
                            </div>
                            <div className="col4">
                                <a href="https://www.google.com/maps/?hl=es"><img src={sucursales}></img></a>                                
                                <h3>Direccion Sucursal 1.</h3>
                                <h3>Direccion Sucursal 2.</h3>
                            </div>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contacto;