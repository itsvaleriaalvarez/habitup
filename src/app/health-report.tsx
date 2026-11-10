
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from '../components/BottomNavigation';
import { GoalGrid } from '../components/GoalGrid';
import { HeartRateCard } from '../components/HeartRateCard';
import { MetricCards } from '../components/MetricCards';

export default function HealthReportScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ period?: string }>();

  const period = params.period || 'Resumen';

  const subtitle =
    period === 'Semana'
      ? 'Así ha sido tu actividad durante esta semana.'
      : period === 'Mes'
        ? 'Así ha sido tu actividad durante este mes.'
        : 'Conoce cómo estás avanzando y cuida tu bienestar.';

  const sectionTitle =
    period === 'Semana'
      ? 'Estadísticas semanales'
      : period === 'Mes'
        ? 'Estadísticas mensuales'
        : 'Resumen de actividad';

  const score = period === 'Semana' ? '85%' : period === 'Mes' ? '78%' : '85%';

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={23} color="#0047D5" />
          </Pressable>

          <Text style={styles.title}>Informe de salud</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <View style={styles.scoreCard}>
          <View>
            <Text style={styles.scoreLabel}>Tu bienestar</Text>
            <Text style={styles.score}>{score}</Text>
            <Text style={styles.scoreDescription}>
              ¡Vas por buen camino!
            </Text>
          </View>
          <Ionicons name="heart-circle" size={64} color="#FFFFFF" />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{sectionTitle}</Text>
          <Text style={styles.sectionSubtitle}>Tus métricas</Text>
        </View>

        <MetricCards />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Salud cardiovascular</Text>
          <Text style={styles.sectionSubtitle}>Frecuencia cardíaca</Text>
        </View>

        <HeartRateCard />

        <View style={styles.goalCard}>
          <GoalGrid />
        </View>

        <Pressable
          style={styles.detailButton}
          onPress={() =>
            router.push({
              pathname: '/habit-evolution',
              params: {
                period: period === 'Mes' ? 'Mes' : 'Semana',
              },
            })
          }
        >
          <View>
            <Text style={styles.detailButtonText}>
              Ver evolución de hábitos
            </Text>
            <Text style={styles.detailSubtitle}>
              Consulta tu progreso y tus hábitos
            </Text>
          </View>
          <Ionicons
            name="arrow-forward-circle"
            size={28}
            color="#FFFFFF"
          />
        </Pressable>
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
  header: {
    marginBottom: 20,
  },
  backButton: {
    marginBottom: 12,
    alignSelf: 'flex-start',
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
  scoreCard: {
    backgroundColor: '#0047D5',
    borderRadius: 22,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  scoreLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  score: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '800',
    marginTop: 3,
  },
  scoreDescription: {
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
  sectionSubtitle: {
    color: '#7A7468',
    fontSize: 12,
    marginTop: 4,
  },
  goalCard: {
    marginTop: 10,
    padding: 14,
    backgroundColor: '#F5F7FF',
    borderRadius: 20,
  },
  detailButton: {
    backgroundColor: '#F18701',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 20,
  },
  detailButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  detailSubtitle: {
    color: '#FFFFFF',
    fontSize: 11,
    marginTop: 4,
  },
});
