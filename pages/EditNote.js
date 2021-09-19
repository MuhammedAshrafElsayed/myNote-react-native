import React, { useContext, useState } from 'react';
import { Box, Pressable, HStack, Avatar, CheckIcon, TextArea } from 'native-base';
import { NoteContext } from '../context/NoteProvider';

const EditNote = (props) => {
    const { navigation:{navigate}, route: { params: { noteID } } } = props;
    const { getNoteByKey, editNote } = useContext(NoteContext);
    const Note =  getNoteByKey(noteID);
    const [text, onChangeText] = useState(Note.text);

    return <>
        <Box textAlign="center" bg='white' flex={1} safeAreaTop>
            <Pressable
                onPress={() => {
                    Note.text = text;
                    editNote(noteID, Note);
                    navigate('Home');

                }}
                alignItems='center'
                bg="white"
                borderBottomColor='trueGray.200'
                borderBottomWidth={1}
                justifyContent='center'
                height={110}
                underlayColor={'#AAA'}
                _pressed={{
                    bg: 'trueGray.200'
                }}
                py={8}
            >
                <HStack>
                    <CheckIcon color="rgb(0,200,0)"></CheckIcon >
                </HStack>
            </Pressable>
            <Box>
                <TextArea
                    // fontSize={50}
                    onChangeText={text => {
                        onChangeText(text);

                    }}
                    value={text} />
            </Box>
        </Box>

    </>
};

export default EditNote;