import { Text, View, Image, TextInput, Pressable, Button } from 'react-native';
import styles from '../style';
import { useState } from 'react';

export default function RegisterPage({ setName, setPass, setSecPass, setLoged, registerBtn }) {

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

                <View style={styles.inputsArea}>
                    <Text>Senha novamente:</Text>
                    <TextInput
                        placeholder={'senha de novo'}
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={(newText) => setSecPass(newText)}
                    />
                </View>

            </View>

            <Pressable style={styles.btn} onPress={() => { registerBtn() }}>
                <Text style={{ color: 'white' }}>Registrar</Text>
            </Pressable>

            <Text>Já tem uma conta? <Button title={'Logar'} onPress={() => { setLoged(true) }} /></Text>

        </View>

    )

}