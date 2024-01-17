import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import InputText from '@atoms/Input/InputText/InputText';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
import AppCard from '@organisms/App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { SIZE } from '@styles/constant';
import MainTemplate from '@templates/MainTemplate/MainTemplate';
import React from 'react';

const dummyAccessTotallingData = [
  { contractId: 'abcde', contractName: '盛岡市', access: '1234667890' },
  { contractId: 'fghij', contractName: 'ワイズ法人', access: '1234667890' },
  { contractId: 'klmn', contractName: 'ワイズ苑', access: '1234667890' },
  { contractId: 'abcde', contractName: '盛岡市', access: '1234667890' },
  { contractId: 'fghij', contractName: 'ワイズ法人', access: '1234667890' },
  { contractId: 'klmn', contractName: 'ワイズ苑', access: '1234667890' },
];

/** StyledComponent */
const StyledMainTemplate = Styled(MainTemplate)({
  width: '100%',
});
const ContentHeader = Styled('div')({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
  display: 'flex',
  justifyContent: 'flex-start',
});
const ContentTitle = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._4,
});
const SearchArea = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._8,
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const StyledInputText = Styled(InputText)({
  width: '200px',
});
const AccessTotallingTable = Styled(GridTable)({
  gridTemplateColumns: '100px 1fr 200px 100px',
});
const GridTableHeaderRow = Styled(GridTableRow)({});
/** ReactComponent */
const AccessTotalling: React.FC = () => {
  console.log('render AccessTotalling');
  return (
    <StyledMainTemplate>
      <ContentHeader>
        <ContentTitle>
          <Icon name="stats" setSize="_24" />
          <Paragraph setFontSize="_24">アクセス集計</Paragraph>
        </ContentTitle>
      </ContentHeader>
      <SearchArea>
        <StyledInputText placeholder="契約ID/契約名" />
        <Button iconName="search">検索</Button>
      </SearchArea>
      <AppCard cardTitle="契約一覧" cardTitleIcon="list">
        <AccessTotallingTable setBorder={false}>
          <GridTableHeaderRow>
            <GridTableHeaderItem>契約ID</GridTableHeaderItem>
            <GridTableHeaderItem>契約名</GridTableHeaderItem>
            <GridTableHeaderItem setPosition="right" setDirection="row">
              総アクセス数
            </GridTableHeaderItem>
            <GridTableHeaderItem setPosition="center">内訳</GridTableHeaderItem>
          </GridTableHeaderRow>
          {dummyAccessTotallingData.map((item, index) => (
            <GridTableRow key={`key-${index.toString()}`}>
              <GridTableItem>{item.contractId}</GridTableItem>
              <GridTableItem>{item.contractName}</GridTableItem>
              <GridTableItem setPosition="right" setDirection="row">
                {item.access}
              </GridTableItem>
              <GridTableItem setPosition="center">
                <ActionAnchor setFontSize="_12">内訳</ActionAnchor>
              </GridTableItem>
            </GridTableRow>
          ))}
        </AccessTotallingTable>
      </AppCard>
    </StyledMainTemplate>
  );
};

export default AccessTotalling;
