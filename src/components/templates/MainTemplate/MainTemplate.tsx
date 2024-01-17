import Styled from '@emotion/styled';
import Header from '@organisms/Header/Header';
import { COLOR, CONTENT_SIZE, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

type Style = {
  contentSizeMax?: boolean;
};

type MainTemplateProps = {
  children: React.ReactNode;
} & Style &
  Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

const Wrapper = Styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: COLOR.BACKGROUND.GRAY_0,
});
const GlobalHeader = Styled(Header)({
  zIndex: 5,
  position: 'sticky',
  top: 0,
});

const Content = Styled('div')<{ contentSizeMax?: boolean }>(
  {
    flex: 1,
    maxWidth: CONTENT_SIZE.MIDDLE,
    width: '100%',
    margin: `${SIZE.MARGIN._16} ${SIZE.MARGIN.AUTO} ${SIZE.MARGIN._0}`,
    padding: `${SIZE.PADDING._0} ${SIZE.PADDING._16} ${SIZE.PADDING._40}`,
    display: 'flex',
    flexDirection: 'column',
  },
  ({ contentSizeMax }) =>
    contentSizeMax === true && {
      maxWidth: CONTENT_SIZE.MAX,
    },
);
const MainTemplate: React.FC<MainTemplateProps> = ({
  className,
  children,
  contentSizeMax,
}) => (
  <Wrapper className={className}>
    <GlobalHeader contentSizeMax={contentSizeMax} />
    <Content contentSizeMax={contentSizeMax}>{children}</Content>
  </Wrapper>
);

export default MainTemplate;
