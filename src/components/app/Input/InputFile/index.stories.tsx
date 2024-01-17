import { Meta, StoryObj } from '@storybook/react';
import InputFile from '.';

type InputFileProps = React.ComponentProps<typeof InputFile>;

const meta: Meta<InputFileProps> = {
  component: InputFile,
  parameters: { controls: { hideNoControlsWarning: true } },
  args: {
    accept: 'image/*',
  },
};

export default meta;
type Story = StoryObj<InputFileProps>;

export const Default: Story = {
  render: ({ ...props }) => {
    return (
      <div className="story-item">
        <InputFile {...props} />
      </div>
    );
  },
};
