import { StyleSheet, Text, View } from 'react-native';
import { theme } from './routineTheme';

export default function RoutineHeader() {
  return <View style={styles.container}><Text style={styles.title}>Rutinas</Text></View>;
}

const styles = StyleSheet.create({
  container: { width: '100%' },
  title: { fontSize: theme.text.title, fontWeight: 'bold', color: theme.colors.primary },
});
