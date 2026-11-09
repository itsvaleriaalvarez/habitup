import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { HabitProgressCard } from '../components/HabitProgressCard';
import { StatCard } from '../components/StatCard';
import { Theme } from '../constants/theme';

export default function ProgressScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.title}>Mi Progreso</Text>
        <Text style={styles.subtitle}>Resumen de tus hábitos y rachas</Text>
      </View>

      {/* Sección de Tarjetas de Estadísticas */}
      <View style={styles.section}>
        <StatCard
          title="Racha Actual"
          value="7 Días"
          iconName="flame"
          iconColor="#FF7675"
        />
        <StatCard
          title="Hábitos Completados"
          value="24 este mes"
          iconName="checkmark-circle"
          iconColor={Theme.colors.accent}
        />
        <StatCard
          title="Tasa de Éxito"
          value="85%"
          iconName="trophy"
          iconColor="#FDCB6E"
        />
      </View>

      {/* Sección de Hábitos Activos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hábitos Activos</Text>
        
        <HabitProgressCard
          name="Meditación diaria"
          progress={0.85}
          streak={12}
        />
        <HabitProgressCard
          name="Lectura 20 min"
          progress={0.60}
          streak={5}
        />
        <HabitProgressCard
          name="Ejercicio matutino"
          progress={0.40}
          streak={3}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  content: {
    padding: Theme.spacing.md,
    paddingTop: Theme.spacing.xl,
    gap: Theme.spacing.lg,
  },
  header: {
    marginBottom: Theme.spacing.xs,
  },
  title: {
    ...Theme.typography.header,
  },
  subtitle: {
    ...Theme.typography.subtile,
    marginTop: Theme.spacing.xs,
  },
  section: {
    gap: Theme.spacing.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing.xs,
  },
});