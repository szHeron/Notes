import { StyleSheet, Dimensions } from 'react-native'
import Colors from './../../styles/colors'

const width = (Dimensions.get('window').width - 60)/2
const height = (Dimensions.get('window').height - 400)/2
const style = StyleSheet.create({
    noteArea:{
        backgroundColor:Colors.notes,
        width: width,
        height: height,
        padding:10,
        borderRadius:10,
    },
    txtNoteTitle:{
        color:'#000',
        fontSize:16,
        fontWeight:'bold'
    },
    txtNote:{
        color:'#000',
    }
})

export default style;