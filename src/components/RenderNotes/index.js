import React from 'react'
import { TouchableOpacity, Text} from 'react-native'
import Style from './style'

export default function renderNote({item, navigation}){
    return(
        <TouchableOpacity style={Style.noteArea} onPress={()=>navigation.navigate('Notes', {note: item, search: true})}>
            <Text style={Style.txtNoteTitle} numberOfLines={1}>{item.title}</Text>
            <Text style={Style.txtNote} numberOfLines={5}>{item.note}</Text>
        </TouchableOpacity>  
    )
}
