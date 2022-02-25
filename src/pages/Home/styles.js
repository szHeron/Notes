import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    conteiner:{
        flex:1,
        paddingHorizontal:20,
        paddingTop: 20
    },
    newNoteButton:{
        zIndex:9,
        position:'absolute',
        bottom:30,
        right:40,
        backgroundColor: '#fff',
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    noteList:{
        justifyContent:'space-between',
        margin: 5
    },
    txtTitle:{
        margin:20,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
})

export default style;