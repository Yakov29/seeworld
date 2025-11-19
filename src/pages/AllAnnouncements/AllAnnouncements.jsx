import React from "react"
import SuperEco from "../../components/SuperEco/SuperEco"


const AllAnnouncements = ({favorite, profile}) => {
     React.useEffect(() => {
            document.title = "See World | All Announcements"
        }, [])
    return (

        <main>
           
            <SuperEco favorite={favorite} profile={profile}/>
        </main>
    )
}

export default AllAnnouncements