import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from './routineTheme';
import RoutineCard, { RoutineItem } from './RoutineCard';

type Props = {
  title: string;
  items: RoutineItem[];
  selectedId: string | null;
  onItemPress: (id: string) => void;
  onViewAll: () => void;
};

export default function RoutineSection({ title, items, selectedId, onItemPress, onViewAll }: Props) {
  return (
    <View style={styles.section}>
      <View style={styles.heading}>
        <Text style={styles.title}>{title}</Text>
        <Pressable onPress={onViewAll} hitSlop={theme.spacing.sm}>
          <Text style={styles.viewAll}>Ver todo</Text>
        </Pressable>
      </View>
      <View style={styles.cards}>
        {items.map((item) => (
          <RoutineCard key={item.id} item={item} selected={selectedId === item.id} onPress={() => onItemPress(item.id)} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { gap: theme.spacing.sm + theme.spacing.xs / 2 },
  heading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', minHeight: theme.text.subtitle + theme.spacing.xs },
  title: { fontSize: theme.text.subtitle, color: theme.colors.primary },
  viewAll: { fontSize: theme.text.caption, color: theme.colors.primary },
  cards: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch' },
});
