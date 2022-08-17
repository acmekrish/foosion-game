import React from "react";

const Card = ({item, handleClick, id}) => {

    const itemStat = item.stat ? 'active' + item.stat: ""
    return ( 
        < div className = {'card'+ itemStat} onClick= {() => handleClick(id)}>
            <img src = {item.img} alt="" />
        </div>
     );
}
 
export default Card;