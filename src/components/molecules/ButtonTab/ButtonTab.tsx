import Badge from '@atoms/Badge/Badge';
import Styled from '@emotion/styled';
import { COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

type ButtonTabProps = {
  activeSegment?: number;
  labels: string[];
  onClick?: (activeSegment: number) => void;
  isUpdate?: number;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

/** StyledComponent */
const Wrapper = Styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: `${SIZE.GAP._4} ${SIZE.GAP._2}`,
});

const SegmentItem = Styled('div')<{
  isActive: boolean;
}>(
  {
    background: COLOR.BACKGROUND.GRAY_50,
    fontSize: SIZE.FONT._12,
    padding: `${SIZE.PADDING._10} ${SIZE.PADDING._16}`,
    color: COLOR.FONT.LINK,
    cursor: 'pointer',
    borderRadius: SIZE.RADIUS.DEFAULT,
    whiteSpace: 'nowrap',
    ':hover': {
      color: COLOR.FONT.LINK_HOVER,
    },
  },
  ({ isActive }) =>
    isActive && {
      background: COLOR.BACKGROUND.BLUE_600,
      color: COLOR.FONT.GRAY_0,
      ':hover': {
        color: COLOR.FONT.GRAY_0,
      },
    },
);
const UpdateBadge = Styled(Badge)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._4} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0}`,
});

/** ReactComponent */
// Todo
// labelsをnameとラベル受け取るようにして、onClickでnameを返すようにする
// activeButtonTabもnameで指定
const ButtonTab: React.FC<ButtonTabProps> = ({
  activeSegment,
  labels,
  onClick,
  className,
  isUpdate,
}) => {
  console.log('render ButtonTab');
  return (
    <Wrapper className={className}>
      {labels?.map((label, index) => (
        <SegmentItem
          key={`key-${index.toString()}`}
          isActive={activeSegment === index}
          onClick={() => onClick?.(index)}
        >
          {isUpdate === index && <UpdateBadge />}
          {label}
        </SegmentItem>
      ))}
    </Wrapper>
  );
};

// 初期値を設定する
ButtonTab.defaultProps = {
  activeSegment: undefined,
  onClick: undefined,
  isUpdate: undefined,
};

// コンポーネントをエクスポート
export default ButtonTab;
