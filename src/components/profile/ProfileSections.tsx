
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

const sections = [
  {
    title: 'Datos personales',
    options: ['Nombre', 'Apellido', 'Edad', 'Fecha de nacimiento', 'País / Región'],
  },
  {
    title: 'Datos de la cuenta',
    options: [
      'Correo electrónico',
      'Número de teléfono',
      'Cambiar contraseña',
      'Privacidad y seguridad',
      'Cerrar sesión',
    ],
  },
  {
    title: 'Ajustes de estilo de vida',
    options: [
      'Actividad física',
      'Frecuencia de entrenamiento',
      'Horas de sueño',
      'Alimentación',
      'Consumo de agua',
    ],
  },
  {
    title: 'Programa personalizado',
    options: [
      'Objetivo principal',
      'Objetivos secundarios',
      'Días de entrenamiento',
      'Duración de las sesiones',
      'Recomendaciones',
    ],
  },
  {
    title: 'Informe de salud',
    options: [
      'Resumen de salud',
      'Historial de progreso',
      'Estadísticas semanales',
      'Estadísticas mensuales',
      'Evolución de hábitos',
    ],
  },
];

const accountFields = [
  'Correo electrónico',
  'Número de teléfono',
  'Cambiar contraseña',
];

const lifestyleFields = [
  'Actividad física',
  'Frecuencia de entrenamiento',
  'Horas de sueño',
  'Alimentación',
  'Consumo de agua',
];

const programFields = [
  'Objetivo principal',
  'Objetivos secundarios',
  'Días de entrenamiento',
  'Duración de las sesiones',
  'Recomendaciones',
];

export default function ProfileSections() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <View style={styles.container}>
      {sections.map((section, index) => {
        const isExpanded = expanded === index;

        return (
          <View key={section.title} style={styles.card}>
            <Pressable
              onPress={() => setExpanded(isExpanded ? null : index)}
              accessibilityRole="button"
              accessibilityState={{ expanded: isExpanded }}
            >
              <LinearGradient
                colors={
                  isExpanded
                    ? ['#F18701', '#FFF5E9']
                    : ['#8EAAEE', '#FFFFFF']
                }
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.header}
              >
                <Text style={styles.title}>{section.title}</Text>
                <Ionicons
                  name={isExpanded ? 'chevron-up' : 'chevron-down'}
                  size={21}
                  color={isExpanded ? '#FFFFFF' : '#0047D5'}
                />
              </LinearGradient>
            </Pressable>

            {isExpanded && (
              <View style={styles.details}>
                {section.options.map((option) => {
                  const isTextField =
                    index === 0 ||
                    (index === 1 && accountFields.includes(option)) ||
                    (index === 2 && lifestyleFields.includes(option)) ||
                    (index === 3 && programFields.includes(option));

                  if (isTextField) {
                    return (
                      <TextInput
                        key={option}
                        style={styles.input}
                        placeholder={option}
                        placeholderTextColor="#8EAAEE"
                        keyboardType={
                          option === 'Edad' ||
                          option === 'Horas de sueño' ||
                          option === 'Consumo de agua' ||
                          option === 'Días de entrenamiento' ||
                          option === 'Duración de las sesiones'
                            ? 'numeric'
                            : option === 'Número de teléfono'
                              ? 'phone-pad'
                              : option === 'Correo electrónico'
                                ? 'email-address'
                                : 'default'
                        }
                        secureTextEntry={option === 'Cambiar contraseña'}
                        autoCapitalize={
                          option === 'Correo electrónico' ? 'none' : 'sentences'
                        }
                      />
                    );
                  }

                  return (
                    <Pressable
                      key={option}
                      style={styles.option}
                      onPress={() =>
                        Alert.alert(
                          option,
                          'Esta opción estará disponible próximamente.',
                        )
                      }
                    >
                      <Text style={styles.optionText}>{option}</Text>
                      <Ionicons
                        name="chevron-forward"
                        size={19}
                        color="#0047D5"
                      />
                    </Pressable>
                  );
                })}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  header: {
    minHeight: 38,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  details: {
    paddingTop: 12,
    paddingHorizontal: 5,
    gap: 9,
  },
  input: {
    height: 39,
    borderWidth: 1,
    borderColor: '#0047D5',
    borderRadius: 16,
    paddingHorizontal: 12,
    fontSize: 12,
    color: '#1C1C1C',
    backgroundColor: '#FFFFFF',
  },
  option: {
    minHeight: 39,
    borderWidth: 1,
    borderColor: '#0047D5',
    borderRadius: 16,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  optionText: {
    color: '#0047D5',
    fontSize: 12,
  },
});
