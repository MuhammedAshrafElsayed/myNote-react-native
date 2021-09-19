import React,{useContext, useState} from 'react'
import { Box, Pressable, HStack, Avatar, CheckIcon, TextArea } from 'native-base';
import { TextInput } from 'react-native';
import { NoteContext } from '../context/NoteProvider';


const AddNote = ({navigation: {navigate}}) => {
    const { addNote } = useContext(NoteContext);
    const [text, onChangeText] = useState("");
    const [headLine, onChangeheadLine] = useState("");

    return   <Box textAlign="center" bg='white' flex={1} safeAreaTop>
    <Pressable
        onPress={() => {
            const note = { text, headLine};
            addNote( note);
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
        <TextInput value={headLine} onChangeText={(text) => onChangeheadLine(text)}/>

    </Box>
    <Box>
        <TextArea
            // fontSize={50}
            h={"100%"}
            placeholder="Text Area Placeholder"
            onChangeText={text => {
                onChangeText(text);
            }}
            value={text} />
    </Box>
</Box>
}

export default  AddNote;
