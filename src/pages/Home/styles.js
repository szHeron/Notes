import { StyleSheet } from 'react-native'
import Colors from '../../styles/colors'

const style = StyleSheet.create({
    conteiner:{
        flex:1,
        paddingHorizontal:20,
        paddingTop: 20
    },
    button:{
        zIndex:9,
        position:'absolute',
        bottom:30,
        right:40,
    },
    noteList:{
        justifyContent:'space-between',
        marginBottom:10
    },
    txtTitle:{
        margin:20,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    }
})

export default style;