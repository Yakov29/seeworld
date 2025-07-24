import React from "react";
import Hero from "../../components/Hero/Hero";
import Criteria from "../../components/Criteria/Criteria";
import Contury from "../../components/Country/Country";
import Announcement from "../../components/Announcement/Announcement";

import { france } from "../../data/country1";
import { italy } from "../../data/country2";


const Homepage = () => {
    React.useEffect(() => {
        document.title = "See World | Home"
    }, [])
    return (
        <div>
            <main>
                <Hero/>
                <Criteria />
                <Contury franceData={france} italyData={italy}/>
                <Announcement />
            </main>

        </div>
    )
}


export default Homepage