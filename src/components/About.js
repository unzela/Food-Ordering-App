import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import { useEffect, useState } from "react";

const About = () => {
    return(
        <div>
            <p className="m-3">I'm Unzela Inamdar</p>
            {/* <Outlet /> //Profile will also work */}
            <Profile />
        </div>
    )
}

export default About;