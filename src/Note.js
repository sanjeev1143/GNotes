import React, { useState } from 'react'
import './App.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import { updateDoc, doc, deleteDoc } from 'firebase/firestore';
import SaveIcon from '@mui/icons-material/Save';
import { Db } from './firebase_cofig';
function Note(props) {
    const [updateNote, setUpdateNote] = useState(false);
    const [change, setChange] = useState({
        title: props.title,
        content: props.content
    })

    function addNote(e) {
        const { name, value } = e.target;
        console.log(value);
        setChange((prv) => {
            return {
                ...prv, [name]: value,
            };
        })

    }
    const Update = () => {
        setUpdateNote(true);

    }
    const save = async () => {
        const userDoc = doc(Db, "Notes", props.id)
        await updateDoc(userDoc, change)
        setUpdateNote(false);
    }
    const deleteNote = async () => {
        const userDoc = doc(Db, "Notes", props.id)
        await deleteDoc(userDoc);
    }
    return (
        <div className='notes'>
            {updateNote ? <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <input value={change.title} onChange={addNote} name="title" /><textarea value={change.content} onChange={addNote} name="content" />
                <div className='updateIcons'><Button onClick={save}><SaveIcon fontSize='large' /></Button></div>
            </div> : (<div ><h3><span>{props.title}</span></h3>
                <p>{props.content}</p><div className='updateIcons'><Button onClick={deleteNote}><DeleteForeverIcon fontSize='large' /></Button>
                    <Button onClick={Update}><EditIcon fontSize='large' /></Button></div></div>)
            }
        </div>
    )
}

export default Note
