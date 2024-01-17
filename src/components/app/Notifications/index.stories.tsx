import Button from '@app/Button';
import type { Meta, StoryObj } from '@storybook/react';
import Notifications, {
  showErrorNotification,
  showSuccessNotification,
  showWarningNotification,
} from '.';

type ComponentType = typeof Notifications;

const meta: Meta<ComponentType> = {
  component: Notifications,
  args: {},
};

type Story = StoryObj<ComponentType>;

export const Default: Story = {
  render: (args) => {
    return (
      <>
        <Notifications {...args} />
        <Button
          setType="success"
          onClick={() =>
            showSuccessNotification({
              title: 'Success',
              message: 'This is a success notification',
            })
          }
        >
          SUCCESS
        </Button>

        <Button
          setType="danger"
          onClick={() =>
            showErrorNotification({
              title: 'Error',
              message: 'This is a error notification',
            })
          }
        >
          ERROR
        </Button>

        <Button
          setType="warning"
          onClick={() =>
            showWarningNotification({
              title: 'Warning',
              message: 'This is a warning notification',
            })
          }
        >
          WARNING
        </Button>

        <Button
          setType="info"
          onClick={() =>
            showWarningNotification({
              title: 'loading',
              message: 'This is a loading notification',
              loading: true,
            })
          }
        >
          LOADING
        </Button>
      </>
    );
  },
};

export default meta;
