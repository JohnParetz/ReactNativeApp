import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>React Native Labs</Text>
        <Text style={styles.subtitle}>
          Simple styling example
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lab 1, basic text</Text>
          <Text style={styles.basicText}>
            React Native environment up and running
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lab 2, border style</Text>
          <Text style={styles.borderText}>
            Border style example
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lab 3, text styling</Text>
          <Text style={styles.styledText}>
            Styled text example
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0f172a',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#64748b',
    marginBottom: 24,
  },

  section: {
    marginBottom: 18,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 10,
  },

  basicText: {
    fontSize: 16,
    color: '#0f172a',
  },

  borderText: {
    borderWidth: 2,
    borderColor: '#3b82f6', // nicer blue
    padding: 12,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#eff6ff', // light blue background
    color: '#1e3a8a',
    fontWeight: '500',
  },

  styledText: {
    color: '#9333ea', // cleaner purple
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 10,
  },
});