import { useState } from 'react';
import {
    Modal, Pressable, ScrollView,
    StyleSheet, Text, TextInput, View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import BottomNavigation from '../components/BottomNavigation';
import RoutineActions from '../components/RoutineActions';
import { RoutineItem } from '../components/RoutineCard';
import RoutineHeader from '../components/RoutineHeader';
import Button from '../components/RoutineModalButton';
import RoutineSection from '../components/RoutineSection';
import { theme } from '../components/routineTheme';

const sections: { id: string; title: string; items: RoutineItem[] }[] = [
  {
    id: 'recommended',
    title: 'Recomendados',
    items: [
      { id: 'full-body', title: 'Rutina cuerpo completo', image: require('../../assets/images/routines/full-body.png') },
      { id: 'arms-legs', title: 'Tonificar brazos y piernas', image: require('../../assets/images/routines/arms-legs.png') },
      { id: 'abs-30', title: 'ABS en 30 días', image: require('../../assets/images/routines/abs-30.png') },
    ],
  },
  {
    id: 'challenge',
    title: 'Challenge',
    items: [
      { id: 'abs-challenge', title: 'ABS en 30 días', image: require('../../assets/images/routines/abs-challenge.png') },
      { id: 'glutes-60', title: 'Glúteos firmes reto 60 días', image: require('../../assets/images/routines/glutes-60.png') },
      { id: 'legs-15', title: 'Rutina de piernas 15 días', image: require('../../assets/images/routines/legs-15.png') },
    ],
  },
  {
    id: 'individual',
    title: 'Ejercicios individuales',
    items: [
      { id: 'bench-press', title: 'Press de banca plano', image: require('../../assets/images/routines/bench-press.png') },
      { id: 'machine-fly', title: 'Aperturas en máquina', image: require('../../assets/images/routines/machine-fly.png') },
      { id: 'bulgarian', title: 'Búlgaras', image: require('../../assets/images/routines/bulgarian.png') },
    ],
  },
];

export default function Routines() {
  const [modal, setModal] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [routineName, setRoutineName] = useState('');
  const [myRoutines, setMyRoutines] = useState<string[]>([]);

  const selectedSection = sections.find((section) => section.id === modal);
  const selectedItem = sections.flatMap((section) => section.items).find((item) => item.id === selectedId);

  const createRoutine = () => {
    const name = routineName.trim();
    if (!name) return;
    setMyRoutines((current) => [...current, name]);
    setRoutineName('');
    setModal('mine');
  };

  const openRoutine = (id: string) => {
    setSelectedId(id);
    setModal('detail');
  };

  const navigate = (screen: string) => {
    if (screen === 'home') {
      setModal(null);
      return;
    }
    setModal(screen);
  };

  const modalTitle = modal === 'create' ? 'Crear rutina'
    : modal === 'mine' ? 'Mis rutinas'
    : modal === 'detail' ? selectedItem?.title ?? 'Rutina'
    : selectedSection?.title ?? (modal === 'profile' ? 'Perfil' : modal === 'progress' ? 'Progreso' : 'Actividad');

  return (
    <View style={styles.page}>
      <View style={styles.phoneFrame}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <RoutineHeader />
          <View style={styles.actions}>
            <RoutineActions onCreate={() => setModal('create')} onMyRoutines={() => setModal('mine')} />
          </View>
          <View style={styles.sections}>
            {sections.map((section) => (
              <RoutineSection
                key={section.id}
                title={section.title}
                items={section.items}
                selectedId={selectedId}
                onItemPress={openRoutine}
                onViewAll={() => setModal(section.id)}
              />
            ))}
          </View>
        </ScrollView>
        <BottomNavigation />
      </View>

      <Modal visible={modal !== null} animationType="slide" onRequestClose={() => setModal(null)}>
        <SafeAreaView style={styles.modalScreen}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <Pressable accessibilityRole="button" onPress={() => setModal(null)}>
              <Text style={styles.close}>Cerrar</Text>
            </Pressable>
          </View>
          <ScrollView contentContainerStyle={styles.modalContent} keyboardShouldPersistTaps="handled">
            {modal === 'create' && (
              <View style={styles.modalBlock}>
                <Text style={styles.body}>Nombre de tu nueva rutina</Text>
                <TextInput
                  placeholder="Ej. Entrenamiento de piernas"
                  placeholderTextColor={theme.colors.textMuted}
                  value={routineName}
                  onChangeText={setRoutineName}
                  style={styles.input}
                />
                <Button label="Guardar rutina" onPress={createRoutine} />
              </View>
            )}
            {modal === 'mine' && (
              <View style={styles.modalBlock}>
                {myRoutines.length === 0 ? (
                  <Text style={styles.body}>Aún no creaste ninguna rutina.</Text>
                ) : myRoutines.map((name, index) => <Text key={`${index}-${name}`} style={styles.body}>• {name}</Text>)}
                <Button label="Crear rutina" onPress={() => setModal('create')} />
              </View>
            )}
            {selectedSection && selectedSection.items.map((item) => (
              <Pressable key={item.id} onPress={() => openRoutine(item.id)} style={styles.listRow}>
                <Text style={styles.body}>{item.title}</Text>
              </Pressable>
            ))}
            {modal === 'detail' && (
              <View style={styles.modalBlock}>
                <Text style={styles.body}>Rutina seleccionada: {selectedItem?.title}</Text>
                <Text style={styles.muted}>Aquí podrás ver sus ejercicios cuando construyan esa pantalla.</Text>
              </View>
            )}
            {(modal === 'activity' || modal === 'progress' || modal === 'profile') && (
              <Text style={styles.body}>Esta pantalla se desarrollará después de Rutinas.</Text>
            )}
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: theme.colors.background },
  phoneFrame: {
    flex: 1,
    width: '100%',
    maxWidth: theme.layout.maxWidth,
    alignSelf: 'center',
    paddingHorizontal: theme.layout.pagePadding,
    backgroundColor: theme.colors.background,
  },
  scroll: { flex: 1 },
  content: { paddingTop: theme.layout.topPadding, paddingBottom: theme.spacing.md },
  actions: { marginTop: theme.layout.headerToActions },
  sections: { marginTop: theme.layout.actionsToSections, gap: theme.layout.sectionGap },
  modalScreen: { flex: 1, backgroundColor: theme.colors.background, padding: theme.spacing.xl },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  modalTitle: { fontSize: theme.text.title, fontWeight: 'bold', color: theme.colors.primary, flex: 1 },
  close: { fontSize: theme.text.body, color: theme.colors.primary, padding: theme.spacing.sm },
  modalContent: { gap: theme.spacing.lg, paddingVertical: theme.spacing.xl },
  modalBlock: { gap: theme.spacing.md },
  body: { fontSize: theme.text.body, color: theme.colors.text },
  muted: { fontSize: theme.text.small, color: theme.colors.textMuted },
  listRow: { padding: theme.spacing.md, borderRadius: theme.radius.md, backgroundColor: theme.colors.primarySoft },
  input: {
    borderWidth: theme.spacing.xs / 2,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    fontSize: theme.text.body,
    color: theme.colors.text,
  },
});
