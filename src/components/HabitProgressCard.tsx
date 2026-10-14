import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '../constants/theme';

interface HabitProgressCardProps {
  name: string;
  progress: number; // Valor entre 0 y 1 (ej. 0.75 para 75%)
  streak: number;
}

export const HabitProgressCard: React.FC<HabitProgressCardProps> = ({
  name,
  progress,
  streak,
}) => {
  const percentage = Math.round(progress * 100);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.habitName}>{name}</Text>
        <Text style={styles.streakText}>🔥 {streak} días</Text>
      </View>

      {/* Barra de progreso */}
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
      </View>

      <Text style={styles.percentageText}>{percentage}% completado esta semana</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.cardBackground,
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.md,
    borderColor: Theme.colors.border,
    borderWidth: 1,
    marginBottom: Theme.spacing.sm,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.sm,
  },
  habitName: {
    fontSize: 16,
    fontWeight: '600',
    color: Theme.colors.textPrimary,
  },
  streakText: {
    fontSize: 14,
    fontWeight: '500',
    color: Theme.colors.textSecondary,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: Theme.colors.border,
    borderRadius: Theme.borderRadius.full,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Theme.colors.primary,
    borderRadius: Theme.borderRadius.full,
  },
  percentageText: {
    fontSize: 12,
    color: Theme.colors.textSecondary,
    marginTop: Theme.spacing.xs,
  },
});