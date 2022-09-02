import { ArrowRight, Circle, Heart, Image, ImageWrapper, Info, Price, Products, ProductWrapper } from "./AllProducts";
import { addToFavoritesAC, removeFromFavoritesAC } from "../modules/redux/action";
import { useSelector } from "react-redux";
import { selectFavorites } from "../modules/redux/selectors";
import FavoriteLogic from "./FavoriteLogic";

export const Product = (props) => {
    const favorites = useSelector(selectFavorites);
    return (
        <Products>
            {props?.props?.map((product) => {
                return (
                    <ProductWrapper
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        key={product.id}>
                        <Heart>
                            <FavoriteLogic items={favorites} productInfoId={product?.id} removeFromFavoritesAC={removeFromFavoritesAC} addToFavoritesAC={addToFavoritesAC} />
                        </Heart>
                        <ImageWrapper>
                            <Image src={product?.image} alt='product_img' />
                        </ImageWrapper>
                        <Info>
                            <div>
                                <p>{product?.title.slice(0, 18)}</p>
                                <Price>{product?.price}$</Price>
                            </div>
                            <ArrowRight />
                            <Circle to={`/product/${product.id}`} />
                        </Info>
                    </ProductWrapper>
                )
            })}
        </Products>
    )
}

