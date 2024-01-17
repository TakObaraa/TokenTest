import InputDate from '@atoms/Input/InputDate/InputDate';
import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import dayjs from 'dayjs';
import DatePeriod from './DatePeriod';

type DatePeriodType = PropsOf<typeof DatePeriod>;
export default ({
  title: 'Molecules/DatePeriod',
  component: DatePeriod,
} as Meta);

const Template: Story<DatePeriodType> = ({ startInputDate, endInputDate }) => (
  <DatePeriod startInputDate={startInputDate} endInputDate={endInputDate} />
);

export const Default = Template.bind({});
Default.args = {
  startInputDate: (
    <InputDate
      selected={dayjs('2022-10-17').toDate()}
      onChange={(date) => console.log(date)}
      placeholderText="開始日"
    />
  ),
  endInputDate: (
    <InputDate
      selected={dayjs('2022-10-17').toDate()}
      onChange={(date) => console.log(date)}
      placeholderText="終了日"
    />
  ),
};
