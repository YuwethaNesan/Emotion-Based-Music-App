import {SafeAreaView, StyleSheet,Image} from 'react-native';

export default function Logo() {
  return (
    <SafeAreaView style={styles.container}>
  
       <Image style={styles.logo} source={require('../assets/logo-01.png')} />
      
    </SafeAreaView>
  );
}
//azma

const styles = StyleSheet.create({
  container: {
    backgroundColor:'transparent',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  logo:{
    width:200,
    height:200,
    alignSelf: 'center'


  },
});
