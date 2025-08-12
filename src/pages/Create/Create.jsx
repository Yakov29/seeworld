import React from "react";
import CreateForm from "../../components/CreateForm/CreateForm";

const Create = ({createAnnouncement, selectType}) => {
    return (
        <main>
            <CreateForm createAnnouncement={createAnnouncement} selectType={selectType}/>
        </main>
    )
}


export default Create;

