import React, { useState, useEffect } from "react";
import "./Cabinet.css";


import { getProfileAPI } from "../../api/getProfileAPI";

const Cabinet = ({ data }) => {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        console.log(data.email)
        // getProfileAPI(email, password).then((data) => {
        //    console.log(data)
        // });
    }, []);
    return (
        <main>
            <span>email = {data.email}</span>

        </main>
    )
}

export default Cabinet