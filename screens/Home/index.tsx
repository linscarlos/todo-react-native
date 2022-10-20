import { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, FlatList, Pressable, Alert } from "react-native";

import { MaterialIcons, Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

import { styles } from "./styles";

interface Task {
    id: string | number[],
    title: string,
    isComplete: boolean
}

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const [focus, setFocus] = useState(false);
    
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [taskCompleted, setTaskCompleted] = useState(0);

    function handleAddNewTask() {

        setTasks([...tasks, {
            id: uuid.v4(),
            title: newTaskTitle,
            isComplete: false
        }]);
        setNewTaskTitle('');
    }

    function onCheckmarkPress(Event: String) {

        const idEvent = Event;

        const listTaskUpdate = tasks.filter(task => {
            if(task.id === idEvent){

                task.isComplete = !task.isComplete;

                if(task.isComplete === true){
                    setTaskCompleted(count => count + 1)
                }else(
                    setTaskCompleted(count => count - 1 )
                )
            }

            return task;
        })

        setTasks(listTaskUpdate)
      }

      function handleDeleteTask(event: String ) {
        const idEvent = event;

        function removeTask(){
            const taskWithoutDeletedOne = tasks.filter(task => {
                if(task.id != idEvent){
                    return task
                }else{
                    if(task.isComplete === true){
                        setTaskCompleted(count => count - 1 )
                    }
                }
            })

            setTasks(taskWithoutDeletedOne)
        }

        Alert.alert("Remover", `Remover esta tarefa?`, [
            {
              text: 'Sim',
              onPress: () => removeTask(),
            },
            {
              text: 'Não',
              style: 'cancel'
            }
          ])

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
                        <View style={styles.containerNumberTitleList}><Text style={styles.numberTitleList}>{tasks.length}</Text></View>
                    </View>

                    <View style={styles.containerTitleList}>
                        <Text style={styles.titleListFinalized}>Concluídas</Text>
                        <View style={styles.containerNumberTitleList}><Text style={styles.numberTitleList}>{taskCompleted}</Text></View>
                    </View>
                </View>

                    <FlatList
                        data={tasks}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => (
                            <View style={styles.taskListIncomplete}>
                                <Pressable onPress={() => onCheckmarkPress(String(item.id))}>
                                    {item.isComplete 
                                    ? 
                                    <MaterialIcons name="check-circle" size={20} color="#5E60CE" /> 
                                    : 
                                    <MaterialIcons name="radio-button-unchecked" size={20} color="#4EA8DE" />
                                    }
                                </Pressable>

                                    {item.isComplete 
                                    ?
                                    <Text style={styles.taskTitleListActive}>
                                    {item.title}
                                    </Text>
                                    :
                                    <Text style={styles.taskTitleList}>
                                    {item.title}
                                    </Text>
                                    }
                                <Pressable onPress={() => handleDeleteTask(String(item.id))}>
                                    <Feather name="trash-2" size={18} color="#808080" />
                                </Pressable>
                                
                            </View>
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