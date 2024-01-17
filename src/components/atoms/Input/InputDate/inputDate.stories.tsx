import { Meta, Story } from '@storybook/react';
import ja from 'date-fns/locale/ja';
import dayjs from 'dayjs';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputDate from './InputDate';

registerLocale('ja', ja);
setDefaultLocale('ja');

export default ({
  title: 'Atoms/Input/InputDate',
  component: InputDate,
  argTypes: {},
} as Meta);

const Template: Story = () => (
  <div className="story-item">
    <InputDate
      onChange={() => console.log('')}
      placeholderText="生年月日"
      selected={dayjs('2022-10-17').toDate()}
    />
  </div>
);

export const Default = Template.bind({});
