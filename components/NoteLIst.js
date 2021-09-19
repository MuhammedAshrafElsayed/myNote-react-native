
import React, { useState, useContext } from 'react';
import { NoteContext } from '../context/NoteProvider';
import {
    Dimensions,
    TouchableOpacity,
    View,
} from 'react-native';

import { NativeBaseProvider, Box, Text, Pressable, Heading, IconButton, Icon, HStack, Avatar, AddIcon, CloseIcon } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import DeleteICon from "../svg/delete";

export default function App(props) {
    const { onNotePress, openAddNote } = props;
    const navigate  = props.navigation;
    return (
        <Box textAlign="center" bg='white' flex={1} safeAreaTop>
            <Pressable
                onPress={() => openAddNote()}
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
                    <AddIcon color="rgb(0,100,0)"></AddIcon>
                </HStack>
            </Pressable>
            <Basic onNotePress={onNotePress} />
        </Box>
    );
}


function Basic({ onNotePress }) {
    const { deleteNote, getNotes } = useContext(NoteContext);
    const listData = getNotes();
    // const [listData, setListData] = useState(
    //     Array(5)
    //         .fill('')
    //         .map((_, i) => ({ key: `${i}`, text: `Asho #${i}` }))
    // );



    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        // const newData = [...listData];
        // const prevIndex = listData.findIndex(item => item.key === rowKey);
        // newData.splice(prevIndex, 1);
        //  setListData(newData);
        deleteNote(rowKey);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = (props) => {
        const { item, index } = props;
        return (

            <Box>
                <Pressable
                    onPress={() => onNotePress(item.key)}
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
                    <HStack width="100%" px={4}>
                        <HStack space={2} alignItems="center">
                            <Avatar height={50} color="white" bg={"secondary.700"}>
                                <Text color="white">
                                    {item.key}
                                </Text>
                            </Avatar>
                        </HStack>
                        <HStack px={4} space={2} alignItems="center">
                            <Text color="black">
                                {item.headLine}
                            </Text>
                        </HStack>
                    </HStack>
                </Pressable>
            </Box>
        )
    };

    const renderHiddenItem = (data, rowMap) => (
        <HStack
            flex={1}
            pl={2}
        >
            <Pressable
                px={4}
                ml='auto'
                bg="dark.500"
                justifyContent="center"
                onPress={() => closeRow(rowMap, data.item.key)}
                _pressed={{
                    opacity: 0.5
                }}
            >
                <Text>close</Text>
            </Pressable>
            <Pressable
                px={4}
                bg="white"
                justifyContent="center"
                onPress={() => deleteRow(rowMap, data.item.key)}
                _pressed={{
                    opacity: 0.5
                }}
            >
                <CloseIcon />
                {/* <Text>delete</Text> */}

            </Pressable>
        </HStack>
    );

    return (
        <Box bg='white' safeArea
            flex={1}>
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-130}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
            />
        </Box>
    );
}