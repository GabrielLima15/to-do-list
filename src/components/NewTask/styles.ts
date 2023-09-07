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
  name: {
    color: '#fff',
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    textAlign: 'center',
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
  checkboxProps: {
    paddingLeft: 12,
  },
  checkbox: {
    borderRadius: 999,
    borderColor: '#4EA8DE',
  },
})
