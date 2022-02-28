import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalView: {
    marginTop: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    height: '60%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  button: {
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    width: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonCancel: {
    backgroundColor: '#c70000',
  },
  buttonSave:{
    backgroundColor: '#2196F3',
  },
  txtStyle: {
    fontWeight: 'bold',
    color: '#fff'
  },
  buttonHours: {
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 150,
    marginBottom: 10
  },
  txtHours:{
    fontWeight: 'bold',
    color: '#000',
    fontSize: 25
  }
});

export default styles;