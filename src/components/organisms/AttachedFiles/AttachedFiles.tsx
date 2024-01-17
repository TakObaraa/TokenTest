import styled from '@emotion/styled';
import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
import { COLOR, SIZE, Style } from '@styles/constant';
// Todo Storybook
import React from 'react';

type Props = Pick<React.ComponentProps<'div'>, 'className' | 'children'> & {
  title?: string;
} & Style;

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._8,
});

const AttachedFilesLabel = styled(ModalContentItemLabel)();
const AttachedFileList = styled('div')({
  borderTop: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
});

const AttachedFiles: React.FC<Props> = ({
  children,
  className,
  title = '添付済みのファイル',
}) => (
  <Wrapper className={className}>
    <AttachedFilesLabel label={title} />
    <AttachedFileList>{children}</AttachedFileList>
  </Wrapper>
);
export default AttachedFiles;
export type AttachedFilesProps = React.ComponentProps<typeof AttachedFiles>;
