import { Pressable, StyleSheet, Text } from 'react-native';
import { theme } from './routineTheme';

type Props = { label: string; onPress: () => void };

export default function RoutineModalButton({ label, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radius.md,
    alignItems: 'center',
  },
  label: {
    color: '#FFFFFF',
    fontSize: theme.text.body,
    fontWeight: '600',
  },
  pressed: { opacity: 0.8 },
});
