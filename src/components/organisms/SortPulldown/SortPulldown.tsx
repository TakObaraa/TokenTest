import Paragraph from '@atoms/Paragraph/Paragraph';
// Todo create Test & Storybooks
// Memo あっちこっちで使うもんじゃないので限定的な命名
import Styled from '@emotion/styled';
import { BOXSHADOW, COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

type Contents = {
  isShowPulldown: boolean;
  showPulldownTrigger: React.ReactNode;
  pulldownItems: { label: string; action: VoidFunction }[];
};
type Style = {
  setWidth?: number;
};

type SortPulldownProps = Contents &
  Style &
  Pick<HTMLAttributes<HTMLSpanElement>, 'className'>;

/** StyleComponent */
const Wrapper = Styled('div')();
const Pulldown = Styled('div')<
  Pick<SortPulldownProps, 'isShowPulldown' | 'setWidth'>
>(
  ({ setWidth }) => ({
    width: !setWidth ? '160px' : `${setWidth}px`,
    position: 'absolute',
    zIndex: 2,
    display: 'none',
    flexDirection: 'column',
    boxShadow: BOXSHADOW.HIGHER,
    backgroundColor: COLOR.BACKGROUND.GRAY_0,
    margin: `${SIZE.MARGIN._2} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0}`,
    padding: `${SIZE.PADDING._8} ${SIZE.PADDING._0}`,
  }),
  ({ isShowPulldown }) =>
    isShowPulldown && {
      display: 'flex',
    },
);
const PulldownItem = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: `${SIZE.PADDING._4} ${SIZE.PADDING._16}`,
  cursor: 'pointer',
  ':visited': {
    color: COLOR.FONT.DEFAULT,
  },
  ':hover': {
    backgroundColor: COLOR.BACKGROUND.SKY_100,
  },
});

/** ReactComponent */
/** Memo: 呼び出し側で下記を定義
 * 画面上のどこかを押下した際にプルダウンを閉じるための諸々
 * 同一箇所で複数使う場合はどのプルダウンが開かれているか管理する必要あり(Headerコンポーネント参考)
 *
 * Todo: 微妙なのでやり方考える できれば共通化したい
 * React.SetStateActionを引数として受け取っても発火できる保証がないため関数のexport不可
 * コンポーネントでState管理すると一斉にプルダウンが閉じるのと、
 * コンポーネント内でボタンを作成するとボタンコンポーネントの依存関係がめちゃくちゃになるのでやむなし（AppCardのなかに入れる？）
 *
  const [showPulldown, setShowPulldown] = useState(false);
  const closePulldown = useCallback(() => {
    setShowPulldown(false);
    document.removeEventListener('click', closePulldown);
  }, []);
  const openPulldown = (e: React.MouseEvent) => {
    setShowPulldown(true);
    document.addEventListener('click', closePulldown);
    e.stopPropagation();
  };
  useEffect(() => {
    document.removeEventListener('click', closePulldown);
  }, [closePulldown]);
*/
const SortPulldown: React.FC<SortPulldownProps> = ({
  isShowPulldown,
  showPulldownTrigger,
  pulldownItems,
  className,
  setWidth,
}) => {
  console.log('render SortPulldown');
  return (
    <Wrapper className={className}>
      {showPulldownTrigger}
      <Pulldown isShowPulldown={isShowPulldown} setWidth={setWidth}>
        {pulldownItems.map((pulldownItem, index) => (
          <PulldownItem
            key={`key-${index.toString()}`}
            onClick={pulldownItem.action}
          >
            <Paragraph>{pulldownItem.label}</Paragraph>
          </PulldownItem>
        ))}
      </Pulldown>
    </Wrapper>
  );
};

export default SortPulldown;

SortPulldown.defaultProps = {
  setWidth: undefined,
};
