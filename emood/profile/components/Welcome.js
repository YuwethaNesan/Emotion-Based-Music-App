import {Text,View, StyleSheet} from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>
       Welcome
      
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
   heading: {
    margin: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#FF1493'
  },
  
  
 
});
