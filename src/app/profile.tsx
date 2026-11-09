
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from '../components/BottomNavigation';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileSections from '../components/profile/ProfileSections';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <ProfileHeader />
        <ProfileSections />
        <View style={styles.bottomSpace} />
      </ScrollView>

      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 46,
    paddingTop: 12,
    paddingBottom: 25,
  },
  bottomSpace: {
    height: 20,
  },
});
