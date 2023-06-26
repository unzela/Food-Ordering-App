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
        <div className="flex px-56 py-16 font-medium">
            <img className="w-80 rounded-lg" src ={userInfo.avatar_url} />
            <div className="px-32 py-20 text-center">
                <h3>{userInfo.name}</h3>
                <h3>{userInfo.location}</h3>
                <h3>{userInfo.bio}</h3>
            </div>
        </div>
    )
}

export default Profile;