import { useState, useEffect } from "react";

const Profile = () => {
    const[userInfo, setUserInfo] = useState({ name:"Dummy Name",
                                              location:"Dummy Location"
                                            });
    useEffect(()=>{
        getUserData();
    });

    async function getUserData(){
        const data = await fetch("https://api.github.com/users/unzela");
        const json = await data.json();
        setUserInfo(json);  
    }
    return (
        <div>
            <h2>Profile component</h2>
            <img src ={userInfo.avatar_url} />
            <h3>{userInfo.name}</h3>
            <h3>{userInfo.location}</h3>
            <h3>{userInfo.bio}</h3>
        </div>
    )
}

export default Profile;