import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import FlashMessage from './FlashMessage';

type FlashMessagePropsType = PropsOf<typeof FlashMessage>;

export default ({
  title: 'Atoms/FlashMessage',
  component: FlashMessage,
} as Meta);

const Template: Story<FlashMessagePropsType> = ({
  className,
  setFlashMessageType,
  withModal,
}) => (
  <div data-test-id="sb-dismiss">
    <FlashMessage
      isOpen
      onDidDismiss={() => console.log('onDidDismiss')}
      className={className}
      setFlashMessageType={setFlashMessageType}
      withModal={withModal}
    >
      Normal Text
    </FlashMessage>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  setFlashMessageType: 'success',
};
