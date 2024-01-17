import Icon, {
  ColorType as IconColorType,
  IconNameType,
  SizeType as IconSizeType,
  iconSize,
} from '@atoms/Icon/Icon';
import Paragraph, {
  FontSizeOptionType,
  TextColorType,
} from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
import { SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

export type GapSizeType = keyof Pick<typeof SIZE.GAP, '_8' | '_4' | '_2'>;

type Style = {
  setFontSize?: FontSizeOptionType;
  setFontColor?: TextColorType;
  setBold?: boolean;
  setIconSize?: IconSizeType;
  setIconColor?: IconColorType;
  setMobileBold?: boolean;
  setMobileFontSize?: FontSizeOptionType;
  setMobileIconSize?: IconSizeType;
  setGap?: GapSizeType;
  resetLineHeight?: boolean;
  isEllipsis?: boolean;
  isPreWrap?: boolean;
};

type IconTextProps = {
  iconName: IconNameType;
  children: string | number;
} & Style &
  Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

/** StyleComponent */
const Wrapper = Styled('div')<Pick<Style, 'setGap' | 'isEllipsis'>>(
  {
    display: 'inline-flex',
    alignItems: 'center',
  },
  ({ setGap, isEllipsis }) => ({
    gap: setGap === undefined ? SIZE.GAP._4 : SIZE.GAP[setGap],
    overflow: isEllipsis ? 'hidden' : 'visible',
  }),
);

const StyledIcon = Styled(Icon)<{ setIconSize?: IconSizeType }>(
  ({ setIconSize }) => ({
    minWidth: setIconSize ? iconSize[setIconSize] : 'min-content',
  }),
);

/** ReactComponent */
const IconText: React.FC<IconTextProps> = ({
  setFontSize,
  setFontColor,
  setBold,
  setIconSize,
  setIconColor,
  setMobileBold,
  setMobileFontSize,
  setMobileIconSize,
  iconName,
  children,
  className,
  setGap,
  resetLineHeight,
  isEllipsis,
  isPreWrap,
}) => (
  <Wrapper className={className} setGap={setGap} isEllipsis={isEllipsis}>
    <StyledIcon
      name={iconName}
      setColor={setIconColor}
      setSize={setIconSize}
      setMobileSize={setMobileIconSize}
      setIconSize={setIconSize && setIconSize}
    />
    <Paragraph
      setColor={setFontColor}
      setFontSize={setFontSize}
      setBold={setBold}
      isEllipsis={isEllipsis}
      resetLineHeight={resetLineHeight}
      setMobileBold={setMobileBold}
      setMobileFontSize={setMobileFontSize}
      isPreWrap={isPreWrap}
    >
      {children}
    </Paragraph>
  </Wrapper>
);

IconText.defaultProps = {
  setFontColor: 'default',
  setFontSize: '_14',
  setBold: false,
  resetLineHeight: false,
  setIconSize: '_14',
  setIconColor: 'default',
  setMobileBold: false,
  setMobileFontSize: undefined,
  setMobileIconSize: undefined,
  setGap: '_4',
  isEllipsis: false,
  isPreWrap: false,
};

export default IconText;
