import { Text, View, Image, Pressable } from 'react-native'
import styles from '../style'
import { FlatList } from 'react-native-web'

export default function UsingPage({ user, fisishBtn, deleteBtn }) {
    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 29, fontWeight: 'bold' }}>Bem-Vindo à sua Todo List, {user.name}</Text>


            {(user.list.length <= 0) &&
                <Text style={{ fontSize: 18 }}>Parece que você não tem coisas na sua lista, adicione agora!</Text>
            }

            <Pressable style={{ display: 'flex', alignItems: 'center', paddingHorizontal: 20, paddingBottom: 5, backgroundColor: 'skyblue', borderRadius: 10 }}>
                <Text style={{ fontSize: 29, fontWeight: 'bold' }}>+</Text>
            </Pressable>

            <View style={{ display: 'flex', flexDirection: 'row', padding: 20 }}>

                <FlatList
                    data={user.list}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: 'row', marginVertical: 5, backgroundColor: 'gray', padding: 10, gap: 80, borderRadius: 12, alignItems: 'center' }}>

                            <Text style={{ fontWeight: 'bold', fontSize: 19 }}>{item.name}</Text>

                            <View style={{flexDirection: 'row', gap: 10}}>

                                <Pressable style={{ padding: 10, backgroundColor: 'green', borderRadius: 12 }} onPress={fisishBtn}>
                                    <Image
                                        source={require('../assets/correto.png')}
                                        style={{ height: 20, width: 20 }}
                                    />
                                </Pressable>

                                <Pressable style={{ padding: 10, backgroundColor: 'red', borderRadius: 12 }} onPress={deleteBtn}>
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