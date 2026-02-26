import { Text, View, Image, TextInput, Pressable, Button } from 'react-native';
import styles from '../style';

export default function LoginPage({ setName, setPass, setLoged }) {

  return (

    <View style={styles.container}>

      <Image source={require('../assets/user.png')} style={{ width: 120, height: 120 }} />

      <View style={styles.textArea}>

        <View style={styles.inputsArea}>

          <Text>Nome:</Text>

          <TextInput
            placeholder={'nome'}
            style={styles.input}
            onChangeText={(newText) => setName(newText)}
          />

        </View>

        <View style={styles.inputsArea}>

          <Text>Senha:</Text>

          <TextInput
            placeholder={'senha'}
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(newText) => setPass(newText)}
          />

        </View>

      </View>

      <Pressable style={styles.btn}>

        <Text style={{ color: 'white' }}>Logar</Text>

      </Pressable>

      <Text>Não tem uma conta? <Button title={'Registrar'} onPress={() => { setLoged(false) }} /></Text>

    </View>

  )

}