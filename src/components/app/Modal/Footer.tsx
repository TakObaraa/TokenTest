import styled from '@emotion/styled';
import React from 'react';

type BaseFooterProps = Pick<
  React.ComponentProps<'div'>,
  'className' | 'children'
> & {
  // NOTE: 必要に応じて追加
};

const StyledFooter = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  backgroundColor: theme.colors.background.disabled,
  borderRadius: `${theme.radius.none} ${theme.radius.none} ${theme.radius.base} ${theme.radius.base}`,
  padding: `${theme.spacings.sm} ${theme.spacings.md}`,
  borderTop: `${theme.borders.separate}`,
}));

const Left = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
});

const Center = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const Right = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

const Footer: React.FC<BaseFooterProps> = ({ children, ...props }) => (
  <StyledFooter {...props}>{children}</StyledFooter>
);

export default Footer;
export type FooterProps = React.ComponentProps<typeof Footer>;

/** *****************************************************************************
 * Footer内で利用可能な部品コンポーネント
 ***************************************************************************** */

type BaseActionPanelProps = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
};

export const ActionPanel: React.FC<BaseActionPanelProps> = ({
  left,
  center,
  right,
}) => (
  <>
    <Left>{left}</Left>
    <Center>{center}</Center>
    <Right>{right}</Right>
  </>
);
