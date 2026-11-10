
import { Ionicons } from '@expo/vector-icons';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

const BLUE = '#0047D5';
const ORANGE = '#F18701';

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <Pressable
        style={styles.avatar}
        onPress={() =>
          Alert.alert('Foto de perfil', 'Aquí podrás cambiar tu foto.')
        }
        accessibilityRole="button"
      >
        <Ionicons name="person-outline" size={55} color="#FFFFFF" />
      </Pressable>

      <Pressable
        onPress={() =>
          Alert.alert('Editar perfil', 'Aquí podrás editar tu perfil.')
        }
        accessibilityRole="button"
      >
        <Text style={styles.edit}>EDITAR</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },
  title: {
    color: BLUE,
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 0,
  },
  avatar: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 0,
  },
  edit: {
    color: BLUE,
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 0.5,
    textAlign: 'center',
    marginTop: 13,
  },
});
