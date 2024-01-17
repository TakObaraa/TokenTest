import ActionAnchor, {
  AnchorColorType,
  FontSizeOptionType,
} from '@atoms/ActionAnchor/ActionAnchor';
import Icon, {
  ColorType as IconColorType,
  IconNameType,
  SizeType as IconSizeType,
} from '@atoms/Icon/Icon';
// Todo create test
import Styled from '@emotion/styled';
import { SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

type GapSize = keyof Pick<typeof SIZE.GAP, '_8' | '_4' | '_2'>;

type Content = {
  iconName: IconNameType;
  children: string | number;
  onClick: VoidFunction;
};

type Style = {
  setFontSize?: FontSizeOptionType;
  setTabletFontSize?: FontSizeOptionType;
  setMobileFontSize?: FontSizeOptionType;
  setColor?: AnchorColorType;
  setIconSize?: IconSizeType;
  setMobileIconSize?: IconSizeType;
  setBold?: boolean;
  setMobileBold?: boolean;
  setGap?: GapSize;
  resetLineHeight?: boolean;
  isEllipsis?: boolean;
};

type IconAnchorProps = Content &
  Style &
  Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

/** StyleComponent */
const Wrapper = Styled(ActionAnchor)<
  Pick<Style, 'setGap' | 'isEllipsis' | 'setMobileBold'>
>(
  {
    display: 'inline-flex',
    alignItems: 'center',
    ':hover': {
      '> svg': {
        filter: 'brightness(0.7)',
      },
    },
    width: 'fit-content',
  },
  ({ setGap, isEllipsis }) => ({
    gap: setGap === undefined ? SIZE.GAP._4 : SIZE.GAP[setGap],
    overflow: isEllipsis ? 'hidden' : 'visible',
  }),
);

const StyledIcon = Styled(Icon)({
  minWidth: 'min-content',
});

/** ReactComponent */
const IconActionAnchor: React.FC<IconAnchorProps> = ({
  setColor,
  setFontSize,
  setTabletFontSize,
  setMobileFontSize,
  setBold,
  setMobileBold,
  setIconSize,
  setMobileIconSize,
  iconName,
  children,
  className,
  setGap,
  resetLineHeight,
  isEllipsis,
  onClick,
}) => {
  let setIconColor: IconColorType;
  if (setColor === 'lightGray') {
    setIconColor = 'lightGray';
  } else if (setColor === 'red') {
    setIconColor = 'red';
  } else if (setColor === 'gray') {
    setIconColor = 'gray';
  } else {
    setIconColor = 'blue';
  }
  return (
    <Wrapper
      className={className}
      setGap={setGap}
      onClick={onClick}
      setFontSize={setFontSize}
      setTabletFontSize={setTabletFontSize}
      setMobileFontSize={setMobileFontSize}
      setColor={setColor}
      resetLineHeight={resetLineHeight}
      isEllipsis={isEllipsis}
      setBold={setBold}
      setMobileBold={setMobileBold}
    >
      <StyledIcon
        name={iconName}
        setColor={setIconColor}
        setSize={setIconSize}
        setMobileSize={setMobileIconSize}
      />
      {children}
    </Wrapper>
  );
};

IconActionAnchor.defaultProps = {
  setFontSize: '_14',
  setTabletFontSize: undefined,
  setMobileFontSize: undefined,
  setColor: 'blue',
  setIconSize: '_14',
  setGap: '_4',
  resetLineHeight: false,
  isEllipsis: false,
};

export default IconActionAnchor;
