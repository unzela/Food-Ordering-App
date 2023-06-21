import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1>Footer</h1>
            <h2>This site is developed by {user.name} - {user.email} </h2>
        </div>
    )
}

export default Footer;