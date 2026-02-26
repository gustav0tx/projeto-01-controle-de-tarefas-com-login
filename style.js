import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5
  },
  textArea: {
    marginTop: 10
  },  
  inputsArea: {
    margin: 6
  },
  btn: {
    backgroundColor: 'darkblue',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 20
  }
});

export default styles