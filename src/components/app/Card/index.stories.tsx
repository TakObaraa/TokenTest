import Card from '@app/Card';
import Paragraph from '@app/Paragraph';
import { IconCheckup } from '@app/icons/normal';
import { StoryObj } from '@storybook/react';

export default {
  component: Card,
};

export const Default: StoryObj<typeof Card> = {
  render: () => (
    <Card>
      <Card.Content>
        <Card.Header>
          <Card.IconTitle icon={<IconCheckup />}>タイトル</Card.IconTitle>
          <Paragraph>ボタンとか補足とか</Paragraph>
        </Card.Header>
        <Card.Section>
          <Paragraph>React.Nodeを渡す</Paragraph>
        </Card.Section>
      </Card.Content>
    </Card>
  ),
};

export const CardContentControlButton: StoryObj<typeof Card> = {
  render: () => (
    <Card>
      <Card.Content>
        <Card.Header>
          <Card.IconTitle icon={<IconCheckup />}>タイトル</Card.IconTitle>
          <Paragraph>ボタンとか補足とか</Paragraph>
        </Card.Header>
        <Card.ContentControl>
          <Card.ContentControlButton>
            コントロールボタン
          </Card.ContentControlButton>
        </Card.ContentControl>
        <Card.Section>
          <Paragraph>
            `Card.ContentControl`と`Card.ContentControlButton`を使用する
          </Paragraph>
        </Card.Section>
      </Card.Content>
    </Card>
  ),
};
