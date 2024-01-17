import { PropsOf } from '@emotion/react';
import styled from '@emotion/styled';
import { Story } from '@storybook/react';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from './GridTable';

type GirdTablePropsType = PropsOf<typeof GridTable>;

const Paragraph = styled('p')({
  margin: '0 0 16px',
});

export default {
  title: 'Organisms/GridTable',
  component: GridTable,
};

export const Default: Story<GirdTablePropsType> = ({
  setBoxShadow,
  setBorder,
  setColumn,
}) => (
  <>
    <Paragraph>
      GridTable内にimportしたGridTableRow,GridTableHeaderItem,GridTableItemを使用してテーブルを作成
      <br />
      それぞれの各種プロパティはコンポーネントファイルを参照（あとで追記するかも）
    </Paragraph>
    <GridTable
      setColumn={setColumn}
      setBoxShadow={setBoxShadow}
      setBorder={setBorder}
    >
      <GridTableRow>
        <GridTableHeaderItem>1</GridTableHeaderItem>
        <GridTableHeaderItem>2</GridTableHeaderItem>
        <GridTableHeaderItem>3</GridTableHeaderItem>
      </GridTableRow>
      <GridTableRow>
        <GridTableItem>1</GridTableItem>
        <GridTableItem>2</GridTableItem>
        <GridTableItem>3</GridTableItem>
      </GridTableRow>
    </GridTable>
  </>
);

Default.args = {
  setColumn: 3,
  setBoxShadow: true,
  setBorder: true,
};
