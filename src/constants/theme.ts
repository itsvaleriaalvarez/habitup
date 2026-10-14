import { Colors } from './colors';

export const Theme = {
  colors: Colors,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    full: 9999,
  },
  typography: {
    header: {
      fontSize: 24,
      fontWeight: '700' as const,
      color: Colors.textPrimary,
    },
    subtile: {
      fontSize: 16,
      fontWeight: '500' as const,
      color: Colors.textSecondary,
    },
    body: {
      fontSize: 14,
      fontWeight: '400' as const,
      color: Colors.textPrimary,
    },
  },
};