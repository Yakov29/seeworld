import React, {useEffect} from "react";
import LoginModal from "../../components/LoginModal/LoginModal";

const Login = ({ login }) => {
    useEffect(() => {
        document.title = "SeeWorld | Вхiд"
    }, []);
    return (
        <main>
            <LoginModal login={login}/>
        </main>
    )
}

export default Login