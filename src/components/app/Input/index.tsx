import { IconExclamationSign } from '@app/icons/normal';
import styled from '@emotion/styled';

const Input = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacings.xs,
}));

const Label = styled('label')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontWeight: theme.fontWeights.bold,
  fontSize: theme.fontSizes.md,
  gap: theme.spacings.xs,
}));

const Description = styled('p')(({ theme }) => ({
  fontSize: theme.fontSizes.sm,
  color: theme.colors.font.sub,
}));

const Container = styled('div')<{ direction?: 'vertical' | 'horizontal' }>(
  ({ theme, direction }) => ({
    display: 'flex',
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    gap: theme.spacings.sm,
  }),
);

const Message = styled('p')<{
  color?: string;
}>(({ theme, color }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacings.xs,
  fontSize: theme.fontSizes.sm,
  fontWeight: theme.fontWeights.bold,
  color: color || theme.colors.danger,
}));

const ErrorMessage: React.FC<
  React.PropsWithChildren<
    React.ComponentProps<typeof Message> & {
      icon?: React.ReactNode;
    }
  >
> = ({ icon = <IconExclamationSign />, children, ...props }) => {
  return (
    <Message {...props}>
      {icon}
      {children}
    </Message>
  );
};

export default Object.assign(Input, {
  Label,
  Description,
  Container,
  ErrorMessage,
});
