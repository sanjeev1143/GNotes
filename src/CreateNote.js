import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Db } from './firebase_cofig';
import { collection, addDoc } from "firebase/firestore";

function CreateNote(props) {
    const [lists, setlists] = useState({
        title: "",
        content: "",
    })



    const [expand, setExpand] = useState(false);
    const noteRef = collection(Db, "Notes");

    function addNote(e) {

        const { name, value } = e.target;
        console.log(value);
        setlists((p) => {
            return {
                ...p, [name]: value,
            };
        })

    }

    const addNotes = async () => {
        const data = await addDoc(noteRef, lists)
        setlists({ title: "", content: "", })
    }
    const postData = async (e) => {
        props.save(lists);

    }

    return (
        <div className='createNote'>
            <form className='noteBox' method='POST'>

                {expand ? <input type='text' name='title' placeholder="Title" value={lists.title} onChange={addNote} /> : null}
                <textarea rows="" column="" name='content' onChange={addNote} onClick={() => { setExpand(true) }} onDoubleClick={() => { setExpand(false) }} placeholder='Write a note...' value={lists.content}></textarea>
                {expand ? <Button className='addnote' onClick={() => { postData(); addNotes() }}><AddIcon fontSize='large' /></Button> : null}
            </form>
        </div>
    )
}

export default CreateNote
