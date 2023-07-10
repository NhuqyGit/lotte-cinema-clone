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
        title: "RẠP CHIẾU PHIM",
        path: "/Cinema"
    },
    {
        title: "KHUYẾN MÃI",
        path: "/Event"
    }]

    const items = listItem.map((i, index)=>{
        return(
            <li key={i.path} className={index === 0 ? "first" : ""}>
                <NavLink to={i.path}>{i.title}</NavLink>
            </li>
        );
    });

    return (  
        <header>
            <div className='_container w-full'>
                <div className='ad1 flex justify-around'>
                    <div className={`relative ${isOpen ? "block" : "hidden"}`}>
                    <img src={ad1} alt=''></img>
                    <i 
                        className="fa-solid fa-xmark del-ad1 absolute text-white top-0 right-1 text-xl cursor-pointer"
                        onClick={()=>setOpen(!isOpen)}>
                    </i>
                    </div>
                </div>
            
                <div className='header flex items-center'>
                    <div className='flex justify-between items-center w-full'>
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
                    <NavLink to="/"><img src={logo} /></NavLink>
                </div>

                <div className='nav-menu flex justify-around'>
                    <ul className='navBar flex '>
                        {items}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
