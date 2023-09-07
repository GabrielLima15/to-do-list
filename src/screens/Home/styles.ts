import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
    paddingBottom: 250,
  },
  form: {
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: -32,
    marginBottom: 42,
  },
  group: {
    flexDirection: 'row',
  },
  input: {
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressing: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#4EA8DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
  },
  create: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 13,
  },
  finished: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 13,
  },
  bolAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bol: {
    backgroundColor: '#333',
    borderRadius: 999,
  },
  countText: {
    paddingLeft: 8,
    paddingRight: 8,
    color: '#fff',
  },
  listEmpty: {
    borderTopWidth: 2, // Adicione esta linha
    borderTopColor: '#333', // Adicione esta linha
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  textPrimary: {
    color: '#808080',
    fontWeight: '700',
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 5,
  },
  textSecondary: {
    color: '#808080',
    fontWeight: '400',
    fontSize: 14,
    paddingBottom: 5,
  },
  task: {
    color: '#fff',
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    textAlign: 'center',
  },
  taskFinished: {
    color: '#fff',
    opacity: 0.5,
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    textAlign: 'center',
    textDecorationLine: 'line-through',
  },
})
