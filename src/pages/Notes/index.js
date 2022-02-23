import React, { useState, useEffect, useLayoutEffect } from 'react'
import { SafeAreaView, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import Style from './style'
import Save from '../../components/saveNote'
import Delete from '../../components/delNote'

export default function Notes({route,navigation}){
    const [note,setNote] = useState({
        title:'',
        note:''
    });

    useEffect(()=>{
        if(route.params.note){
            setNote(route.params.note);
        }
    },[])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => {
                return(
                    <View style={{flexDirection:'row', margin:20}}>
                        <TouchableOpacity onPress={()=>{Save(note); navigation.navigate('Home')}}>
                            <Feather name="save" size={24} color="black" style={{paddingRight:30}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>Delete(note,navigation)}>
                            <Feather name="trash-2" size={24} color="black" />
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
                    onChangeText={text=>setNote({ ...note, note: text })}
                    >
                </TextInput>
            </ScrollView>
        </SafeAreaView>
    )
}