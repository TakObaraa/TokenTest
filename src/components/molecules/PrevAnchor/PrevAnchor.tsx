// Todo Storybook
import Styled from '@emotion/styled';
import { COLOR, CONTENT_SIZE, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';
import IconActionAnchor from '../IconActionAnchor/IconActionAnchor';

type PrevAnchorProps = {
  children: string;
  onClick: VoidFunction;
} & HTMLAttributes<HTMLDivElement>;

const Wrapper = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  maxWidth: CONTENT_SIZE.MAX,
  width: '100%',
  background: COLOR.BACKGROUND.GRAY_10,
  padding: `${SIZE.PADDING._8} ${SIZE.PADDING._16}`,
});

const PrevAnchor: React.FC<PrevAnchorProps> = ({
  className,
  onClick,
  children,
}) => (
  <Wrapper className={className}>
    <IconActionAnchor
      iconName="chevronPrev"
      setFontSize="_12"
      setIconSize="_12"
      onClick={onClick}
    >
      {children}
    </IconActionAnchor>
  </Wrapper>
);

export default PrevAnchor;
