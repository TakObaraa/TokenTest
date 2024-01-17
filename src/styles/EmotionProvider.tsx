import { Global, Theme, ThemeProvider } from '@emotion/react';
import themes from '@styles/themes';
import { useState } from 'react';

const EmotionProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, _] = useState<Theme>(themes.base);

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={(theme) => ({
          // remは16pxで固定すること

          body: {
            fontFamily: theme.fonts.default,
            fontSize: theme.fontSizes.md,
            color: theme.colors.font.default,
            backgroundColor: theme.colors.background.surface,
          },

          p: {
            lineHeight: theme.lineHeights.default,
          },
          h1: {
            fontSize: theme.fontSizes['3xl'],
            lineHeight: theme.lineHeights.default,
            fontWeight: theme.fontWeights.normal,
          },
          h2: {
            fontSize: theme.fontSizes['2xl'],
            lineHeight: theme.lineHeights.default,
            fontWeight: theme.fontWeights.normal,
          },
          h3: {
            fontSize: theme.fontSizes.xl,
            lineHeight: theme.lineHeights.default,
            fontWeight: theme.fontWeights.normal,
          },
          h4: {
            fontSize: theme.fontSizes.lg,
            lineHeight: theme.lineHeights.default,
            fontWeight: theme.fontWeights.normal,
          },
          h5: {
            fontSize: theme.fontSizes.md,
            lineHeight: theme.lineHeights.default,
            fontWeight: theme.fontWeights.normal,
          },
          h6: {
            fontSize: theme.fontSizes.sm,
            lineHeight: theme.lineHeights.default,
            fontWeight: theme.fontWeights.normal,
          },

          '.backdrop-no-scroll': {
            overflow: 'hidden',
          },
        })}
      />
      {children}
    </ThemeProvider>
  );
};

export default EmotionProvider;
