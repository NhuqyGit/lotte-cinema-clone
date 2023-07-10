import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import "./Home.scss";
import adLeft1 from '../image/slider-left1.png';
import adLeft2 from '../image/slider-left2.png';
import adLeft3 from '../image/slider-left3.png';
import adLeft4 from '../image/slider-left4.jpg';
import adLeft5 from '../image/slider-left5.png';
import adLeft6 from '../image/slider-left6.png';

import adRight1 from '../image/adRight1.jpg';
import adRight2 from '../image/adRight2.jpg';
import adRight3 from '../image/adRight3.jpg';
import adRight4 from '../image/adRight4.jpg';
import adRight5 from '../image/adRight5.jpg';
import adRight6 from '../image/adRight6.jpg';
import adRight7 from '../image/adRight7.jpg';

import boxOffice from '../image/boxoffice.png';

import bg_16 from '../image/16.png'; 
import bg_K from '../image/K.png'; 
import bg_P from '../image/P.png'; 
import bg_18 from '../image/18.png'; 

function Home() {
    const imageLeft = [adLeft1, adLeft2, adLeft3, adLeft4, adLeft5, adLeft6];
    const imageRight = [adRight1, adRight2, adRight3, adRight4, adRight5, adRight6, adRight7];
    const films = [{
        num: "1.",
        bg: bg_16,
        title: "QUỶ QUYỆT: CỬA ĐỎ VÔ ĐỊNH",
        time: "107Phút | 12/07/2023"
    },
    {
        num: "2.",
        bg: bg_K,
        title: "XỨ SỞ CÁC NGUYÊN TỐ",
        time: "109Phút | 23/06/2023"
    },
    {
        num: "3.",
        bg: bg_16,
        title: "NHIỆM VỤ: BẤT KHẢ THI - NGHIỆP BÁO P1",
        time: "164Phút | 08/07/2023"
    },
    {
        num: "4.",
        bg: bg_K,
        title: "SIÊU CÚN VŨ TRỤ DU HÀNH TRÁI ĐẤT",
        time: "93Phút | 07/07/2023"
    },
    {
        num: "5.",
        bg: bg_P,
        title: "TÀ CHÚ CẤM",
        time: "122Phút | 21/06/2023"
    },
    {
        num: "6.",
        bg: bg_18,
        title: "QUỶ QUYỆT: CỬA ĐỎ VÔ ĐỊNH",
        time: "107Phút | 12/07/2023"
    },
    {
        num: "7.",
        bg: bg_P,
        title: "DORAEMON: NOBITA VÀ VÙNG ĐẤT LÝ TƯỞNG TRÊN BẦU TRỜI ",
        time: "108Phút | 26/05/2023"
    },
    ]

    const [indexLeft, setIndexLeft] = useState(0);                  //index left
    const [sliderLeft, setSliderLeft] = useState([]);               //slider left

    const [indexRight, setIndexRight] = useState(0);                //index right
    const [sliderRight, setSliderRight] = useState([]);             //slider right

    const [isClick, setClick] = useState(false);
    const [isClickRight, setClickRight] = useState(false);
    const [isRender, setRender] = useState(false);

    const [side, setSide] = useState("left");

    

    useEffect(()=>{
        if(isRender === false){
            setSliderLeft([imageLeft[(indexLeft + 1) % imageLeft.length], imageLeft[indexLeft]]);
            setRender(true);
            console.log("HellO", isRender);
            return;
        }
      
        console.log("Helloooooo");
        const timer = setTimeout(() => {
            setSliderLeft([imageLeft[(indexLeft + 1) % imageLeft.length], imageLeft[indexLeft]])
            setClick(false);
        }, 1000);
          
        return () => {
            clearTimeout(timer);
        };
        
    }, [indexLeft]);

    useEffect(()=>{
        if(isRender === false){
            setSliderRight([imageRight[indexRight], imageRight[(indexRight + 1) % imageRight.length]])
            setRender(true);
            console.log("HellO", isRender);
            return;
        }
      
        console.log("Helloooooo");
        const timer = setTimeout(() => {
            setSliderRight([imageRight[indexRight], imageRight[(indexRight + 1) % imageRight.length]])
            setClickRight(false);
        }, 1000);
          
        return () => {
            clearTimeout(timer);
        };
        
    }, [indexRight]);


    const handleLeft = () =>{
        if(side === "right"){
            setSide("left");
            return;
        }
        setIndexLeft((indexLeft + 1) % imageLeft.length);
        setClick(true);
        
    }

    const handleRight = () =>{
        if(side === "left"){
            setSide("right");
            return;
        }
        setIndexRight((indexRight + 1) % imageRight.length);
        setClickRight(true);
        
    }

    const listFilm = films.map((i)=>{
        return(
            <li className='flex items-center justify-between'>
                <a className='flex items-center'>
                    <em className='num'>{i.num}</em>
                    <span className='grade1' style={{background: `url(${i.bg})`}}></span>
                    <span className='title-film'>{i.title}</span>
                </a>
                <span className='time'>{i.time}</span>
            </li>
        );
    })

    return ( 
        <>
        <div className='Home w-full'>
            <div className={`listFilm w-full pb-16 ${side === "left" ? "left" : "right"}`}>
                <div className="slider-left flex justify-end">
                    <img src={sliderLeft[0]} alt='' className={`sl ${isClick ? "sl-active" : ""}`} />
                    <img src={sliderLeft[1]} alt='' className={`sl ${isClick ? "sl-active" : ""}`} />
                </div>
                
                <div className='boxOffice'>
                    <div className='banner w-full'>
                        <img src={boxOffice}></img>
                    </div>
                    <div className='officeCont w-full'>
                        <ul>
                            {listFilm}
                        </ul>
                    </div>
                    <a href='#' className='buyNow'>Mua vé ngay</a>
                </div>

                <div className='slider-right flex justify-start'>
                    <img src={sliderRight[0]} alt='' className={`sr ${isClickRight ? "sr-active" : ""}`} />
                    <img src={sliderRight[1]} alt='' className={`sr ${isClickRight ? "sr-active" : ""}`} />
                </div>
                
            </div>
            <button className='btn-left' onClick={handleLeft}>
                <svg className='fill-white' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                <g>
                    <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
                </g>
                </svg>
            </button>
            <button className='btn-right' onClick={handleRight}>
                <svg className='fill-white' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                <g>
                    <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
                </g>
                </svg>

            </button>
        </div>
        </>
    );
}

export default Home;