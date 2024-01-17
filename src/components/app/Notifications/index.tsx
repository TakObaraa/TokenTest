import { css } from '@emotion/css';
import { styled } from '@libraries/emotion';
import {
  NotificationData,
  Notifications as MantineNotifications,
  NotificationsProps,
  notifications,
} from '@mantine/notifications';
import Patterns from '@styles/patterns';

const Description = styled('div')(
  Patterns.stack({ direction: 'horizontal', gap: 'xs', align: 'center' }),
  ({ theme }) => ({
    fontSize: theme.fontSizes.sm,
    color: theme.colors.font.default,
  }),
);

const classNamesFactory = (variant: 'success' | 'error' | 'warning') => {
  const backgroundColor =
    (variant === 'success' && 'var(--mantine-notification-bg-success)') ||
    (variant === 'error' && 'var(--mantine-notification-bg-error)') ||
    (variant === 'warning' && 'var(--mantine-notification-bg-warning)') ||
    'white';

  return {
    root: css({
      backgroundColor,

      '&::before': {
        backgroundColor,
      },
    }),

    title: css({
      fontWeight: 'bold',
    }),

    loader: css({
      '--loader-color': 'var(--mantine-notification-loader-color)',
    }),
  };
};

export const showSuccessNotification = ({
  message,
  ...props
}: NotificationData) => {
  notifications.show({
    message: <Description>{message}</Description>,
    classNames: classNamesFactory('success'),
    ...props,
  });
};

export const showErrorNotification = ({
  message,
  ...props
}: NotificationData) => {
  notifications.show({
    message: <Description>{message}</Description>,
    classNames: classNamesFactory('error'),
    ...props,
  });
};

export const showWarningNotification = ({
  message,
  ...props
}: NotificationData) => {
  notifications.show({
    message: <Description>{message}</Description>,
    classNames: classNamesFactory('warning'),
    ...props,
  });
};

const Notifications: React.FC<NotificationsProps> = ({
  position = 'top-center',
  ...props
}) => {
  return (
    <MantineNotifications
      containerWidth="100%"
      autoClose={false}
      position={position}
      {...props}
    />
  );
};

export default Notifications;
