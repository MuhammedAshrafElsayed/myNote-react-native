import React from 'react';
import Layout from '../components/Layout';
import NoteList from '../components/NoteList';
const Home = props => {
    const navigate = props.navigation.navigate;
    const openAddNote = () => {
        navigate('Add');
    }
    const openNoteEditor = (noteID) => {
        navigate('Edit', { noteID });
    }
    return <NoteList openAddNote = {openAddNote} onNotePress={openNoteEditor}></NoteList>
}

export default Home;