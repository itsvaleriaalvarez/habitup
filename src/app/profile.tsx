
import { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from '../components/BottomNavigation';

const BLUE = '#0047D5';
const ORANGE = '#F18701';
const BACKGROUND = '#F8F9FA';

const sections = [
  {
    title: 'Datos personales',
    description: 'Consulta y actualiza tu información personal.',
    details: ['Nombre completo', 'Fecha de nacimiento', 'Sexo'],
  },
  {
    title: 'Datos de la cuenta',
    description: 'Administra la información de tu cuenta.',
    details: ['Correo electrónico', 'Contraseña', 'Privacidad'],
  },
  {
    title: 'Ajustes de estilo de vida',
    description: 'Personaliza tus hábitos y preferencias.',
    details: ['Actividad física', 'Descanso', 'Alimentación'],
  },
  {
    title: 'Programa personalizado',
    description: 'Consulta las opciones de tu programa.',
    details: ['Mis objetivos', 'Mis recomendaciones'],
  },
  {
    title: 'Informe de salud',
    description: 'Revisa la información de tu seguimiento.',
    details: ['Resumen de salud', 'Historial de progreso'],
  },
];

export default function ProfileScreen() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Perfil</Text>

        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={styles.avatarSymbol}>♙</Text>
          </View>

          <Pressable
            onPress={() =>
              Alert.alert(
                'Editar perfil',
                'Aquí conectaremos la edición de tu foto.'
              )
            }
          >
            <Text style={styles.edit}>Editar</Text>
          </Pressable>
        </View>

        <View style={styles.sections}>
          {sections.map((section, index) => {
            const isExpanded = expanded === index;

            return (
              <View key={section.title} style={styles.card}>
                <Pressable
                  style={styles.row}
                  onPress={() =>
                    setExpanded(isExpanded ? null : index)
                  }
                  accessibilityRole="button"
                  accessibilityState={{ expanded: isExpanded }}
                >
                  <Text style={styles.sectionTitle}>
                    {section.title}
                  </Text>

                  <Text style={styles.chevron}>
                    {isExpanded ? '⌄' : '›'}
                  </Text>
                </Pressable>

                {isExpanded && (
                  <View style={styles.details}>
                    <Text style={styles.description}>
                      {section.description}
                    </Text>

                    {section.details.map((detail) => (
                      <Pressable
                        key={detail}
                        style={styles.detailRow}
                        onPress={() =>
                          Alert.alert(detail, 'Esta opción se conectará más adelante.')
                        }
                      >
                        <Text style={styles.detailText}>{detail}</Text>
                        <Text style={styles.detailChevron}>›</Text>
                      </Pressable>
                    ))}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>

      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 14,
    paddingBottom: 28,
  },
  title: {
    color: BLUE,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 18,
  },
  profile: {
    alignItems: 'center',
    marginBottom: 26,
    gap: 8,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: '#E4ECFF',
    borderWidth: 3,
    borderColor: BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarSymbol: {
    color: BLUE,
    fontSize: 58,
  },
  edit: {
    color: BLUE,
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  sections: {
    gap: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DCE5F5',
    overflow: 'hidden',
  },
  row: {
    minHeight: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    flex: 1,
    color: BLUE,
    fontSize: 15,
    fontWeight: '600',
    paddingRight: 12,
  },
  chevron: {
    color: ORANGE,
    fontSize: 28,
  },
  details: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  description: {
    color: '#636E72',
    fontSize: 13,
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#EDF0F5',
  },
  detailText: {
    color: '#2D3436',
    fontSize: 14,
  },
  detailChevron: {
    color: BLUE,
    fontSize: 22,
  },
});
