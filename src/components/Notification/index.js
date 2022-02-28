import React, {useState} from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Style from "./style";

const ModalNotification = ({modalVisible, setModalVisible, date, setDate}) => {
    const [showPicker, setShowPicker] = useState({showDate: false, showHours: false});
    
    const onChange = (event, selectedDate) => {
        setShowPicker({showDate: false, showHours: false});
        const currentDate = selectedDate || date;
        setDate(currentDate);
      };

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
                    <View style={{height:'60%'}}>
                        <Text>Data</Text>
                        <TouchableOpacity style={Style.buttonHours} onPress={()=>setShowPicker({...showPicker, showDate: true})}>
                            <Text style={Style.txtHours}>{currentFormattedData('date')}</Text>
                        </TouchableOpacity>
                        {showPicker.showDate&&<DateTimePicker mode='date' value={date} onChange={onChange}/>}
                        <Text>Horario</Text>
                        <TouchableOpacity style={Style.buttonHours} onPress={()=>setShowPicker({...showPicker, showHours: true})}>
                            <Text style={Style.txtHours}>{currentFormattedData('hours')}</Text>
                        </TouchableOpacity>
                        {showPicker.showHours&&<DateTimePicker mode='time' value={date} onChange={onChange}/>}
                    </View>
                    <View style={Style.modalButtons}>
                        <TouchableOpacity
                            style={[Style.button, Style.buttonSave]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={Style.txtStyle}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[Style.button, Style.buttonCancel]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={Style.txtStyle}>Cancelar</Text>
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