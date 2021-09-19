import React, {useState} from 'react';
export const NoteContext = React.createContext();
const NotePRovider = (props) => {
    const listData = Array(0)
            .fill('')
            .map((_, i) => ({ key: `${i}`, headLine: `Asho #${i}` ,text: `What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. #${i}` }));
    const [notes,  setNotes] = useState(listData);

    const noteService = {
        getNotes: () => notes,
        getNoteByKey: (key) => notes.find(n => n.key === key),
        addNote: (note) => {
            note.key =  notes.reduce(function(a, b) {
            console.log('alexa',a.key, b.key );
             
                return a.key ? Math.max(a.key, b.key): b.key;
            }, 0) + 1;
            setNotes([...notes, note])
        },
        deleteNote: (key) => {
            const newNotes = notes.filter(n => n.key != key );
            setNotes(newNotes);
        },
        editNote: (key,note) => {
            const newNotes = notes.filter(n => n.key !== key );
            newNotes.push(note);
            setNotes(newNotes);
        }
    }
    return <NoteContext.Provider value={noteService}>
        {props.children}
    </NoteContext.Provider>
}

export default NotePRovider;