import { css } from '@emotion/css';
import { useTheme } from '@emotion/react';
import { Input, MantineProvider as Provider, Select } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import 'dayjs/locale/ja';

import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import '@mantine/notifications/styles.layer.css';

const MantineProvider: React.FC<React.PropsWithChildren> = (props) => {
  const emotionTheme = useTheme();
  return (
    <DatesProvider
      settings={{
        locale: 'ja',
        firstDayOfWeek: 0,
      }}
    >
      <Provider
        theme={{
          defaultRadius: emotionTheme.radius.base,
          colors: {
            gray: [
              emotionTheme.colors.gray._50,
              emotionTheme.colors.gray._100,
              emotionTheme.colors.gray._200,
              emotionTheme.colors.gray._300,
              emotionTheme.colors.gray._400,
              emotionTheme.colors.gray._500,
              emotionTheme.colors.gray._600,
              emotionTheme.colors.gray._700,
              emotionTheme.colors.gray._800,
              emotionTheme.colors.gray._900,
            ],
          },
          components: {
            Input: Input.extend({
              classNames: {
                wrapper: css({
                  fontSize: 'var(--input-fz)',
                }),

                input: css({
                  borderColor: 'var(--mantine-color-default-border)',
                  color: emotionTheme.colors.font.sub,

                  '&[data-error]': {
                    backgroundColor: 'var(--mantine-color-error)',
                  },

                  ':hover': {
                    borderColor: emotionTheme.colors.gray._400,
                  },

                  ':focus-within': {
                    outline: 0,
                    borderColor: emotionTheme.colors.sky.dark,
                    boxShadow: emotionTheme.shadows.focus,
                  },

                  '::placeholder': {
                    color: 'var(--mantine-color-placeholder)',
                  },

                  ':disabled': {
                    backgroundColor: emotionTheme.colors.secondary.main,
                  },
                }),
              },
              vars: (_, props) => {
                // default
                if (props.size === undefined) {
                  return {
                    wrapper: {
                      '--input-height': emotionTheme.sizes['3xs'], // 28px
                      '--input-fz': emotionTheme.fontSizes.sm,
                      '--input-padding-y': emotionTheme.spacings.xs,
                    },
                  };
                }
                return { wrapper: {} };
              },
            }),

            Select: Select.extend({
              classNames: {
                option: css({
                  ':hover': {
                    backgroundColor: emotionTheme.colors.sky.light,
                  },
                }),
              },
            }),
          },
        }}
        cssVariablesResolver={() => ({
          variables: {
            '--mantine-color-placeholder': emotionTheme.colors.font.weak,
            '--mantine-color-default-border': emotionTheme.colors.gray._300,
            '--mantine-color-error': emotionTheme.colors.error,

            // for Notification
            '--mantine-notification-bg-success': `${emotionTheme.colors.green.light}EE`,
            '--mantine-notification-bg-error': `${emotionTheme.colors.error}EE`,
            '--mantine-notification-bg-warning': `${emotionTheme.colors.orange.light}EE`,
            '--mantine-notification-loader-color': `${emotionTheme.colors.primary.light}`,
          },
          dark: {},
          light: {},
        })}
      >
        {props.children}
      </Provider>
    </DatesProvider>
  );
};

export default MantineProvider;
