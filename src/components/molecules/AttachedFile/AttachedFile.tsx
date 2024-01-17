import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import Paragraph from '@atoms/Paragraph/Paragraph';
import styled from '@emotion/styled';
import { SIZE, Style } from '@styles/constant';
// Todo Storybook
import React from 'react';

type Props = Pick<React.ComponentProps<'div'>, 'className'> & {
  src: NonNullable<React.ComponentProps<'img'>['src']>;
  fileName: string;
  onDelete: React.ComponentProps<typeof Button>['onClick'];
} & Style;

const Wrapper = styled('div')({
  display: 'flex',
  padding: `${SIZE.PADDING._8} ${SIZE.PADDING._0}`,
  gap: SIZE.GAP._8,
  alignItems: 'center',
});

const FileName = styled('div')({
  flex: 1,
  overflow: 'hidden',
});

const AttachedFile: React.FC<Props> = ({
  src,
  fileName,
  onDelete,
  ...props
}) => (
  <Wrapper {...props}>
    <Icon setSize="_14" name="clip" setColor="blue" />
    <img src={src} width="32px" height="32px" alt={fileName} />
    <FileName>
      <Paragraph isEllipsis>{fileName}</Paragraph>
    </FileName>
    <Button iconName="delete" setType="danger" onClick={onDelete} />
  </Wrapper>
);
export default AttachedFile;
export type AttachedFileProps = React.ComponentProps<typeof AttachedFile>;
