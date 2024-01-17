import { IconCancel } from '@app/icons/normal';
import styled from '@emotion/styled';
import React, { MouseEventHandler } from 'react';
import Paragraph from 'src/components/app/Paragraph';

type BaseHeaderProps = Pick<
  React.ComponentProps<'div'>,
  'className' | 'children'
> & {
  // NOTE: 必要に応じて追加
};

const StyledHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: `${theme.radius.base} ${theme.radius.base} ${theme.radius.none} ${theme.radius.none}`,
  lineHeight: theme.lineHeights.default,
  padding: `${theme.spacings.sm} ${theme.spacings.md}`,
  backgroundColor: theme.colors.background.disabled,
  borderBottom: theme.borders.separate,
}));

const Header: React.FC<BaseHeaderProps> = ({ children, ...props }) => (
  <StyledHeader {...props}>{children}</StyledHeader>
);

export default Header;
export type HeaderProps = React.ComponentProps<typeof Header>;

/** *****************************************************************************
 * Header内で利用可能な部品コンポーネント
 ***************************************************************************** */

type BaseHeaderTitleProps = Pick<React.ComponentProps<'div'>, 'className'> & {
  icon?: React.ReactNode;
  title: string;
  subTitle?: string;
};

const CloseIconWrapper = styled('button')(({ theme }) => ({
  fontFamily: 'inherit',
  padding: theme.spacings.none,
  opacity: '0.3', // hoverが必要なため例外的にopacityでIconの色を制御
  lineHeight: theme.lineHeights.reset,
  border: theme.borders.none,
  cursor: 'pointer',
  backgroundColor: theme.colors.transparent,
  ':hover': {
    opacity: '0.5',
  },
}));

const StyledHeaderTitle = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacings.xs,
  flexWrap: 'wrap',
  alignItems: 'center',
}));

export const HeaderTitle: React.FC<BaseHeaderTitleProps> = ({
  icon,
  title,
  subTitle,
  ...props
}) => (
  <StyledHeaderTitle {...props}>
    {icon}
    <Paragraph setSize="lg">{title}</Paragraph>
    {subTitle && (
      <Paragraph setSize="xs" setColor="weak">
        {subTitle}
      </Paragraph>
    )}
  </StyledHeaderTitle>
);
export type HeaderTitleProps = React.ComponentProps<typeof HeaderTitle>;

type BaseCloseIconProps = {
  onClick: MouseEventHandler;
};

export const CloseIcon: React.FC<BaseCloseIconProps> = ({ onClick }) => (
  <CloseIconWrapper onClick={onClick}>
    <IconCancel />
  </CloseIconWrapper>
);
