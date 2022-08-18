import { useState } from 'react'
import Card from './card'

function Cards(){
    const [items, setItems] = useState([
        {id: 1, img: '/img/1.jpg', stat: ""},
        {id: 1, img: '/img/1.jpg', stat: ""},
        {id: 2, img: '/img/2.jpg', stat: ""},
        {id: 2, img: '/img/2.jpg', stat: ""},
        {id: 3, img: '/img/3.jpg', stat: ""},
        {id: 3, img: '/img/3.jpg', stat: ""},
        {id: 4, img: '/img/4.jpg', stat: ""},
        {id: 4, img: '/img/4.jpg', stat: ""},
        {id: 5, img: '/img/5.jpg', stat: ""},
        {id: 5, img: '/img/5.jpg', stat: ""},
        {id: 6, img: '/img/6.jpg', stat: ""},
        {id: 6, img: '/img/6.jpg', stat: ""},
        {id: 7, img: '/img/7.jpg', stat: ""},
        {id: 7, img: '/img/7.jpg', stat: ""},
        {id: 8, img: '/img/8.jpg', stat: ""},
        {id: 8, img: '/img/8.jpg', stat: ""},
        {id: 9, img: '/img/9.jpg', stat: ""},
        {id: 9, img: '/img/9.jpg', stat: ""},
        {id: 10, img: '/img/10.jpg', stat: ""},
        {id: 10, img: '/img/10.jpg', stat: ""},
        {id: 11, img: '/img/11.jpg', stat: ""},
        {id: 11, img: '/img/11.jpg', stat: ""},
        {id: 12, img: '/img/12.jpg', stat: ""},
        {id: 12, img: '/img/12.jpg', stat: ""},
        {id: 13, img: '/img/13.jpg', stat: ""},
        {id: 13, img: '/img/13.jpg', stat: ""},
        {id: 14, img: '/img/14.jpg', stat: ""},
        {id: 14, img: '/img/14.jpg', stat: ""},
        {id: 15, img: '/img/15.jpg', stat: ""},
        {id: 15, img: '/img/15.jpg', stat: ""},
        {id: 16, img: '/img/16.jpg', stat: ""},
        {id: 16, img: '/img/16.jpg', stat: ""},
        {id: 17, img: '/img/17.jpg', stat: ""},
        {id: 17, img: '/img/17.jpg', stat: ""},
        {id: 18, img: '/img/18.jpg', stat: ""},
        {id: 18, img: '/img/18.jpg', stat: ""},
        {id: 19, img: '/img/19.jpeg', stat: ""},
        {id: 19, img: '/img/19.jpeg', stat: ""},
        {id: 20, img: '/img/20.jpg', stat: ""},
        {id: 20, img: '/img/20.jpg', stat: ""},
        {id: 21, img: '/img/21.jpg', stat: ""},
        {id: 21, img: '/img/21.jpg', stat: ""},
        {id: 22, img: '/img/22.jpg', stat: ""},
        {id: 22, img: '/img/22.jpg', stat: ""},
        {id: 23, img: '/img/23.jpeg', stat: ""},
        {id: 23, img: '/img/23.jpeg', stat: ""},
        {id: 24, img: '/img/24.jpeg', stat: ""},
        {id: 24, img: '/img/24.jpeg', stat: ""},
        {id: 25, img: '/img/25.jpeg', stat: ""},
        {id: 25, img: '/img/25.jpeg', stat: ""},
        {id: 26, img: '/img/26.jpeg', stat: ""},
        {id: 26, img: '/img/26.jpeg', stat: ""}]
.sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

export default Cards