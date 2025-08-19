import React from "react"
import SuperEco from "../../components/SuperEco/SuperEco"


const AllAnnouncements = ({favorite}) => {
     React.useEffect(() => {
            document.title = "See World | All Announcements"
        }, [])
    return (

        <main>
           
            <SuperEco favorite={favorite}/>
        </main>
    )
}

export default AllAnnouncements