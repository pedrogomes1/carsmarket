import { TouchableOpacity } from 'react-native'

interface IInputIcon {
  icon: any
  onPress: () => void
}

export function InputIconAction({ icon, onPress }: IInputIcon): JSX.Element {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>
}
