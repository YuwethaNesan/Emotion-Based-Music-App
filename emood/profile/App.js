import {SafeAreaView, StyleSheet} from 'react-native';

// You can import supported modules from npm

import Logo from './components/Logo';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Welcome/>
     <Logo/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f5e7e4',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});
