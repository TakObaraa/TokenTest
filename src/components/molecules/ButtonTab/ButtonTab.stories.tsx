import { PropsOf } from '@emotion/react';
import { Story } from '@storybook/react';
import ButtonTab from './ButtonTab';

type ButtonTabPropsType = PropsOf<typeof ButtonTab>;

export default {
  title: 'Molecules/ButtonTab',
  component: ButtonTab,
};

export const Default: Story<ButtonTabPropsType> = ({
  labels,
  activeSegment,
}) => (
  <div className="story-item">
    <ButtonTab
      activeSegment={activeSegment}
      labels={labels}
      onClick={(index) => console.log(index)}
    />
  </div>
);

Default.args = {
  labels: [
    'segment0',
    'segment1',
    'segment2',
    'segment3',
    'segment4',
    'segment5',
  ],
  activeSegment: 0,
};
