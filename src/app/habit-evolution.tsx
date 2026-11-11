
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';

const habits = [
  {
    name: 'Tomar agua',
    progress: 0.85,
    completed: '6 de 8 días',
    icon: 'water-outline' as const,
  },
  {
    name: 'Hacer ejercicio',
    progress: 0.7,
    completed: '5 de 7 días',
    icon: 'barbell-outline' as const,
  },
  {
    name: 'Leer 20 minutos',
    progress: 0.6,
    completed: '4 de 7 días',
    icon: 'book-outline' as const,
  },
  {
    name: 'Dormir temprano',
    progress: 0.9,
    completed: '6 de 7 días',
    icon: 'moon-outline' as const,
  },
];

export default function HabitEvolutionScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ period?: string }>();

  const [period, setPeriod] = useState<'Semana' | 'Mes'>(
    params.period === 'Mes' ? 'Mes' : 'Semana',
  );

  const completion = period === 'Semana' ? '85%' : '78%';
  const completedDays =
    period === 'Semana' ? '6 de 7 días' : '23 de 30 días';

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={23} color="#0047D5" />
        </Pressable>

        <View style={styles.header}>
          <Text style={styles.title}>Evolución de hábitos</Text>
          <Text style={styles.subtitle}>
            Descubre cómo estás construyendo mejores hábitos.
          </Text>
        </View>

        <View style={styles.periodSelector}>
          {(['Semana', 'Mes'] as const).map((item) => (
            <Pressable
              key={item}
              style={[
                styles.periodButton,
                period === item && styles.periodActive,
              ]}
              onPress={() => setPeriod(item)}
            >
              <Text
                style={[
                  styles.periodText,
                  period === item && styles.periodTextActive,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.summaryCard}>
          <View>
            <Text style={styles.summaryLabel}>
              Cumplimiento de hábitos
            </Text>
            <Text style={styles.summaryValue}>{completion}</Text>
            <Text style={styles.summaryDescription}>
              {completedDays}
            </Text>
          </View>
          <Ionicons name="trending-up" size={48} color="#FFFFFF" />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Tus hábitos</Text>
          <Text style={styles.sectionCaption}>Tu avance actual</Text>
        </View>

        <View style={styles.habitsContainer}>
          {habits.map((habit) => (
            <View key={habit.name} style={styles.habitCard}>
              <View style={styles.habitHeader}>
                <View style={styles.habitIcon}>
                  <Ionicons
                    name={habit.icon}
                    size={22}
                    color="#0047D5"
                  />
                </View>

                <View style={styles.habitInfo}>
                  <Text style={styles.habitName}>{habit.name}</Text>
                  <Text style={styles.habitCompleted}>
                    {habit.completed}
                  </Text>
                </View>

                <Text style={styles.habitPercentage}>
                  {Math.round(habit.progress * 100)}%
                </Text>
              </View>

              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${habit.progress * 100}%` },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.tipCard}>
          <Ionicons name="star" size={24} color="#F18701" />
          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>¡Vas por buen camino!</Text>
            <Text style={styles.tipText}>
              La constancia es más importante que la perfección. Sigue
              avanzando un día a la vez.
            </Text>
          </View>
        </View>
      </ScrollView>

      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 30,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  header: {
    marginBottom: 22,
  },
  title: {
    color: '#0047D5',
    fontSize: 26,
    fontWeight: '800',
  },
  subtitle: {
    color: '#7A7468',
    fontSize: 13,
    marginTop: 6,
  },
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: '#F1F4FC',
    borderRadius: 16,
    padding: 4,
    marginBottom: 20,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 11,
    alignItems: 'center',
    borderRadius: 13,
  },
  periodActive: {
    backgroundColor: '#0047D5',
  },
  periodText: {
    color: '#7A7468',
    fontSize: 13,
    fontWeight: '600',
  },
  periodTextActive: {
    color: '#FFFFFF',
  },
  summaryCard: {
    backgroundColor: '#0047D5',
    borderRadius: 22,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  summaryLabel: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  summaryValue: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '800',
    marginTop: 4,
  },
  summaryDescription: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 3,
  },
  sectionHeader: {
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#0047D5',
    fontSize: 17,
    fontWeight: '700',
  },
  sectionCaption: {
    color: '#7A7468',
    fontSize: 12,
    marginTop: 4,
  },
  habitsContainer: {
    gap: 12,
  },
  habitCard: {
    backgroundColor: '#F5F7FF',
    borderRadius: 18,
    padding: 15,
  },
  habitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },
  habitIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#E2EAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  habitInfo: {
    flex: 1,
    marginLeft: 11,
  },
  habitName: {
    color: '#1C1C1C',
    fontSize: 13,
    fontWeight: '700',
  },
  habitCompleted: {
    color: '#7A7468',
    fontSize: 11,
    marginTop: 4,
  },
  habitPercentage: {
    color: '#0047D5',
    fontSize: 14,
    fontWeight: '800',
  },
  progressTrack: {
    height: 8,
    backgroundColor: '#DCE5FA',
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#F18701',
    borderRadius: 8,
  },
  tipCard: {
    backgroundColor: '#FFF5E9',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 22,
    marginBottom: 20,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    color: '#0047D5',
    fontSize: 14,
    fontWeight: '700',
  },
  tipText: {
    color: '#7A7468',
    fontSize: 12,
    marginTop: 4,
    lineHeight: 18,
  },
});
