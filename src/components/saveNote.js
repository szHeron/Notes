import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import updateNote from './updateNote';

export default async function SaveNote(note, navigation){
    async function getKey(){
        const note = await AsyncStorage.getItem('0')
        if(note === null){
            await AsyncStorage.setItem('0','1');
            return 1;
        }else{
            const key = String(Number(note) + 1);
            await AsyncStorage.setItem('0',key);
            return key;
        }
    }

    if(note.note === '' || note.title === ''){
        Alert.alert(
            'ERRO',
            'Preencha todos os campos!',
            [
                {
                    text:'OK',
                    style:'cancel'
                }
            ]
        )
    }else{
        try{
            let data = [];
            if(note.id){
                if(Array.isArray(JSON.parse(await AsyncStorage.getItem('notes')))){
                    data = JSON.parse(await AsyncStorage.getItem('notes'));
                }else{
                    data.push(JSON.parse(await AsyncStorage.getItem('notes')));
                }
                data = updateNote(data,note);
                await AsyncStorage.setItem('notes',JSON.stringify(data));
            }else{
                note.id=(await getKey())
                if(await AsyncStorage.getItem('notes')==null){
                    await AsyncStorage.setItem('notes',JSON.stringify(note));
                }else{
                    if(Array.isArray(JSON.parse(await AsyncStorage.getItem('notes')))){
                        data = JSON.parse(await AsyncStorage.getItem('notes'));
                    }else{
                        data.push(JSON.parse(await AsyncStorage.getItem('notes')));
                    }
                    data.push(note);
                    await AsyncStorage.setItem('notes',JSON.stringify(data));
                }
            }
            navigation.goBack();
        }catch(err){
            console.log(err);
            Alert.alert(
                'ERRO',
                'Não foi possivel salvar o arquivo',
                [
                    {
                        text:'OK',
                        style:'cancel'
                    }
                ]
            )
        }
    }
}