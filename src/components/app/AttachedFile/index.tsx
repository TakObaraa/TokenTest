import { IconClip } from '@app/icons/normal';
import Button from '@atoms/Button/Button';
import Paragraph from '@atoms/Paragraph/Paragraph';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef } from 'react';

type Props = Pick<React.ComponentProps<'div'>, 'className'> & {
  src: NonNullable<React.ComponentProps<'img'>['src']>;
  fileName: string;
  onDelete: React.ComponentProps<typeof Button>['onClick'];
};

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: `${theme.spacings.sm} ${theme.spacings.none}`,
  gap: theme.spacings.sm,
  alignItems: 'center',
}));

const FileName = styled('div')({
  flex: 1,
  overflow: 'hidden',
});

const AttachedFile = forwardRef<HTMLDivElement, Props>(
  ({ src, fileName, onDelete, ...props }, ref) => {
    const theme = useTheme();
    return (
      <Wrapper {...props} ref={ref}>
        <IconClip fontSize="14px" color={theme.colors.primary.main} />
        <img src={src} width="32px" height="32px" alt={fileName} />
        <FileName>
          <Paragraph isEllipsis>{fileName}</Paragraph>
        </FileName>
        <Button iconName="delete" setType="danger" onClick={onDelete} />
      </Wrapper>
    );
  },
);
export default AttachedFile;
