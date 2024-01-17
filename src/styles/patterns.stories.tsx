import Button from '@app/Button';
import { styled } from '@libraries/emotion';
import type { Meta, StoryObj } from '@storybook/react';
import Patterns from '@styles/patterns';
import EmotionProvider from './EmotionProvider';

type ComponentType = typeof EmotionProvider;

const meta: Meta<ComponentType> = {
  component: EmotionProvider,
};

type Story = StoryObj<ComponentType>;

const Container = styled('div')(
  Patterns.container({ maxWidth: '3xl', padding: ['xs', 'sm'] }),
  Patterns.stack({ gap: 'sm' }),
);

const Box = styled('div')(
  Patterns.box({ padding: ['xs', 'sm'] }),
  Patterns.stack({ direction: 'horizontal', gap: 'sm', align: 'center' }),
  ({ theme }) => ({
    border: theme.borders.default,
    borderRadius: theme.radius.base,
  }),
);

const EllipsisText = styled('p')(Patterns.ellipsis({ lineClamp: 2 }));

const Spacer = styled('div')(Patterns.spacer());

const ScrollableContainer = styled('div')(
  Patterns.container({ scroll: true, maxHeight: 'sm' }),
  Patterns.box({ padding: ['xs', 'sm'], border: 'default' }),
);

export const Default: Story = {
  render: () => {
    return (
      <Container>
        <h2>Ellipsis Text</h2>

        <Box>
          <EllipsisText>
            lorem ipsum dolor sit amet consectetur adipisicing elit. quibusdam
            quia quidem voluptatem, autem, natus, quod quae dolorum voluptatum
            accusamus optio quos
          </EllipsisText>
        </Box>

        <h2>Spacer</h2>

        <Box>
          <Button>Left Button</Button>
          <Spacer>this is space...</Spacer>
          <Button>Right Button</Button>
        </Box>

        <h2>Scrollable Container</h2>

        <ScrollableContainer>
          <p>
            practice influence dish suit relationship universe aloud position
            with observe ten train reader quickly low buffalo felt appearance
            tropical teeth rays whale took spring remove tall paid create
            necessary send that breakfast common knowledge horn cotton own bag
            joined cook felt steep symbol post courage seldom imagine example
            skill acres rest strong tin fire grain atmosphere safe cheese
            something sharp border name combine were nearly young silent bean
            change voice pay noise
          </p>
        </ScrollableContainer>
      </Container>
    );
  },
};

export default meta;
