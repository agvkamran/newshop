import { RiShoppingBasketLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { selectToken } from "../modules/redux/user/selector";

const BasketLogic = (props) => {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const { items, productInfoId, removeFromBasketAC, addToBasketAC } = props;
    const navigate = useNavigate();

    const addToBasket = () => {
        if (token) {
            dispatch(addToBasketAC(productInfoId))
        }
        else {
            navigate('/signIn')
        }
    };

    const removeFromBasket = () => {
        if (token) {
            dispatch(removeFromBasketAC(productInfoId))
        }
        else {
            navigate('/signIn')
        }
    };

    return (
        <div>
            <button onClick={items?.some(item => item?.id === productInfoId)
                ? () => removeFromBasket(productInfoId)
                : () => addToBasket(productInfoId)}>
                {items?.some(item => item?.id === productInfoId) ? <p>Delete from <RiShoppingBasketLine /></p> : <p>Add to <RiShoppingBasketLine /></p>}
            </button>
        </div>
    )
}

export default BasketLogic;