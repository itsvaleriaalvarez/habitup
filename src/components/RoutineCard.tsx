import { Image, ImageBackground, ImageSourcePropType, Pressable, StyleSheet, Text } from 'react-native';
import { theme } from './routineTheme';

export type RoutineItem = {
  id: string;
  title: string;
  image: ImageSourcePropType;
};

type Props = { item: RoutineItem; selected: boolean; onPress: () => void };

const cardGradient = require('../../assets/images/routines/card-gradient.png');

export default function RoutineCard({ item, selected, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={item.title}
      accessibilityState={{ selected }}
      onPress={onPress}
      style={({ pressed }) => [styles.card, selected && styles.selected, pressed && styles.pressed]}
    >
      <ImageBackground source={cardGradient} resizeMode="stretch" style={styles.gradient}>
        <Image source={item.image} resizeMode="cover" style={styles.photo} />
        <Text numberOfLines={2} style={styles.caption}>{item.title}</Text>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '27%',
    height: theme.layout.cardHeight,
    borderColor: theme.colors.cardBorder,
    borderWidth: theme.spacing.xs / 2,
    borderRadius: theme.radius.lg,
    overflow: 'hidden',
  },
  gradient: { flex: 1, width: '100%', alignItems: 'center' },
  photo: {
    width: '100%',
    height: theme.layout.cardImageHeight,
    borderRadius: theme.radius.lg - theme.spacing.xs,
  },
  caption: {
    flex: 1,
    fontSize: theme.text.caption,
    color: theme.colors.primary,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: theme.spacing.xs / 2,
    alignSelf: 'stretch',
  },
  selected: { borderColor: theme.colors.primary },
  pressed: { opacity: 0.8 },
});
