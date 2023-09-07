/* eslint-disable jsx-a11y/alt-text */
import { Image, View } from 'react-native'
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.imgLogo}>
      <Image source={require('../../../assets/Logo.png')} />
    </View>
  )
}
