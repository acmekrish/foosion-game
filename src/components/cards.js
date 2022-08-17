import { useState } from "react";
import Card from "./card";

const Cards = () => {
    const [items, setItems] = useState ([
        {id: 1, img: '/img/1.png', stat: ""},
        {id: 1, img: '/img/1.png', stat: ""},
        {id: 2, img: '/img/2.jpg', stat: ""},
        {id: 2, img: '/img/2.jpg', stat: ""},
        {id: 3, img: '/img/3.png', stat: ""},
        {id: 3, img: '/img/3.png', stat: ""},
        {id: 4, img: '/img/4.png', stat: ""},
        {id: 4, img: '/img/4.png', stat: ""},
        {id: 5, img: '/img/5.png', stat: ""},
        {id: 5, img: '/img/5.png', stat: ""},
        {id: 6, img: '/img/6.png', stat: ""},
        {id: 6, img: '/img/6.png', stat: ""},
        {id: 7, img: '/img/7.jpg', stat: ""},
        {id: 7, img: '/img/7.jpg', stat: ""},
        {id: 8, img: '/img/8.jpg', stat: ""},
        {id: 8, img: '/img/8.jpg', stat: ""},
        {id: 9, img: '/img/9.png', stat: ""},
        {id: 9, img: '/img/9.png', stat: ""},
        {id: 10, img: '/img/10.jpg', stat: ""},
        {id: 10, img: '/img/10.jpg', stat: ""},
        {id: 11, img: '/img/11.jpg', stat: ""},
        {id: 11, img: '/img/11.jpg', stat: ""},
        {id: 12, img: '/img/12.jpg', stat: ""},
        {id: 12, img: '/img/12.jpg', stat: ""},
        {id: 13, img: '/img/13.jpg', stat: ""},
        {id: 13, img: '/img/13.jpg', stat: ""},
        {id: 14, img: '/img/14.png', stat: ""},
        {id: 14, img: '/img/14.png', stat: ""}]
        .sort(() => Math.random() - 0.5))

        const [prev, setPrev] = useState(-1)

        function handleClick(id){
            alert(id)
        }
    return ( 
         <div className="mid">
            {items.map((item, index) => (
                <Card key = {index} item ={item} id={index} handleClick = {handleClick}/>
            ))}
         </div> 
     );
}
 
export default Cards;