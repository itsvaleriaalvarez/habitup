// Tokens locales de la pantalla Rutinas. No modifica el Theme compartido.
import { Theme } from '../constants/theme';

export const theme = {
  colors: {
    background: Theme.colors.cardBackground,
    card: Theme.colors.cardBackground,
    primary: '#0753B9', // azul del Figma (aproximado desde captura)
    primarySoft: '#C4DAF6',
    cardBorder: '#82A7EB',
    navigation: '#0755D3',
    text: Theme.colors.textPrimary,
    textMuted: Theme.colors.textSecondary,
    border: Theme.colors.border,
  },
  spacing: Theme.spacing,
  radius: { ...Theme.borderRadius, lg: 18 },
  text: {
    title: 22,
    subtitle: 14,
    heading: 12,
    body: 14,
    small: 12,
    caption: 10,
  },
  layout: {
    maxWidth: 360,
    pagePadding: 20,
    topPadding: 50,
    headerToActions: 27,
    actionsToSections: 32,
    sectionGap: 20,
    actionHeight: 85,
    cardHeight: 120,
    cardImageHeight: 78,
    navigationHeight: 44,
    navigationBottomGap: 14,
    plusSize: 60,
  },
};
