import React from "react";
import { Modal, Text, TouchableOpacity, View, FlatList } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import RenderDate from '../RenderDate'
import Style from "./style";

const days = [
    {
        id: 1,
        name: 'Seg',
        select: true
    },
    {
        id: 2,
        name: 'Ter',
        select: false
    },
    {
        id: 3,
        name: 'Qua',
        select: false
    },
    {
        id: 4,
        name: 'Qui',
        select: false
    },
    {
        id: 5,
        name: 'Sex',
        select: false
    },
    {
        id: 6,
        name: 'Sab',
        select: false
    },
    {
        id: 7,
        name: 'Dom',
        select: false
    }
]

const months = [
    {
        id: 1,
        name: 'Jan',
        select: true
    },
    {
        id: 2,
        name: 'Fev',
        select: false
    },
    {
        id: 3,
        name: 'Mar',
        select: false
    },
    {
        id: 4,
        name: 'Abr',
        select: false
    },
    {
        id: 5,
        name: 'Mai',
        select: false
    },
    {
        id: 6,
        name: 'Jun',
        select: false
    },
    {
        id: 7,
        name: 'Jul',
        select: false
    },
    {
        id: 8,
        name: 'Ago',
        select: false
    },
    {
        id: 9,
        name: 'Set',
        select: false
    },
    {
        id: 10,
        name: 'Out',
        select: false
    },
    {
        id: 11,
        name: 'Nov',
        select: false
    },
    {
        id: 12,
        name: 'Dez',
        select: false
    }
]

const ModalNotification = ({modalVisible, setModalVisible, date, setDate}) => {
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setMode('time');
    }

    const currentFormattedData = (type) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth()+1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours();
        const min = date.getMinutes();
        if(type === 'date'){
            return day + "/" + month + "/" + year;
        }else{
            return hours + ':' + min;
        }
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={Style.centeredView}>
                <View style={Style.modalView}>
                    <Text style={Style.modalText}>Marque o horario do lembrete</Text>
                    <View style={{height: '75%'}}>
                        <Text>Dias</Text>
                        <FlatList
                            data={days}
                            numColumns={1}
                            keyExtractor={(item)=>item.id.toString()}
                            horizontal
                            renderItem={({item})=>{
                                return(
                                    <RenderDate item={item}/>
                                )
                            }}
                        />
                        <Text>Mêses</Text>
                        <FlatList
                            data={months}
                            numColumns={1}
                            keyExtractor={(item)=>item.id.toString()}
                            horizontal
                            renderItem={({item})=>{
                                return(
                                    <RenderDate item={item}/>
                                )
                            }}
                        />
                        <Text>Horario</Text>
                    </View>
                    <View style={Style.modalButtons}>
                        <TouchableOpacity
                            style={[Style.button, Style.buttonSave]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={Style.textStyle}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[Style.button, Style.buttonCancel]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={Style.textStyle}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalNotification;

/*
<DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
*/