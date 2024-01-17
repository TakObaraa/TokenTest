import Styled from '@emotion/styled';
import { COLOR } from '@styles/constant';
import React from 'react';
import AppCard from '../../../App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '../../../GridTable/GridTable';

/**  StyledComponent */
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '200px 1fr 200px 1fr',
});
const StyledGridTableHeaderItem = Styled(GridTableHeaderItem)({
  backgroundColor: COLOR.BACKGROUND.GRAY_10,
});
/**  ReactComponent */
const VideoStorageCard: React.FC = () => {
  console.log('render VideoStorageCard');
  return (
    <AppCard cardTitle="動画容量" cardTitleIcon="setting">
      <StyledGridTable setBorder={false}>
        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>契約同意</StyledGridTableHeaderItem>
          <GridTableItem>同意済み</GridTableItem>
          <StyledGridTableHeaderItem>動画使用容量</StyledGridTableHeaderItem>
          <GridTableItem>1.2/16GB</GridTableItem>
        </GridTableRow>
      </StyledGridTable>
    </AppCard>
  );
};

export default VideoStorageCard;
