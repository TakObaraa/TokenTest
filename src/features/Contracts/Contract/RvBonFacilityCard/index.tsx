import Styled from '@emotion/styled';
import AppCard from '@organisms/App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import React from 'react';

const dummyRvBonFacilityData = [
  {
    dbId: '12345',
    relatedFacilitiesName: 'さくらデイサービス',
    relatedCode: 'abcde',
    bonOption: '◯',
    bonStartDate: '',
    bonEndDate: '',
    abolitionFlag: '使用中',
  },
];

/**  StyledComponent */
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '100px 1fr 100px 110px 110px 110px 100px',
});
const GridTableHeaderRow = Styled(GridTableRow)({});

/**  ReactComponent */
const RvBonFacilityCard: React.FC = () => {
  console.log('render RvBonFacilityCard');
  return (
    <AppCard cardTitle="RV/BON連携情報" cardTitleIcon="facility">
      <StyledGridTable setBorder={false}>
        <GridTableHeaderRow>
          <GridTableHeaderItem>DBID</GridTableHeaderItem>
          <GridTableHeaderItem>関連事業所名</GridTableHeaderItem>
          <GridTableHeaderItem>関連機関コード</GridTableHeaderItem>
          <GridTableHeaderItem>BONオプション</GridTableHeaderItem>
          <GridTableHeaderItem>BON優先開始日</GridTableHeaderItem>
          <GridTableHeaderItem>BON優先終了日</GridTableHeaderItem>
          <GridTableHeaderItem setPosition="center">
            廃止フラグ
          </GridTableHeaderItem>
        </GridTableHeaderRow>
        {dummyRvBonFacilityData.map((item, index) => (
          <GridTableRow setStriped={false} key={`key-${index.toString()}`}>
            <GridTableItem>{item.dbId}</GridTableItem>
            <GridTableItem>{item.relatedFacilitiesName}</GridTableItem>
            <GridTableItem>{item.relatedCode}</GridTableItem>
            <GridTableItem setPosition="center">{item.bonOption}</GridTableItem>
            <GridTableItem>{item.bonStartDate}</GridTableItem>
            <GridTableItem>{item.bonEndDate}</GridTableItem>
            <GridTableItem setPosition="center">
              {item.abolitionFlag}
            </GridTableItem>
          </GridTableRow>
        ))}
      </StyledGridTable>
    </AppCard>
  );
};

export default RvBonFacilityCard;
