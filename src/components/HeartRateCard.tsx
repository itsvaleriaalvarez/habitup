import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HeartRateCard: React.FC = () => {
  // Alturas calibradas para simular la onda del electrocardiograma exacto
  const waveHeights = [10, 18, 12, 26, 8, 36, 14, 30, 12, 24, 18, 10, 22, 14, 18];

  return (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        <Ionicons name="pulse" size={20} color="#FFFFFF" />
        <Text style={styles.headerTitle}>Frecuencia cardiaca</Text>
      </View>

      <View style={styles.graphContainer}>
        <View style={styles.waveRow}>
          {waveHeights.map((h, index) => (
            <View key={index} style={[styles.waveBar, { height: h }]} />
          ))}
        </View>
      </View>

      <Text style={styles.metricValue}>79 Bpm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#EE9E4E',
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 16,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  graphContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  waveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: 38,
  },
  waveBar: {
    width: 3.5,
    backgroundColor: '#EE9E4E',
    borderRadius: 2,
  },
  metricValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
});