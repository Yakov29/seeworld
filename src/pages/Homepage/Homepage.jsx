import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Criteria from "../../components/Criteria/Criteria";
import Country from "../../components/Country/Country";
import Announcement from "../../components/Announcement/Announcement";

import { france } from "../../data/country1";
import { italy } from "../../data/country2";


const Homepage = () => {
    useEffect(() => {
        document.title = "See World | Home"
    }, [])
    return (
        <main>
            <Hero/>
            <Criteria />
            <Country franceData={france} italyData={italy}/>
            <Announcement />
        </main>
    )
}


export default Homepage