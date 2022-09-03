import styled from "styled-components";
import { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { removeUserAC } from "../modules/redux/user/action";
import { selectDefaultName, selectName } from "../modules/redux/user/selector";
import { correctName } from "../utils/utils";
import { IoExitOutline } from "react-icons/io5";
import { RiEdit2Line } from "react-icons/ri"
import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Profile = () => {
    const dispatch = useDispatch();
    const [profileMenu, setProfileMenu] = useState(false);

    const defaultName = useSelector(selectDefaultName);
    const name = useSelector(selectName);

    useEffect(() => {
        correctName(defaultName).toUpperCase();
    },[name]);

    console.log(profileMenu)
    const exitProfile = () => {
        setProfileMenu(false);
        dispatch(removeUserAC());
    }

    const editProfile = () => {
        setProfileMenu(false);
    }

    return (
        <div>
            <BiUserCircle style={{ marginLeft: '15px', height: '30px', width: '30px', cursor: 'pointer', color: '#fff' }} onClick={() => setProfileMenu(prev => !prev)} />
            <ProfileMenuWrapper profileMenu={profileMenu} onClick={() => setProfileMenu(prev => !prev)}></ProfileMenuWrapper>
            {profileMenu && (<ProfileMenu>
                <UserWrapper>
                    <UserInfo>
                        <UserIcon />{name ? <h2>{name}</h2> : <h2>{correctName(defaultName).toUpperCase()}</h2>}
                    </UserInfo>
                    <CloseIcon onClick={() => setProfileMenu(false)}/>
                </UserWrapper>
                <Line></Line>
                <EditWrapper onClick={() => editProfile()}>
                    <EditIcion />
                    <EditNavlink to='/edit'>Edit profile</EditNavlink>
                </EditWrapper>
                <ExitWrapper onClick={() => exitProfile()}>
                    <ExitIcon /><h2>Exit</h2>
                </ExitWrapper>
            </ProfileMenu>)}
        </div>
    )
}

const EditNavlink = styled(NavLink)`
    text-decoration: none;
    color:#fff;
    font-size: 1.5em;
    font-weight: bold;
`

const ProfileMenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #141414;
    z-index: 3;
    opacity: .8;
    overflow-style: none;
    transition: .2s all ease;
    transform: ${props => props.profileMenu ? 'translateX(0)' : 'translateX(100%)'}
`

const ProfileMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;    
    height: 100vh;
    min-width: 400px;
    background: #558599;
    z-index: 3;
    color: #fff;
    // padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 5px;
`

const CloseIcon = styled(AiOutlineArrowRight)`
    height: 30px;
    width: 30px;
    color: #fff;
    cursor: pointer;
`

const UserIcon = styled(BiUserCircle)`
    height: 30px;
    width: 30px;
    color: #fff;
    margin-right: 5px;
`

const Line = styled.div`
    height: 1px;
    width: 100%;
    background: #fff;
`

const EditWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    margin: 5px;
`

const EditIcion = styled(RiEdit2Line)`
    height: 30px;
    width: 30px;
    color: #fff;
    margin-right: 5px;
`

const ExitWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    margin: 5px;
`

const ExitIcon = styled(IoExitOutline)`
    height: 30px;
    width: 30px;
    color: #fff;
    margin-right: 5px;
`

export default Profile;