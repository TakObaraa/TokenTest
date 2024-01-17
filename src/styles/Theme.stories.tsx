import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';
import EmotionProvider from './EmotionProvider';

type ComponentType = typeof EmotionProvider;
type Story = StoryObj<ComponentType>;

const Showcase = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${theme.sizes.lg}, 1fr))`,
  gap: theme.spacings.md,
}));

const Item = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacings.sm,
}));

const Placeholder = styled('div')<{ bg: string }>(({ theme, bg }) => ({
  width: theme.sizes['2xs'],
  height: theme.sizes['2xs'],
  margin: theme.spacings.xs,
  borderRadius: theme.radius.base,
  backgroundColor: bg,
}));

const meta: Meta<ComponentType> = {
  component: EmotionProvider,
};

export const Global: Story = {
  args: {
    children: (
      <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <h2>Button</h2>

        <button type="button">Global Style</button>
      </div>
    ),
  },
};

export const Colors: Story = {
  render: () => {
    const theme = useTheme();
    return (
      <Showcase>
        {/* primary */}
        <Item>
          <Placeholder bg={theme.colors.primary.dark} />
          <sub>colors.primary.dark</sub>
        </Item>
        <Item>
          <Placeholder bg={theme.colors.primary.main} />
          <sub>colors.primary.main</sub>
        </Item>
        <Item>
          <Placeholder bg={theme.colors.primary.light} />
          <sub>colors.primary.light</sub>
        </Item>

        {/* secondary */}
        <Item>
          <Placeholder bg={theme.colors.secondary.dark} />
          <sub>colors.secondary.dark</sub>
        </Item>
        <Item>
          <Placeholder bg={theme.colors.secondary.main} />
          <sub>colors.secondary.main</sub>
        </Item>
        <Item>
          <Placeholder bg={theme.colors.secondary.light} />
          <sub>colors.secondary.light</sub>
        </Item>

        {/* sky */}
        <Item>
          <Placeholder bg={theme.colors.sky.dark} />
          <sub>colors.sky.dark</sub>
        </Item>
        <Item>
          <Placeholder bg={theme.colors.sky.main} />
          <sub>colors.sky.main</sub>
        </Item>
        <Item>
          <Placeholder bg={theme.colors.sky.light} />
          <sub>colors.sky.light</sub>
        </Item>

        {/* red */}
        <Item>
          <Placeholder bg={theme.colors.red.dark} />
          <sub>colors.red.dark</sub>
        </Item>
        <Item>
          <Placeholder bg={theme.colors.red.main} />
          <sub>colors.red.main</sub>
        </Item>
        <Item>
          <Placeholder bg={theme.colors.red.light} />
          <sub>colors.red.light</sub>
        </Item>

        {/* orange */}
        <Item>
          <Placeholder bg={theme.colors.orange.dark} />
          <sub>colors.orange.dark</sub>
        </Item>
        <Item>
          <Placeholder bg={theme.colors.orange.main} />
          <sub>colors.orange.main</sub>
        </Item>
        <Item>
          <Placeholder bg={theme.colors.orange.light} />
          <sub>colors.orange.light</sub>
        </Item>

        {/* green */}
        <Item>
          <Placeholder bg={theme.colors.green.dark} />
          <sub>colors.green.dark</sub>
        </Item>
        <Item>
          <Placeholder bg={theme.colors.green.main} />
          <sub>colors.green.main</sub>
        </Item>
        <Item>
          <Placeholder bg={theme.colors.green.light} />
          <sub>colors.green.light</sub>
        </Item>
      </Showcase>
    );
  },
};

export const Typography: Story = {
  render: () => {
    const theme = useTheme();
    return (
      <div>
        <h2>fonts</h2>

        <p style={{ fontFamily: theme.fonts.default }}>fonts.default</p>
        <p style={{ fontFamily: theme.fonts.mono }}>fonts.mono</p>
        <p style={{ fontFamily: theme.fonts.serif }}>fonts.serif</p>

        <h2>fontSizes</h2>

        <p style={{ fontSize: theme.fontSizes['3xl'] }}>fontSize.3xl</p>
        <p style={{ fontSize: theme.fontSizes['2xl'] }}>fontSize.2xl</p>
        <p style={{ fontSize: theme.fontSizes.xl }}>fontSize.xl</p>
        <p style={{ fontSize: theme.fontSizes.lg }}>fontSize.lg</p>
        <p style={{ fontSize: theme.fontSizes.md }}>fontSize.md</p>
        <p style={{ fontSize: theme.fontSizes.sm }}>fontSize.sm</p>
        <p style={{ fontSize: theme.fontSizes.xs }}>fontSize.xs</p>

        <h2>fontWeights</h2>

        <p style={{ fontWeight: theme.fontWeights.bold }}>fontWeight.bold</p>
        <p style={{ fontWeight: theme.fontWeights.normal }}>
          fontWeight.normal
        </p>
      </div>
    );
  },
};

const SampleScale = styled('div')<{ w: string }>(({ theme, w: width }) => ({
  height: theme.sizes['2xs'],
  width,
  backgroundColor: theme.colors.primary.main,
}));

export const Spacings: Story = {
  render: () => {
    const theme = useTheme();
    return (
      <Showcase>
        <Item>
          <SampleScale w={theme.spacings['2xs']} />
          <sub>spacings['2xs']</sub>
        </Item>

        <Item>
          <SampleScale w={theme.spacings.xs} />
          <sub>spacings.xs</sub>
        </Item>

        <Item>
          <SampleScale w={theme.spacings.sm} />
          <sub>spacings.sm</sub>
        </Item>

        <Item>
          <SampleScale w={theme.spacings.md} />
          <sub>spacings.md</sub>
        </Item>

        <Item>
          <SampleScale w={theme.spacings.lg} />
          <sub>spacings.lg</sub>
        </Item>

        <Item>
          <SampleScale w={theme.spacings.xl} />
          <sub>spacings.xl</sub>
        </Item>
      </Showcase>
    );
  },
};

export default meta;
