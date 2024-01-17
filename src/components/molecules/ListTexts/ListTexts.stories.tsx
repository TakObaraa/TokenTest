import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import ListTexts from './ListTexts';

type ListTextsProps = PropsOf<typeof ListTexts>;

export default ({
  title: 'Molecules/ListTexts',
  component: ListTexts,
} as Meta);

const Template: Story<ListTextsProps> = ({
  className,
  setFontSize,
  resetLineHeight,
  isEllipsis,
  texts,
}) => (
  <div>
    <ListTexts
      className={className}
      setFontSize={setFontSize}
      resetLineHeight={resetLineHeight}
      isEllipsis={isEllipsis}
      texts={texts}
    />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  texts: [{ text: 'Normal ListText1' }, { text: 'Normal ListText2' }],
};
