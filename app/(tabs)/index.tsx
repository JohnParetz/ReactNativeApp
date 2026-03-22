import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>React Native Labs</Text>

      <View style={styles.card}>
        <Text>React Native Environment Up And running</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.borderBox}>
          Border Styling Example
        </Text>
      </View>


      <View style={styles.card}>
        <Text style={styles.fancyText}>
          Styled Text Example
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f4f6f8',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,

    elevation: 3,
  },

  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  borderBox: {
    borderWidth: 2,
    borderColor: 'blue',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    padding: 10,
    textAlign: 'center',
  },

  fancyText: {
    color: 'purple',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    lineHeight: 28,
    textAlign: 'center',
    padding: 10,
  },
});