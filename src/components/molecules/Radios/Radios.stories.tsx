import { PropsOf } from '@emotion/react';
import { Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import Radios from './Radios';

type RadiosPropsType = PropsOf<typeof Radios>;

export default {
  title: 'Molecules/Radios',
  component: Radios,
};

export const Default: Story<RadiosPropsType> = ({ radios }) => {
  const { register } = useForm<{ test: string }>();
  return (
    <div className="story-item">
      <Radios radios={radios} refs={register('test')} />
    </div>
  );
};

Default.args = {
  radios: [
    { label: 'Radios1', value: '1' },
    { label: 'Radios2', value: '2' },
    { label: 'Radios3', value: '3' },
  ],
};
