
import { useState } from 'react';
import {
    Alert,
    KeyboardTypeOptions,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from '../components/BottomNavigation';

const BLUE = '#0047D5';
const ORANGE = '#F18701';
const LIGHT_BLUE = '#8EAAEE';
const WHITE = '#FFFFFF';
const DARK_TEXT = '#24436D';
const BORDER = '#C4D3EF';

const personalFields = [
  { label: 'Nombre', keyboardType: 'default' as KeyboardTypeOptions },
  { label: 'Apellido', keyboardType: 'default' as KeyboardTypeOptions },
  { label: 'Edad', keyboardType: 'numeric' as KeyboardTypeOptions },
  {
    label: 'Fecha de nacimiento',
    keyboardType: 'default' as KeyboardTypeOptions,
  },
  {
    label: 'País/Región',
    keyboardType: 'default' as KeyboardTypeOptions,
  },
];

const sections = [
  {
    title: 'Datos personales',
    details: [],
  },
  {
    title: 'Datos de la cuenta',
    details: ['Correo electrónico', 'Contraseña', 'Privacidad'],
  },
  {
    title: 'Ajustes de estilo de vida',
    details: ['Actividad física', 'Descanso', 'Alimentación'],
  },
  {
    title: 'Programa Personalizado',
    details: ['Mis objetivos', 'Mis recomendaciones'],
  },
  {
    title: 'Informe de Salud',
    details: ['Resumen de salud', 'Historial de progreso'],
  },
];

export default function ProfileScreen() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Perfil</Text>

        <View style={styles.profile}>
          <View style={styles.avatarContainer}>
            <Pressable
              style={styles.avatar}
              accessibilityRole="button"
              accessibilityLabel="Editar foto de perfil"
              onPress={() =>
                Alert.alert(
                  'Foto de perfil',
                  'Aquí podremos conectar la selección de tu foto.'
                )
              }
            >
              <Text style={styles.avatarSymbol}>♙</Text>
            </Pressable>

            <Pressable
              style={styles.avatarEdit}
              accessibilityRole="button"
              accessibilityLabel="Editar foto"
              onPress={() =>
                Alert.alert(
                  'Foto de perfil',
                  'Aquí podremos conectar la selección de tu foto.'
                )
              }
            >
              <Text style={styles.avatarEditSymbol}>✎</Text>
            </Pressable>
          </View>

          <Pressable
            onPress={() =>
              Alert.alert(
                'Editar perfil',
                'Aquí conectaremos la edición de tus datos personales.'
              )
            }
            accessibilityRole="button"
          >
            <Text style={styles.edit}>EDITAR PERFIL</Text>
          </Pressable>
        </View>

        <View style={styles.sections}>
          {sections.map((section, index) => {
            const isExpanded = expanded === index;
            const isPersonal = index === 0;

            return (
              <View key={section.title} style={styles.card}>
                <Pressable
                  style={[
                    styles.row,
                    isPersonal
                      ? styles.personalHeader
                      : styles.otherHeader,
                  ]}
                  onPress={() =>
                    setExpanded(isExpanded ? null : index)
                  }
                  accessibilityRole="button"
                  accessibilityState={{ expanded: isExpanded }}
                >
                  <Text style={styles.sectionTitle}>
                    {section.title}
                  </Text>

                  <Text
                    style={[
                      styles.chevron,
                      isPersonal
                        ? styles.personalChevron
                        : styles.otherChevron,
                    ]}
                  >
                    {isExpanded ? '⌄' : '›'}
                  </Text>
                </Pressable>

                {isExpanded && (
                  <View style={styles.details}>
                    {isPersonal
                      ? personalFields.map((field) => (
                          <TextInput
                            key={field.label}
                            style={styles.input}
                            placeholder={field.label}
                            placeholderTextColor="#7185A5"
                            keyboardType={field.keyboardType}
                            autoCapitalize="words"
                            returnKeyType="next"
                          />
                        ))
                      : section.details.map((detail) => (
                          <Pressable
                            key={detail}
                            style={styles.detailRow}
                            onPress={() =>
                              Alert.alert(
                                detail,
                                'Esta opción se conectará más adelante.'
                              )
                            }
                          >
                            <Text style={styles.detailText}>
                              {detail}
                            </Text>
                            <Text style={styles.detailChevron}>
                              ›
                            </Text>
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
    backgroundColor: WHITE,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 110,
  },
  title: {
    color: BLUE,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
  },
  profile: {
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 24,
    gap: 10,
  },
  avatarContainer: {
    width: 112,
    height: 112,
    position: 'relative',
  },
  avatar: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarSymbol: {
    color: WHITE,
    fontSize: 58,
    lineHeight: 66,
  },
  avatarEdit: {
    position: 'absolute',
    right: 0,
    bottom: 2,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: ORANGE,
    borderWidth: 3,
    borderColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEditSymbol: {
    color: WHITE,
    fontSize: 19,
    fontWeight: '700',
  },
  edit: {
    color: BLUE,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  sections: {
    gap: 12,
  },
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: BORDER,
  },
  row: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  personalHeader: {
    backgroundColor: ORANGE,
  },
  otherHeader: {
    backgroundColor: LIGHT_BLUE,
  },
  sectionTitle: {
    flex: 1,
    color: WHITE,
    fontSize: 14,
    fontWeight: '700',
    paddingRight: 10,
  },
  chevron: {
    fontSize: 26,
    lineHeight: 28,
    fontWeight: '400',
  },
  personalChevron: {
    color: WHITE,
  },
  otherChevron: {
    color: BLUE,
  },
  details: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 14,
    backgroundColor: WHITE,
    gap: 10,
  },
  input: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 22,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: DARK_TEXT,
    fontSize: 14,
    backgroundColor: WHITE,
  },
  detailRow: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    borderRadius: 18,
    backgroundColor: '#E1E9FC',
  },
  detailText: {
    flex: 1,
    color: DARK_TEXT,
    fontSize: 14,
    fontWeight: '600',
  },
  detailChevron: {
    color: BLUE,
    fontSize: 25,
    marginLeft: 8,
  },
});
