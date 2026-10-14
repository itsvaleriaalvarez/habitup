import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '../constants/theme';

interface StatCardProps {
  title: string;
  value: string | number;
  iconName: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  iconName,
  iconColor = Theme.colors.primary,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={24} color={iconColor} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.cardBackground,
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.md,
    borderColor: Theme.colors.border,
    borderWidth: 1,
    marginBottom: Theme.spacing.sm,
  },
  iconContainer: {
    marginRight: Theme.spacing.md,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    ...Theme.typography.subtile,
  },
  value: {
    fontSize: 20,
    fontWeight: '700',
    color: Theme.colors.textPrimary,
    marginTop: Theme.spacing.xs,
  },
});