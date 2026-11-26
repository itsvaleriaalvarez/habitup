import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const GoalGrid: React.FC = () => {
  // Matriz de 21 días con colores progresivos de verde a amarillo
  const progressDays = [
    '#91F052', '#91F052', '#91F052', '#91F052', '#91F052', '#91F052', '#91F052',
    '#91F052', '#91F052', '#91F052', '#91F052', '#91F052', '#91F052', '#91F052',
    '#91F052', '#E2EC48', '#E2EC48', '#E2EC48', '#E2EC48', '#E2EC48', '#E2EC48',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Cumplimiento de Objetivos</Text>
      </View>

      <View style={styles.gridContainer}>
        {progressDays.map((color, idx) => (
          <View
            key={idx}
            style={[styles.circleDot, { backgroundColor: color }]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2B42B6',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'flex-start',
  },
  circleDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
