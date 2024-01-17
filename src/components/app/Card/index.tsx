import Button, { ButtonSizeOptionType, ButtonType } from '@app/Button';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import mergeComponents from '@utils/hooks/mergeComponents';
import { ReactNode, forwardRef } from 'react';

type IconTitleProps = {
  icon?: ReactNode;
} & React.ComponentProps<'div'>;

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  width: theme.sizes.full,
}));

const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  minHeight: '40px',
  padding: theme.spacings.sm,
  gap: theme.spacings.sm,
  justifyContent: 'space-between',
  backgroundColor: theme.colors.background.surfaceRaised,
  borderBottom: theme.borders.default,
  [theme.breakpoints.sm]: {
    flexWrap: 'wrap',
  },
}));

const Content = styled('section')<{
  backgroundColor?: keyof Theme['colors']['background'];
}>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: theme.sizes.full,
    border: theme.borders.default,
    backgroundColor: theme.colors.background.surface,
    overflow: 'hidden',
  }),
  ({ backgroundColor = 'surface', theme }) =>
    backgroundColor && {
      backgroundColor: theme.colors.background[backgroundColor],
    },
);

const Section = styled('div')(({ theme }) => ({
  display: 'flex',
  width: theme.sizes.full,
  padding: theme.spacings.sm,
  gap: theme.spacings.sm,
  alignItems: 'center',
  borderBottom: theme.borders.default,

  ':last-of-type': {
    borderBottom: 'none',
  },
}));

const IconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacings.sm,
  fontSize: theme.fontSizes.lg,
}));

const TitleText = styled('h3')(({ theme }) => ({
  fontSize: theme.fontSizes.xl,
}));

const IconTitle = forwardRef<HTMLDivElement, IconTitleProps>(
  ({ icon, children, ...props }, ref) => {
    return (
      <IconWrapper ref={ref} {...props}>
        {icon}
        <TitleText>{children}</TitleText>
      </IconWrapper>
    );
  },
);

const ContentControl = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: theme.sizes['2xs'],
  borderBottom: theme.borders.default,
}));

const ContentControlButton = styled(Button)<{
  setType?: ButtonType;
  setSize?: ButtonSizeOptionType;
}>(
  ({ theme }) => ({
    border: theme.borders.none,
    borderRight: theme.borders.default,
    borderRadius: theme.radius.none,
    minHeight: theme.sizes['2xs'],
    height: theme.sizes.full,
  }),
  ({ setType, theme }) =>
    setType === ('primary' || undefined) && {
      ':hover': {
        background: theme.colors.primary.main,
        border: theme.borders.none,
        borderRight: theme.borders.default,
      },
    },
);

ContentControlButton.defaultProps = {
  setSize: 'wide',
  setType: 'secondary',
};

export default mergeComponents(Card, {
  Header,
  Content,
  Section,
  IconTitle,
  ContentControl,
  ContentControlButton,
});
