import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../../public/icons/logo'
import LocationIcon from '../../public/icons/LocationIcon'
import Search from '../../public/icons/Search';
import SignIn from '../../public/icons/SignIn';
import Heart from '../../public/icons/Heart';
import Korzina from '../../public/icons/Korzina';
import Catalog from '../../public/icons/Catalog';


function Header() {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-top">
                       <div className='left'>
                       <LocationIcon/>
                       <p>Shahar: <span className='under'>Toshkent</span></p>
                       <p>Topshirish Punktlari</p>
                       </div>
                       <div className='right'>
                        <Link className='buy'>Uzumda Soting</Link>
                        <Link to='/faq'>Savol-Javoblar</Link>
                        <Link >Buyurtmalarim</Link>
                        <span>

                        <img src="/images/uzb-flag.png" width={24} height={24} alt="flag" />
                        O'zbekcha
                        </span>
                       </div>
                    </div>
                    <div className="header-bottom">
                        <Link to='/'><Logo/></Link>
                        
                            <button> <img src="/images/catalog.png" alt="" /> Katalog </button>                            
                            <div className="input">
                                <input type="text" placeholder='Mahsulotlar va turkumlar izlash' />
                                <button> <Search/></button>
                            </div>
                            <div className="pages">
                               <span>
                               <SignIn/>
                                <Link to='/sign'>  Kirish</Link>
                                </span> 
                                <span>
                                <Heart/> 
                                <Link to='/wishes'> Saralangan</Link>
                                </span>
                                <span>
                                <Korzina/>
                                <Link to='/cart'> Savat</Link>
                                </span>
                            </div>
                    </div>
                    <div className="header-categories">
                        <p><img src="/images/artel.png" height={24} width={24} alt="" /><span>Artel Savdosi</span></p>
                        <p><img src="/images/chilla_bozori.png" height={24} width={24} alt="" /><span>Katta Savdo</span></p>
                        <p><img src="/images/uhod.png" height={24} width={24} alt="" /><span>Go'zallik va parvarish</span></p>
                        <p><img src="/images/updauto.png" height={24} width={24} alt="" /><span>Hammasi avto uchun</span></p>
                        <p><img src="/images/Adidas.png" height={24} width={24} alt="" /><span>Adidas Sale</span></p>
                        <Link className='link'>Elektronika</Link>
                        <Link className='link'>Maishiy Texnika</Link>
                        <Link className='link'>Kiyim</Link>
                        <Link className='link'>Poyabzallar</Link>
                        <Link className='link'>Yana <img src="/images/chevron-down-regular-24.png" width={14} height={14} alt="" /></Link>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header