import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext);
    return (
        <div className="fixed bottom-0 bg-gray-100 p-3 w-full text-center">
            <h2>This site is developed by {user.name} - {user.email} </h2>
        </div>
    )
}

export default Footer;