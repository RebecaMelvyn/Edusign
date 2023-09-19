import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <Text style={styles.text}>Edu sign</Text>
      </View>
        <Text style={styles.title}>Scan it</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: '10%',
  },
  contain: {
    padding: '1%',
    marginBottom: '5%',
  },
  text: {
    paddingRight: '5%',
    paddingLeft: '5%',
    color: '#fff',
    backgroundColor: '#ffc107',
  },
});
