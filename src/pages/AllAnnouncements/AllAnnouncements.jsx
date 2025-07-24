import React from "react"
import SuperEco from "../../components/SuperEco/SuperEco"


const AllAnnouncements = () => {
     React.useEffect(() => {
            document.title = "See World | All Announcements"
        }, [])
    return (

        <main>
           
            <SuperEco/>
        </main>
    )
}

export default AllAnnouncements