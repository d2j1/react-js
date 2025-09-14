import ItemList from "./ItemList";
import { useState } from "react";


const RestaurantCategories = ({name, index, items, showItems, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex(index);
    }
 
    return (<>
    {/* Header */}
    <div className="w-6/12 mx-auto bg-amber-100 shadow-lg p-4 m-4 flex justify-between rounded-xl"
   >
        <span className="font-bold text-lg"  >{name} ({items.length})</span>
        <span className="cursor-pointer" onClick={ handleClick}>See All</span>
    </div>
    
    {/* Accordion Body */}

    {showItems && <ItemList items={items} />}

    </>);
}

export default RestaurantCategories;