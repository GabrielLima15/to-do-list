/* eslint-disable react/jsx-no-undef */
import {
  ColorValue,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import Checkbox from 'expo-checkbox'
import { Trash } from 'phosphor-react-native'
import { useState } from 'react'

interface NewTaskProps {
  style: StyleProp<TextStyle>
  task: string
  onRemove: () => void
  value: boolean | undefined
  onValueChange: ((value: boolean) => void) | undefined
  color: ColorValue | undefined
}

export function NewTask({
  task,
  onRemove,
  onValueChange,
  color,
  value,
  style,
}: NewTaskProps) {
  const [isPressed, setIsPressed] = useState(false)

  const handlePressIn = () => {
    setIsPressed(true)
  }

  const handlePressOut = () => {
    setIsPressed(false)
  }

  const containerButton = isPressed ? styles.buttonPressing : styles.button
  return (
    <View style={styles.container}>
      <View style={styles.checkboxProps}>
        <Checkbox
          value={value}
          onValueChange={onValueChange}
          style={styles.checkbox}
          color={color}
        />
      </View>
      <Text style={style}>{task}</Text>

      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={containerButton}
        onPress={onRemove}
      >
        <Trash color={isPressed ? '#E25858' : '#808080'} size={20} />
      </TouchableOpacity>
    </View>
  )
}
