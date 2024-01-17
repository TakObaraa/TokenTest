import Icon, {
  ColorType as IconColorType,
  IconNameType,
  SizeType as IconSizeType,
} from '@atoms/Icon/Icon';
import Link, { FontSizeOptionType, LinkColorType } from '@atoms/Link/Link';
// Todo create test
import Styled from '@emotion/styled';
import { SIZE } from '@styles/constant';
import React, { AnchorHTMLAttributes } from 'react';

type GapSize = keyof Pick<typeof SIZE.GAP, '_8' | '_4' | '_2'>;

type Content = {
  iconName: IconNameType;
  children: string;
};

type Style = {
  setFontSize?: FontSizeOptionType;
  setTabletFontSize?: FontSizeOptionType;
  setMobileFontSize?: FontSizeOptionType;
  setColor?: LinkColorType;
  setIconSize?: IconSizeType;
  setTabletIconSize?: IconSizeType;
  setMobileIconSize?: IconSizeType;
  setBold?: boolean;
  setMobileBold?: boolean;
  setGap?: GapSize;
  resetLineHeight?: boolean;
  isEllipsis?: boolean;
};

// Memo: アプリ化で別タブ開く動きがなくなるのでtargetはいらなくなるかも
type IconLinkProps = Content &
  Style &
  Pick<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'target' | 'children' | 'className'
  >;

/** StyleComponent */
const Wrapper = Styled(Link)<Pick<Style, 'setGap' | 'isEllipsis'>>(
  {
    display: 'inline-flex',
    alignItems: 'center',
    ':hover': {
      '> svg': {
        filter: 'brightness(0.7)',
      },
    },
  },
  ({ setGap }) => ({
    gap: setGap === undefined ? SIZE.GAP._4 : SIZE.GAP[setGap],
  }),
);

const StyledIcon = Styled(Icon)({
  minWidth: 'min-content',
});

/** ReactComponent */
const IconLink: React.FC<IconLinkProps> = ({
  setColor,
  setFontSize,
  setTabletFontSize,
  setMobileFontSize,
  setIconSize,
  setTabletIconSize,
  setMobileIconSize,
  resetLineHeight,
  setBold,
  setMobileBold,
  iconName,
  target,
  children,
  className,
  setGap,
  isEllipsis,
}) => {
  const setIconColor: Record<LinkColorType, IconColorType> = {
    default: 'blue',
    danger: 'red',
    finish: 'gray',
    disabled: 'gray',
  };
  return (
    <Wrapper
      className={className}
      setFontSize={setFontSize}
      setTabletFontSize={setTabletFontSize}
      setMobileFontSize={setMobileFontSize}
      resetLineHeight={resetLineHeight}
      target={target}
      setColor={setColor}
      setGap={setGap}
      isEllipsis={isEllipsis}
      setBold={setBold}
      setMobileBold={setMobileBold}
    >
      <StyledIcon
        name={iconName}
        setColor={setColor ? setIconColor[setColor] : setIconColor.default}
        setSize={setIconSize}
        setTabletSize={setTabletIconSize}
        setMobileSize={setMobileIconSize}
      />
      {children}
    </Wrapper>
  );
};

IconLink.defaultProps = {
  setFontSize: '_14',
  setTabletFontSize: undefined,
  setMobileFontSize: undefined,
  setColor: 'default',
  setIconSize: '_14',
  setTabletIconSize: undefined,
  setMobileIconSize: undefined,
  setGap: '_4',
  setBold: false,
  setMobileBold: false,
  resetLineHeight: true,
  isEllipsis: false,
};

export default IconLink;
