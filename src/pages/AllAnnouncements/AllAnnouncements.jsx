import { useEffect } from "react"
import SuperEco from "../../components/SuperEco/SuperEco"


const AllAnnouncements = ({favorite, profile}) => {
     useEffect(() => {
            document.title = "See World | All Announcements"
        }, [])
    return (

        <main>
           
            <SuperEco favorite={favorite} profile={profile}/>
        </main>
    )
}

export default AllAnnouncements