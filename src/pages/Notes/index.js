import React, { useState, useEffect, useLayoutEffect } from 'react'
import { SafeAreaView, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Style from './style';
import Save from '../../components/saveNote';
import Delete from '../../components/delNote';
import ModalNotification from '../../components/Notification';

export default function Notes({route,navigation}){
    const [date, setDate] = useState(new Date())
    const [note,setNote] = useState({
        title:'',
        note:'',
        date: date
    });
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(()=>{
        if(route.params.note){
            setNote(route.params.note);
        }
    },[])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => {
                return(
                    <View style={{width: 150, flexDirection:'row', justifyContent: 'space-between', marginRight: 30}}>
                        <TouchableOpacity onPress={()=>Save(note, navigation)}>
                            <Feather name="save" size={24} color="black"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                            <Feather name="bell" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>Delete(note, navigation)}>
                            <Feather name="trash-2" size={24} color="black"/>
                        </TouchableOpacity>
                    </View>
                )
            }  
        })
    },[navigation,note])

    return(
        <SafeAreaView style={Style.conteiner}>
            <TextInput 
                style={Style.txtTitleNote} 
                autoFocus={true} 
                maxLength={40}
                value={note.title} 
                placeholder={'Titulo'}
                onChangeText={text=>setNote({ ...note, title: text })}
            >
            </TextInput>
            <ScrollView>
                <TextInput style={Style.txtInput} 
                    multiline={true} 
                    value={note.note}
                    placeholder={'Anotação'}
                    onChangeText={text=>setNote({ ...note, note: text })}
                    >
                </TextInput>
            </ScrollView>
            <ModalNotification modalVisible={modalVisible} setModalVisible={setModalVisible} date={date} setDate={setDate}/>
        </SafeAreaView>
    )
}