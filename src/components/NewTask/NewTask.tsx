/* eslint-disable react/jsx-no-undef */
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
import { Trash } from 'phosphor-react-native'

interface NewTaskProps {
  task: string
  onRemove: () => void
}

export function NewTask({ task, onRemove }: NewTaskProps) {
  const [isChecked, setChecked] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.checkboxProps}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          style={styles.checkbox}
          color={isChecked ? '#5E60CE' : undefined}
        />
      </View>
      <Text style={styles.name}>{task}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Trash color="#808080" size={20} />
      </TouchableOpacity>
    </View>
  )
}
