import AttachedFile from '@molecules/AttachedFile/AttachedFile';
// Todo Storybook
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { COLOR, SIZE, makeStyle } from '@styles/constant';
import AttachedFiles, { AttachedFilesProps } from './AttachedFiles';

const style = makeStyle({
  borderBottom: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
});

const meta: Meta<AttachedFilesProps> = {
  title: 'Molecules/AttachedFiles',
  component: AttachedFiles,
  parameters: { controls: { hideNoControlsWarning: true } },
  args: {
    children: (
      <>
        <AttachedFile
          style={style}
          src="/src/assets/img/dummy.png"
          fileName="添付済みの画像1.png"
          onDelete={action('onDelete1')}
        />
        <AttachedFile
          style={style}
          src="/src/assets/img/dummy.png"
          fileName="添付済みの画像2.png"
          onDelete={action('onDelete2')}
        />
        <AttachedFile
          style={style}
          src="/src/assets/img/dummy.png"
          fileName="添付済みの画像3.png"
          onDelete={action('onDelete3')}
        />
        <AttachedFile
          style={style}
          src="/src/assets/img/dummy.png"
          fileName="添付済みの画像4.png"
          onDelete={action('onDelete4')}
        />
        <AttachedFile
          style={style}
          src="/src/assets/img/dummy.png"
          fileName="添付済みの画像5.png"
          onDelete={action('onDelete5')}
        />
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<AttachedFilesProps>;

export const Default: Story = {
  render: ({ ...props }) => <AttachedFiles {...props} />,
};
