import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}> 
      <Link href="/home" style={styles.button}>
        Go to home screen
      </Link>
      <Link href="/donate" style={styles.button}>
        Go to donate screen
      </Link>
      <Link href="/favorites" style={styles.button}>
        Go to favorites screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
