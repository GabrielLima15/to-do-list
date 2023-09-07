import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    height: 56,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    paddingRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressing: {
    backgroundColor: '#333333',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxProps: {
    paddingLeft: 12,
  },
  checkbox: {
    borderRadius: 999,
    borderColor: '#4EA8DE',
  },
})
