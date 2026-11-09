
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './routineTheme';

export default function RoutineHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rutinas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.primary,
  },
});
