import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    itemArea:{
        backgroundColor: '#dcdcdc',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        margin: 10,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    selected:{
        backgroundColor: '#2196F3',
    },
    txt:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    }
})

export default style;