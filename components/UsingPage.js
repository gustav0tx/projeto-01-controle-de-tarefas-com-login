import { Text, View, Image, Pressable } from 'react-native'
import styles from '../style'
import { FlatList, TextInput } from 'react-native-web'
import { useRef, useState } from 'react'
import handleNewTask from '../hooks/handleNewTask'
import deleteTask from '../hooks/deleteTask'
import finishTask from '../hooks/finishTask'


export default function UsingPage({ user, }) {
    
    const [tasksList, setTasksList] = useState([])
    const [taskName, setTaskName] = useState('')

    const idGenerator = useRef(0)

    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 29, fontWeight: 'bold' }}>Bem-Vindo à sua Todo List, {user.name}</Text>


            {(tasksList.length <= 0) &&
                <Text style={{ fontSize: 18 }}>Parece que você não tem coisas na sua lista, adicione agora!</Text>
            }

            <TextInput 
                style={{ padding: 5, outlineColor: 'black', outlineStyle: 'solid', borderRadius: 8, margin: 20 }}
                onChangeText={(newTaskName) => {setTaskName(newTaskName)}}
            />

            <Pressable style={{ display: 'flex', alignItems: 'center', paddingHorizontal: 20, paddingBottom: 5, backgroundColor: 'skyblue', borderRadius: 10 }} onPress={() => {handleNewTask(taskName, idGenerator.current, tasksList, setTasksList)}}>
                <Text style={{ fontSize: 29, fontWeight: 'bold' }}>+</Text>
            </Pressable>

            <View style={{ display: 'flex', flexDirection: 'row', padding: 20 }}>

                <FlatList
                    data={tasksList}
                    keyExtractor={(item) => {item.id}}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: 'row', marginVertical: 5, backgroundColor: 'gray', padding: 10, gap: 80, borderRadius: 12, alignItems: 'center' }}>

                            <Text style={{ fontWeight: 'bold', fontSize: 19, textDecorationLine: item.isFinished ? 'line-through' : 'none', color: item.isFinished ? 'lightgray' : 'white'}}>{item.name}</Text>

                            <View style={{flexDirection: 'row', gap: 10}}>

                                <Pressable style={{ padding: 10, backgroundColor: 'green', borderRadius: 12 }} onPress={() => {finishTask(item.id ,tasksList, setTasksList)}}>
                                    <Image
                                        source={require('../assets/correto.png')}
                                        style={{ height: 20, width: 20 }}
                                    />
                                </Pressable>

                                <Pressable style={{ padding: 10, backgroundColor: 'red', borderRadius: 12 }} onPress={() => {deleteTask(item.id, tasksList, setTasksList)}}>
                                    <Image
                                        source={require('../assets/lata-de-lixo.png')}
                                        style={{ height: 20, width: 20 }}
                                    />
                                </Pressable>

                            </View>

                        </View>
                    }
                />

            </View>

        </View>
    )
}