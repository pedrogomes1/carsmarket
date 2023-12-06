import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#d8d8d833',
    borderRadius: 10,
    backgroundColor: '#d8d8d80d',
  },
  name: {
    marginTop: 25,
  },
  starIcon: {
    marginRight: 10,
  },
  containerRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 5,
  },
  review: {
    textDecorationLine: 'underline',
    fontSize: 12,
    color: '#808493',
  },
  price: {
    marginLeft: 'auto',
    fontSize: 18,
  },
})
