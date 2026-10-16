import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MetricCards: React.FC = () => {
  // Patron de barras para la gráfica de sueño
  const sleepBars = [12, 28, 16, 32, 20, 36, 18, 24];

  return (
    <View style={styles.grid}>
      {/* 1. Calorías Activas */}
      <View style={[styles.card, { backgroundColor: '#8CAEEB' }]}>
        <Text style={styles.cardTitle}>Calorias activas</Text>
        <View style={styles.pillContainer}>
          <Text style={styles.pillText}>670 Cal</Text>
        </View>
      </View>

      {/* 2. Pasos */}
      <View style={[styles.card, { backgroundColor: '#E29DF5' }]}>
        <View style={styles.iconRow}>
          <Ionicons name="footsteps" size={18} color="#FFFFFF" />
          <Text style={styles.cardTitle}>Pasos</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: '50%' }]} />
        </View>
        <Text style={styles.stepsValue}>999/2000</Text>
      </View>

      {/* 3. Sueño (Mejorado) */}
      <View style={[styles.card, { backgroundColor: '#9E68ED' }]}>
        <View style={styles.iconRow}>
          <Ionicons name="moon" size={18} color="#FFFFFF" />
          <Text style={styles.cardTitle}>Sueño</Text>
        </View>
        <View style={styles.sleepBarsRow}>
          {sleepBars.map((h, i) => (
            <View key={i} style={[styles.sleepBar, { height: h }]} />
          ))}
        </View>
      </View>

      {/* 4. Agua */}
      <View style={[styles.card, { backgroundColor: '#71C4F8' }]}>
        <View style={styles.iconRow}>
          <Ionicons name="water" size={18} color="#FFFFFF" />
          <Text style={styles.cardTitle}>Agua</Text>
        </View>
        <View style={styles.waterBox}>
          <Text style={styles.waterText}>6/8 vasos</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 14,
  },
  card: {
    width: '47%',
    height: 135,
    borderRadius: 22,
    padding: 16,
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  pillContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  pillText: {
    color: '#8CAEEB',
    fontWeight: '700',
    fontSize: 13,
  },
  progressTrack: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#522A82',
    borderRadius: 4,
  },
  stepsValue: {
    color: '#522A82',
    fontWeight: '700',
    fontSize: 12,
  },
  sleepBarsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 5,
    height: 42,
  },
  sleepBar: {
    width: 6,
    backgroundColor: '#43196E',
    borderRadius: 3,
  },
  waterBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: 'center',
  },
  waterText: {
    color: '#2858A6',
    fontWeight: '700',
    fontSize: 13,
  },
});