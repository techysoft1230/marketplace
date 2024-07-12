import React from 'react';
import '../header/header.css';
import logo from '../../assets/images/logo2.png'
const Header = ()=>{
    return(
        <>
        <header>
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-sm-2'>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </header>
        
        </>

    )
}
export default Header;