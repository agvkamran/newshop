import styled from "styled-components";
import { ImPrevious2, ImNext2 } from "react-icons/im";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Pagination = (props) => {
    const { setElementsInPage, currentPage, pages, activeButton } = props;
    return (
        <PaginationWrapper>
            <Previous onClick={() => setElementsInPage(1)} />
            <PreviousOneStep onClick={currentPage > 1 ? () => setElementsInPage(currentPage - 1) : () => setElementsInPage(currentPage)} />
            <Pages>{pages.map((page, idx) => {
                return (
                    <PageNumber style={activeButton == idx + 1
                        ? { backgroundColor: '#558599', color: '#fff', borderColor: '#558599' }
                        : { backgroundColor: '' }} key={idx} onClick={(e) => setElementsInPage(e.target.textContent)}>{page}</PageNumber>
                )
            })}</Pages>
            <NextOneStep onClick={currentPage == pages[pages.length - 1] ? () => setElementsInPage(currentPage) : () => setElementsInPage(currentPage + 1)} />
            <Next onClick={() => setElementsInPage(pages[pages.length - 1])} />
        </PaginationWrapper>
    )
}

const PaginationWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

const Pages = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    cursor: pointer;
`

const Previous = styled(ImPrevious2)`
    color: #558599;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid #558599;
    border-radius: 3px;
`

const Next = styled(ImNext2)`
    color: #558599;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid #558599;
    border-radius: 3px;
`

const PreviousOneStep = styled(MdOutlineKeyboardArrowLeft)`
    color: #558599;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid #558599;
    border-radius: 3px;
`

const NextOneStep = styled(MdOutlineKeyboardArrowRight)`
    color: #558599;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid #558599;
    border-radius: 3px;
`

const PageNumber = styled.span`
    font-size: 18px;
    border: 1px solid #558599;
    border-radius: 3px;
    padding: 0 10px;
    color: #558599;
    transition: .3s all ease-in;
`

export default Pagination;
