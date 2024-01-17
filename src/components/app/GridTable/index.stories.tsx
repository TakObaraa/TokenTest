import GridTable from '@app/GridTable';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GridTable> = {
  component: GridTable,
};

export default meta;
type Story = StoryObj<typeof GridTable>;

export const Default: Story = {
  render: () => {
    return (
      <GridTable setColumn="max-content 1fr " setBoxShadow>
        <GridTable.Row>
          <GridTable.HeaderItem>Header 1</GridTable.HeaderItem>
          <GridTable.HeaderItem>Header 2</GridTable.HeaderItem>
          <GridTable.HeaderItem>Header 3</GridTable.HeaderItem>
        </GridTable.Row>

        <GridTable.Row>
          <GridTable.Item setPosition="flex-start">left</GridTable.Item>
          <GridTable.Item setPosition="center">center</GridTable.Item>
          <GridTable.Item setPosition="flex-end">right</GridTable.Item>
        </GridTable.Row>

        <GridTable.Row>
          <GridTable.Item setDirection="vertical" setPosition="flex-start">
            <h5>title</h5>
            <p>vertical left</p>
          </GridTable.Item>
          <GridTable.Item setDirection="vertical" setPosition="center">
            <h5>title</h5>
            <p>vertical center</p>
          </GridTable.Item>
          <GridTable.Item setDirection="vertical" setPosition="flex-end">
            <h5>title</h5>
            <p>vertical right</p>
          </GridTable.Item>
        </GridTable.Row>

        <GridTable.Row>
          <GridTable.Item>Inner Table (not striped or striped)</GridTable.Item>

          <GridTable.Item resetPadding>
            <GridTable setColumn={2} setBorder={false} setStriped={false}>
              <GridTable.Row>
                <GridTable.Item>1-1</GridTable.Item>
                <GridTable.Item>1-2</GridTable.Item>
              </GridTable.Row>

              <GridTable.Row>
                <GridTable.Item>2-1</GridTable.Item>
                <GridTable.Item>2-2</GridTable.Item>
              </GridTable.Row>

              <GridTable.Row>
                <GridTable.Item>3-1</GridTable.Item>
                <GridTable.Item>3-2</GridTable.Item>
              </GridTable.Row>
            </GridTable>
          </GridTable.Item>

          <GridTable.Item>3</GridTable.Item>
        </GridTable.Row>

        <GridTable.Row>
          <GridTable.Item>Subgrid</GridTable.Item>

          <GridTable.Subgrid setColumn={2}>
            <GridTable.Row>
              <GridTable.Item>1-1</GridTable.Item>
              <GridTable.Item>1-2</GridTable.Item>
            </GridTable.Row>

            <GridTable.Row>
              <GridTable.Item>2-1</GridTable.Item>
              <GridTable.Item>2-2</GridTable.Item>
            </GridTable.Row>

            <GridTable.Row>
              <GridTable.Item>3-1</GridTable.Item>
              <GridTable.Item>3-2</GridTable.Item>
            </GridTable.Row>
          </GridTable.Subgrid>
        </GridTable.Row>
      </GridTable>
    );
  },
};
