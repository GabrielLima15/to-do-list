/* eslint-disable jsx-a11y/alt-text */

import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Header } from '../../components/Header'
import { styles } from './styles'
import { ClipboardText, PlusCircle } from 'phosphor-react-native'
import { NewTask } from '../../components/NewTask/NewTask'
import React, { useState } from 'react'

export function Home() {
  const [task, setTask] = useState<string[]>([])
  const [taskName, setTaskName] = useState('')

  function handleAddNewTask() {
    if (!taskName) {
      Alert.alert('Campo vazio', 'Digite um nome para a tarefa!')
    } else if (task.includes(taskName)) {
      Alert.alert('Tarefa já existe', 'Adicione outra tarefa ou conclua essa!')
    }
    setTask((prevState) => [...prevState, taskName])
    setTaskName('')
  }

  function handleRemoveTask(name: string) {
    Alert.alert('Remover Tarefa', 'Deseja remover a tarefa?', [
      {
        text: 'Sim',
        onPress: () =>
          setTask((prevState) => prevState.filter((task) => task !== name)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <View style={styles.group}>
          <TextInput
            style={styles.input}
            value={taskName}
            onChangeText={setTaskName}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
            <PlusCircle color="#fff" size={19} />
          </TouchableOpacity>
        </View>

        <View style={styles.count}>
          <View style={styles.bolAndText}>
            <Text style={styles.create}>Criadas</Text>
            <View style={styles.bol}>
              <Text style={styles.countText}>0</Text>
            </View>
          </View>

          <View style={styles.bolAndText}>
            <Text style={styles.finished}>Concluídas</Text>
            <View style={styles.bol}>
              <Text style={styles.countText}>0</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={task}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <NewTask
              onRemove={() => handleRemoveTask(item)}
              task={item}
              key={item}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <ClipboardText color="#808080" size={70} />
              <Text style={styles.textPrimary}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.textSecondary}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
