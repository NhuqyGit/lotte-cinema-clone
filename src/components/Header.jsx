import { useState } from "react";
import {ad1, logo} from "../library";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
function Header() {
    const [isOpen, setOpen] = useState(true);
    const listItem = [{
    title: "SHOP QUÀ TẶNG",
    path: "/gift-shop"
    },
    {
        title: "MUA VÉ",
        path: "/ticketing"
    },
    {
        title: "PHIM",
        path: "/Movie"
    },
    {
        title: "CINEMA",
        path: "/Cinema"
    },
    {
        title: "KHUYẾN MÃI",
        path: "/Event"
    }]

    const items = listItem.map((i)=>{
        return(
            <li>
                <NavLink to={i.path}>{i.title}</NavLink>
            </li>
        );
    });

    return (  
        <header>
            <div className='ad1 flex justify-around'>
                <div className={`relative ${isOpen ? "block" : "hidden"}`}>
                <img src={ad1} alt=''></img>
                <i 
                    className="fa-solid fa-xmark del-ad1 absolute text-white top-0 right-1 text-xl cursor-pointer"
                    onClick={()=>setOpen(!isOpen)}>
                </i>
                </div>
            </div>
            
            <div className='container w-full'>
                <div className='header'>
                <div className='flex justify-between items-center'>
                    <div className='flex social'>
                    <div className='flex app'>
                        <a>Lotte Cinema APP</a>
                    </div>
                    <div className='flex fb'>
                        <a href='https://www.facebook.com/lottecinema/'>Lotte Cinema Facebook</a>
                    </div>
                    </div>

                    <ul className='header-nav flex items-center'>
                    <li>
                        <a>Đăng nhập</a>
                    </li>
                    <li>
                        <a>Thẻ thành viên</a>
                    </li>
                    <li>
                        <a>Hỗ trợ khách hàng</a>
                    </li>
                    <li>
                        <a className='lang'></a>
                    </li>
                    </ul>
                </div>

                </div>
                <div className='flex justify-around items-center'>
                    <NavLink to="/aa"><img src={logo} /></NavLink>
                </div>

                <div className='nav-menu'>
                <ul className='flex'>
                    {items}
                </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
