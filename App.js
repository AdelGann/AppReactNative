import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Button} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button 
       color={"black"}
       title="Button"
       onPress={() => {alert("hola")}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
