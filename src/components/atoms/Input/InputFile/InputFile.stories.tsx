import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import InputFile from './InputFile';

type InputFileProps = PropsOf<typeof InputFile>;

export default ({
  title: 'Atoms/Input/InputFile',
  component: InputFile,
} as Meta);

const Template: Story<InputFileProps> = ({ className, accept }) => {
  const { register } = useForm<{ file: FileList }>();
  return (
    <div className="story-item">
      <p className="component-name">InputFile</p>
      <InputFile
        className={className}
        accept={accept}
        refs={register('file')}
      />
    </div>
  );
};

// コンポーネントをエクスポートする
export const InputFileSample = Template.bind({});

InputFileSample.args = { accept: 'image/*' };
