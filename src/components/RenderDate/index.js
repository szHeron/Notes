import React from 'react'
import { TouchableOpacity, Text} from 'react-native'
import Style from './style'

export default function renderDate({item}){
    return(
        <TouchableOpacity style={item.select?[Style.itemArea,Style.selected]:Style.itemArea} onPress={()=>item.select = true}>
            <Text style={Style.txt} numberOfLines={1}>{item.name}</Text>
        </TouchableOpacity>
    )
}
