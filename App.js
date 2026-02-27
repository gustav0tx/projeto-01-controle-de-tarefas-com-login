import { Text, View, Image, TextInput, Pressable, Button } from 'react-native';
import styles from './style';
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import createUser from './hooks/createUser'
import verifyPass from './hooks/verifyPass'
import { useState } from 'react';
import UsingPage from './components/UsingPage';
import handleRegister from './hooks/handleRegister';
import finishTask from './hooks/finishTask'
import deleteTask from './hooks/deleteTask' 

export default function App() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [secPass, setSecPass] = useState('');

  const [loged, setLoged] = useState(false);
  const [logedShow, setLogedShow] = useState(false) //Valor padrao true
  const [using, setUsing] = useState(true) //Valor padrao false

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  

  return (
    <View style={styles.container}>

      {(loged && logedShow) &&

        <LoginPage
          setName={setName}
          setPass={setPass}
          setLoged={setLoged}
        />

      }

      {(!loged && logedShow) &&

        <RegisterPage
          setLoged={setLoged}
          setName={setName}
          setPass={setPass}
          setSecPass={setSecPass}
          registerBtn={handleRegister(setUser, setUsing, setLogedShow, setLoged, createUser, verifyPass, name, pass)}
        />

      }

      {(using && !logedShow) &&

        <UsingPage
          user={{name: 'guga', pass: 123, list: [{name: 'comer', isFinished: false}, {name: 'comer', isFinished: false}]}} //botar user dps
          fisishBtn={() => {finishTask()}}
          deleteBtn={() => {deleteTask()}}
        />

      }

    </View>
  );
}