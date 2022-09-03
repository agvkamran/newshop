import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserNameAC } from "../modules/redux/user/action";

const EditProfile = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    
    const changeName = () => {
        dispatch(changeUserNameAC(userName));
        setUserName('');
    }
    return (
        <div>
            <input value={userName} type="text" onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={() => changeName()}>cHANGE</button>            
        </div>
    )
}

export default EditProfile;