import { Text } from 'react-native'

import { useFlag } from '@nunogois/proxy-client-react-native'

export const HelloWorld = () => {
  const enabled = useFlag('test-feature')

  return <Text>{enabled ? 'Feature is enabled!' : 'Feature is disabled!'}</Text>
}
