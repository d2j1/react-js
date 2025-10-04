import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";


const ItemList = (props) => {
    const { items } = props;

    const dispatch = useDispatch();


    const handleAddToCart = (item) => {
        // dispatch an action to add item to cart
       
        dispatch(addItem(item));
       

    }

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item} <button className="text-xl hover:cursor-pointer " onClick={() => handleAddToCart(item)}>Add +</button></li>
            ))}
        </ul>
    );
};

export default ItemList;