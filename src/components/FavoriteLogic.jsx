import styled from "styled-components";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../modules/redux/user/selector";

const FavoriteLogic = (props) => {
    const dispatch = useDispatch();
    const { items, productInfoId, removeFromFavoritesAC, addToFavoritesAC } = props;
    const token = useSelector(selectToken);
    const navigate = useNavigate();

    const addToFavorite = () => {
        if (token) {
            dispatch(addToFavoritesAC(props.productInfoId))
        }
        else {
            navigate('/signIn')
        }
    };

    const removeFromFavorite = () => {
        if (token) {
            dispatch(removeFromFavoritesAC(props.productInfoId))
        }
        else {
            navigate('/signIn')
        }
    };

    return (
        <div>
            <p onClick={items.some(e => e?.id === productInfoId) ? () => removeFromFavorite(productInfoId) : () => addToFavorite(props.productInfoId)}>
                {items.map(item => item?.id).includes(productInfoId) ? <HeartFill /> : <SuitHeart />}</p>
        </div>
    )
}

export default FavoriteLogic;

const HeartFill = styled(BsSuitHeartFill)`
    width: 28px;
    height: 28px;
    color: red;
    cursor: pointer;
`
const SuitHeart = styled(BsSuitHeart)`
    width: 28px;
    height: 28px;
    color: red;
    cursor: pointer;
`