import { css } from '@emotion/css';
import Styled from '@emotion/styled';
import { BOXSHADOW, COLOR, SIZE } from '@styles/constant';
// Todo create Test
// Memo: Options https://reactdatepicker.com/
import React from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { UseFormRegisterReturn } from 'react-hook-form';

type ContentsType = {
  refs?: UseFormRegisterReturn;
  dateFormatType?: 'day' | 'month';
};

type Props = ContentsType & ReactDatePickerProps;

const Wrapper = Styled('div')({
  display: 'flex',
  width: '100px',
});
/** Styles
 * プラグインの仕様に合わせた例外的実装
 */
const CustomStyle = css({
  height: '28px',
  width: '100%',
  fontSize: SIZE.FONT._12,
  color: COLOR.FONT.INPUT,
  backgroundColor: COLOR.BACKGROUND.GRAY_0,
  border: `${SIZE.BORDER._1} solid ${COLOR.BORDER.DEFAULT}`,
  transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
  borderRadius: SIZE.RADIUS.DEFAULT,
  padding: `${SIZE.PADDING._0} ${SIZE.PADDING._0} ${SIZE.PADDING._0} ${SIZE.PADDING._8}`,
  ':focus': {
    borderColor: COLOR.BORDER.INPUT_FOCUS,
    outline: 0,
    boxShadow: BOXSHADOW.FOCUS,
  },
  ':disabled': {
    backgroundColor: COLOR.BACKGROUND.DISABLED,
    opacity: 1,
    cursor: 'not-allowed',
  },
  '::placeholder': {
    color: COLOR.FONT.PLACEHOLDER,
  },
  ':hover': {
    border: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.INPUT_HOVER}`,
  },
});

const CalendarStyle = css({
  '.react-datepicker__month-text': {
    margin: SIZE.MARGIN._2,
    padding: SIZE.PADDING._2,
  },
  '.react-datepicker__month-text--keyboard-selected:hover': {
    backgroundColor: '#1d5d90', // Memo: プラグイン側で使用されている色に合わせて直接指定。ガイドラインに準拠するように変更するかも
  },
});
const PopperStyle = css({
  zIndex: '2',
});

// Todo: Configure Popper Properties

/** ReactComponent
 * className: ReactDatePickerのプロパティじゃなくてラップしてるコンポーネントに渡すものなので注意
 * flexとblock要素でラップしないと▲がぶっ飛ぶ
 */
const InputDate: React.FC<Props> = (props) => {
  const { dateFormatType, className } = props;
  return (
    <Wrapper className={className}>
      <div>
        <DatePicker
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          className={CustomStyle}
          locale="ja"
          dateFormat={
            dateFormatType === 'day' || dateFormatType === undefined
              ? 'yyyy/MM/dd'
              : 'yyyy/MM'
          }
          calendarClassName={CalendarStyle}
          popperClassName={PopperStyle}
        />
      </div>
    </Wrapper>
  );
};

export default InputDate;

InputDate.defaultProps = {
  refs: undefined,
  dateFormatType: 'day',
};
