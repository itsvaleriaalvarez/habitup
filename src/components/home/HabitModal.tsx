
import { useEffect, useState } from 'react';
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { Habit } from '../../storage/habits';

type Props = {
  visible: boolean;
  habit: Habit | null;
  onClose: () => void;
  onSave: (title: string, subtitle: string) => void;
};

const BLUE = '#0047D5';
const ORANGE = '#F18701';

export default function HabitModal({
  visible,
  habit,
  onClose,
  onSave,
}: Props) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  useEffect(() => {
    setTitle(habit?.title ?? '');
    setSubtitle(habit?.subtitle ?? '');
  }, [habit, visible]);

  const handleSave = () => {
    const cleanTitle = title.trim();
    const cleanSubtitle = subtitle.trim();

    if (!cleanTitle || !cleanSubtitle) return;

    onSave(cleanTitle, cleanSubtitle);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.heading}>
            {habit ? 'Editar hábito' : 'Nuevo hábito'}
          </Text>

          <Text style={styles.description}>
            Personaliza tu hábito y establece tu meta.
          </Text>

          <Text style={styles.label}>Nombre del hábito</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Ej. Entrenamiento"
            placeholderTextColor="#8A94A6"
            style={styles.input}
            maxLength={40}
          />

          <Text style={styles.label}>Tu meta</Text>
          <TextInput
            value={subtitle}
            onChangeText={setSubtitle}
            placeholder="Ej. 1 hora"
            placeholderTextColor="#8A94A6"
            style={styles.input}
            maxLength={50}
          />

          <Pressable
            style={styles.saveButton}
            onPress={handleSave}
          >
            <Text style={styles.saveText}>
              {habit ? 'Guardar cambios' : 'Agregar hábito'}
            </Text>
          </Pressable>

          <Pressable onPress={onClose} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  modal: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
  },
  heading: {
    color: BLUE,
    fontSize: 21,
    fontWeight: '900',
    textAlign: 'center',
  },
  description: {
    color: BLUE,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  label: {
    color: BLUE,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 7,
  },
  input: {
    borderWidth: 1,
    borderColor: '#8EAAEE',
    borderRadius: 12,
    padding: 13,
    color: BLUE,
    fontSize: 14,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: ORANGE,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },
  saveText: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  cancelButton: {
    padding: 12,
    alignItems: 'center',
  },
  cancelText: {
    color: '#667085',
    fontWeight: '600',
  },
});
