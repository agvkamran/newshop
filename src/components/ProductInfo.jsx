import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { addToBasketAC, addToFavoritesAC, removeFromBasketAC, removeFromFavoritesAC, removeProductInfoAC } from "../modules/redux/action";
import { selectBasket, selectFavorites, selectisLoading, selectProductInfo } from "../modules/redux/selectors";
import { getProductInfoACS } from "../modules/sagas/saga-action";
import { motion } from "framer-motion";
import { CircleLoader } from "react-spinners";
import styled from "styled-components";
import ReactImageMagnify from 'react-image-magnify';
import FavoriteLogic from "./FavoriteLogic";
import BasketLogic from "./BasketLogic";

export const ProductInfo = () => {
    const productInfo = useSelector(selectProductInfo);
    const basket = useSelector(selectBasket);
    const isLoading = useSelector(selectisLoading);
    const favorites = useSelector(selectFavorites);
    const productId = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        //@ts-ignore
        dispatch(getProductInfoACS(productId.id))
        return () => {
            dispatch(removeProductInfoAC());
        }
    }, [productId.id]);

    return (
        <Wrapper>
            {
                isLoading ? <InfoBlock animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    <InnerInfo>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: false,
                                src: productInfo?.image,
                                width: 500,
                                height: 700
                            },
                            largeImage: {
                                src: productInfo?.image,
                                width: 1200,
                                height: 1800
                            }
                        }}
                        />
                    </InnerInfo>
                    <Descriptions>
                        <h2>{productInfo?.title}</h2>
                        <p>{productInfo?.rating.rate}</p>
                        <p>{productInfo?.rating.count}</p>
                        <p>{productInfo?.description}</p>
                        <p>{productInfo?.price}</p>
                        <FavoriteLogic items={favorites} productInfoId={productInfo?.id} removeFromFavoritesAC={removeFromFavoritesAC} addToFavoritesAC={addToFavoritesAC} />
                        <BasketLogic items={basket} productInfoId={productInfo?.id} removeFromBasketAC={removeFromBasketAC} addToBasketAC={addToBasketAC} />
                    </Descriptions>
                </InfoBlock > : <CircleLoader color='#22577E' size={200} />
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    padding: 80px;
`

const InfoBlock = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 1012px;
    max-width: 1012px;
    min-height: 702px;
    max-height: 702px;
    border: 1px solid blue;
`

const InnerInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: lightblue;
    min-width: 400px;
    max-width: 400px;
    min-height: 600px;
    max-height: 600px;
`

const Descriptions = styled.div`
    display: flex;
    // align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: red;
    height: 700px;
    width: 500px;
    padding: 10px;
    padding: 30px 20px;
`