import { useEffect } from "react";
import CreateForm from "../../components/CreateForm/CreateForm";

const Create = ({profile}) => {
    useEffect(() => {
        if (profile === null) {
            document.location.href = "/login"
        }
    })
    return (
        <main>
            <CreateForm />
        </main>
    )
}


export default Create;