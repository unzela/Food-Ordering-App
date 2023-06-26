import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import { useEffect, useState } from "react";

const About = () => {
    return(
        <div>
            {/* <Outlet /> //Profile will also work */}
            <Profile />
        </div>
    )
}

export default About;