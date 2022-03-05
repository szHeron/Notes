import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

export default async function delNote(note,navigation){
    if(note.id === undefined){
        Alert.alert(
            'ERRO',
            'Anotação ainda não foi criada',
            [
                {
                    text:'OK',
                    style:'cancel'
                }
            ]
        );
    }else{
        try{
            let data = JSON.parse(await AsyncStorage.getItem('notes'))
            for(let i = 0; i < data.length; i++) {
                if(data[i].id === note.id) {
                    data.splice(i,1);
                }
            }
            if(note.notificationId !== null){
                await Notifications.cancelScheduledNotificationAsync(note.notificationId);
            }
            await AsyncStorage.setItem('notes', JSON.stringify(data));
            navigation.goBack();
        }catch(err){
            console.log(err);
            Alert.alert(
                'ERRO',
                'Não foi possivel deletar o arquivo',
                [
                    {
                        text:'OK',
                        style:'cancel'
                    }
                ]
            );
        }
    }
    
}