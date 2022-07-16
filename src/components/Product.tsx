import { motion } from "framer-motion";
import styled from "styled-components";
import { NavLink } from "react-router-dom"
import { HiArrowNarrowRight } from "react-icons/hi";
import { addToFavoritesAC } from "../modules/redux/action";
import { useDispatch } from "react-redux";
import { CircleLoader } from 'react-spinners';

export const Product: React.FC = ({props}: any) => {
    const dispatch = useDispatch();

    const selectFavorite = (id: any) => {
        dispatch(addToFavoritesAC(id));
    };

    return (
        <Wrapper>
        {/* <CircleLoader /> */}
        {props?.map((product: any) => {
            return (
                <ProductWrapper key={product.id}>
                    <p onClick={() => selectFavorite(product.id)}>***</p>
                    <ImageWrapper>
                        <Image src={product?.image} alt='product_img' />
                    </ImageWrapper>
                    <Info>
                        <div>
                            <p>{product?.title.slice(0, 28)}</p>
                            <Price>{product?.price}$</Price>
                        </div>
                        <ArrowRight />
                        <Circle to={`/product/${product.id}`}/>
                    </Info>
                </ProductWrapper>
            )
        })}
    </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    padding: 30px 80px;
`;

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    transition: .3s all ease;
`;

const Circle = styled(NavLink)`
    width: 0em;
    height: 0em;
    border-radius: 50%;
    background-color: blue;
    position: absolute;
    background-color: inherit;
    transition: .5s all ease;
    bottom: -25%;
    right: -12%;
`;

const ProductWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 22em;
    max-width: 22em;
    min-height: 500px;
    max-height: 500px;
    margin: 30px 10px;
    padding-top: 20px;
    text-decoration: none;
    box-shadow: rgba(50, 50, 93, 0.10) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    background-color: #fff;
    border-radius: 25px;
    position: relative;
    // transition: .3s all ease;
    transition: box-shadow .2s linear;
    overflow: hidden;
    cursor: auto;
    &:hover ${Circle}{
        background-color: silver;
        width: 9em;
        height: 9em;
        cursor: pointer;
        opacity: 0.6;
    }
    &:hover {
        box-shadow: rgba(50, 50, 93, 0.35) 0px 50px 300px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
`;

const Image = styled.img`
    min-height: 325px;
    max-height: 325px;
    min-width: 75%;
    max-width: 75%;
`;

const Price = styled.p`
    font-size: 1.5em;
    color: #000;
    font-weight: bold;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    padding: 2em;
    position: relative;
`;

const ArrowRight = styled(HiArrowNarrowRight)`
    font-size: 32px;
`;