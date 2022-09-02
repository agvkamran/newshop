import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAllProducts, selectFiltered, selectSearchValue } from "../modules/redux/selectors";
import { motion } from "framer-motion";
import styled from "styled-components";
import { setFilteredAC } from "../modules/redux/action";
import { IoSearchOutline } from "react-icons/io5";
import { HiArrowNarrowRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export const Search = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectAllProducts);
    const searchValue = useSelector(selectSearchValue);
    const filtered = useSelector(selectFiltered);

    useEffect(() => {
        dispatch(setFilteredAC());
    }, [allProducts, searchValue]);

    return (
        <Wrapper
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {filtered?.map((product) => {
                return (
                    <ProductWrapper key={product.id}>
                        <ImageWrapper>
                            <Image src={product?.image} alt='product_img' />
                        </ImageWrapper>
                        <Info>
                            <div>
                                <p>{product?.title.slice(0, 28)}</p>
                                <Price>{product?.price}$</Price>
                            </div>
                            <ArrowRight />
                            <Circle to={`/product/${product.id}`} />
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
    flex-wrap: wrap;
    width: 100%;
    min-height: 100vh;
    padding: 30px 80px;
    background: linear-gradient(to bottom right, #FFDEF2, #E6F0FF);
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

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
`

const SearchIcon = styled(IoSearchOutline)`
    color: #000;
    font-size: 30px;
    height: 40px;
    padding-left: 10px;
    background: #fff;
    border-radius: 25px 0 0 25px;
`

const Input = styled.input`
    width: 85%;
    height: 40px;
    padding: 5px 20px;
    border: none;
    outline: none;
    font-size: 20px;
    border-radius: 0 25px 25px 0;
`

export default Search;