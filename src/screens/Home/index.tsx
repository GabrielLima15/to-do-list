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
  const [taskFinished, setTaskFinished] = useState(0)
  const [taskCreated, setTaskCreated] = useState(0)
  const [isPressed, setIsPressed] = useState(false)
  const [task, setTask] = useState<{ name: string; isChecked: boolean }[]>([])
  const [taskName, setTaskName] = useState('')

  const containerButton = isPressed ? styles.buttonPressing : styles.button

  const handlePressIn = () => {
    setIsPressed(true)
  }

  const handlePressOut = () => {
    setIsPressed(false)
  }

  function handleAddNewTask() {
    if (!taskName) {
      Alert.alert('Campo vazio', 'Digite um nome para a tarefa!')
    } else if (task.some((item) => item.name === taskName)) {
      Alert.alert('Tarefa já existe', 'Adicione outra tarefa ou conclua essa!')
    } else {
      setTask((prevState) => [
        ...prevState,
        { name: taskName, isChecked: false },
      ])
      setTaskName('')
      setTaskCreated(taskCreated + 1)
    }
  }

  function handleRemoveTask(name: string) {
    Alert.alert('Remover Tarefa', 'Deseja remover a tarefa?', [
      {
        text: 'Sim',
        onPress: () => {
          setTaskCreated(taskCreated - 1)
          setTask((prevState) =>
            prevState.filter((taskItem) => taskItem.name !== name),
          )
        },
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
          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={containerButton}
            onPress={handleAddNewTask}
          >
            <PlusCircle color="#fff" size={19} />
          </TouchableOpacity>
        </View>

        <View style={styles.count}>
          <View style={styles.bolAndText}>
            <Text style={styles.create}>Criadas</Text>
            <View style={styles.bol}>
              <Text style={styles.countText}>{taskCreated}</Text>
            </View>
          </View>

          <View style={styles.bolAndText}>
            <Text style={styles.finished}>Concluídas</Text>
            <View style={styles.bol}>
              <Text style={styles.countText}>{taskFinished}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={task}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <NewTask
              style={item.isChecked ? styles.taskFinished : styles.task}
              color={item.isChecked ? '#5E60CE' : undefined}
              onValueChange={(newValue) => {
                const updatedTasks = task.map((taskItem) =>
                  taskItem.name === item.name
                    ? { ...taskItem, isChecked: newValue }
                    : taskItem,
                )
                setTask(updatedTasks)
                if (newValue) {
                  setTaskFinished(taskFinished + 1)
                } else {
                  setTaskFinished(taskFinished - 1)
                }
              }}
              value={item.isChecked}
              onRemove={() => handleRemoveTask(item.name)}
              task={item.name}
              key={item.name}
            />
          )}
          showsVerticalScrollIndicator={false}
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
