import { createContext } from "react";

const UserContext = createContext({
    user: {
    name: "Dummy Name",
    email: "DummyEmail@gmail.com"
}})

export default UserContext;