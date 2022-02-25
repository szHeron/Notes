import React, {useState} from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Style from "./style";

const ModalNotification = ({modalVisible, setModalVisible, date, setDate}) => {
    const [mode, setMode] = useState('date');
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setMode('time');
    };
    const currentFormattedData = () => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth()+1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours();
        const min = date.getMinutes();
        return day+"/"+month+"/"+year+' as '+hours+':'+min;
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
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                    <Text>
                        {currentFormattedData()}
                    </Text>
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