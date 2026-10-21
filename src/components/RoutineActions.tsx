import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from './routineTheme';

type Props = {
  onCreate: () => void;
  onMyRoutines: () => void;
};

const gradient = require('../../assets/images/routines/action-gradient.png');

export default function RoutineActions({ onCreate, onMyRoutines }: Props) {
  return (
    <View style={styles.row}>
      <Pressable onPress={onCreate} style={({ pressed }) => [styles.action, pressed && styles.pressed]}>
        <ImageBackground source={gradient} resizeMode="stretch" imageStyle={styles.roundedImage} style={styles.image}>
          <Text style={styles.label}>Crear rutina</Text>
        </ImageBackground>
      </Pressable>
      <Pressable onPress={onMyRoutines} style={({ pressed }) => [styles.action, pressed && styles.pressed]}>
        <ImageBackground source={gradient} resizeMode="stretch" imageStyle={styles.roundedImage} style={styles.image}>
          <Text style={styles.label}>Mis rutina</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: theme.spacing.md },
  action: { flex: 1, borderRadius: theme.radius.lg, overflow: 'hidden' },
  image: { height: theme.layout.actionHeight, alignItems: 'center', justifyContent: 'center' },
  roundedImage: { borderRadius: theme.radius.lg },
  label: { color: theme.colors.primary, fontSize: theme.text.body, fontWeight: '700', textAlign: 'center' },
  pressed: { opacity: 0.85 },
});
