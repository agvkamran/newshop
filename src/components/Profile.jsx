import { BiUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { removeUserAC } from "../modules/redux/user/action";

const Profile = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <BiUserCircle style={{marginLeft: '15px', height: '30px', width: '30px', cursor: 'pointer', color: '#fff'}} onClick={() => dispatch((removeUserAC()))}/>
        </div>
    )
}

export default Profile;