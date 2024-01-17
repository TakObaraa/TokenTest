import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import * as ColoredIcons from './colored';
import * as NormalIcons from './normal';

type IconType = typeof NormalIcons.IconAlert;

const meta: Meta<IconType> = {
  component: NormalIcons.IconAlert,
  argTypes: {
    fill: {
      type: 'string',
      description: 'Fill color',
      defaultValue: 'currentColor',
    },
    fontSize: {
      type: 'string',
      description: 'Icon Size',
      defaultValue: '1em',
    },
  },
};

const Table = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${theme.sizes.sm}, 1fr))`,
  fontSize: theme.fontSizes['2xl'],
  gap: theme.spacings.xs,
}));

const Showcase = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacings.xs,
  gap: theme.spacings.xs,
  alignItems: 'center',
  justifyContent: 'center',
}));

const Sub = styled('sub')(({ theme }) => ({
  fontSize: theme.fontSizes.sm,
}));

export const Default: StoryObj<IconType> = {
  args: {
    fill: 'coral',
    fontSize: '2em',
  },
};

export const Colored: StoryObj<IconType> = {
  render: () => {
    return (
      <Table>
        {Object.entries(ColoredIcons).map(([iconName, Icon]) => {
          return (
            <Showcase key={iconName}>
              <Icon />
              <Sub>{iconName}</Sub>
            </Showcase>
          );
        })}
      </Table>
    );
  },
};

export const Normal: StoryObj<IconType> = {
  render: () => {
    return (
      <Table>
        {Object.entries(NormalIcons).map(([iconName, Icon]) => {
          return (
            <Showcase key={iconName}>
              <Icon />
              <Sub>{iconName}</Sub>
            </Showcase>
          );
        })}
      </Table>
    );
  },
};

export default meta;
