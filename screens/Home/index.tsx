import { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, FlatList } from "react-native";
import { styles } from "./styles";

export default function Home() {
    const [focus, setFocus] = useState(false);
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    function handleAddNewTask() {
        setTasks(prevState => [...prevState, newTaskTitle]);
        setNewTaskTitle('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image source={require('../../assets/images/logo.png')} />
                </View>
            </View>

            <View style={styles.containerMain}>
                <View style={styles.form}>
                    <TextInput 
                        style={focus ? styles.inputOnFocus : styles.inputOnBlur} 
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        onChangeText={setNewTaskTitle}
                        value={newTaskTitle}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
                        <Image source={require('../../assets/images/plus.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerTitleListAll}>
                    <View style={styles.containerTitleList}>
                        <Text style={styles.titleListCreate}>Criadas</Text>
                        <View style={styles.containerNumberTitleList}><Text style={styles.numberTitleList}>0</Text></View>
                    </View>

                    <View style={styles.containerTitleList}>
                        <Text style={styles.titleListFinalized}>Concluídas</Text>
                        <View style={styles.containerNumberTitleList}><Text style={styles.numberTitleList}>0</Text></View>
                    </View>
                </View>

                    <FlatList
                        data={tasks}
                        keyExtractor={item => item}
                        renderItem={({ item  }) => (
                            <Text key={item}>Item 1: {item}</Text>
                        )}
                            showsVerticalScrollIndicator={false}
                            ListEmptyComponent={() => (
                                <View style={styles.containerListToDo}>
                                    <Image source={require('../../assets/images/clipboard.png')} />
                                    <Text style={styles.titleEmptyList}>Você ainda não tem tarefas cadastradas</Text>
                                    <Text style={styles.subtitleEmptyList}>Crie tarefas e organize seus itens a fazer</Text>
                                </View>
                            )}
                    />

            </View>
        </View>
    )
}