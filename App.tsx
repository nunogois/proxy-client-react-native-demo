import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { FlagProvider } from '@nunogois/proxy-client-react-native'
import { HelloWorld } from './components/HelloWorld'

const config = {
  url: 'https://unleash-proxy.nunogois.com/proxy',
  clientKey: 'ng-unleash-secret',
  refreshInterval: 2,
  appName: 'unleash-test'
}

export default function App() {
  return (
    <View style={styles.container}>
      <FlagProvider config={config}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <HelloWorld />
        <StatusBar style='auto' />
      </FlagProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
