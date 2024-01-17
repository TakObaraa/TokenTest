import CheckBox from '@atoms/CheckBox/Checkbox';
import Styled from '@emotion/styled';
import AppCard from '@organisms/App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { COLOR, SIZE } from '@styles/constant';
import React from 'react';

type IntroductionFeatureRegisterCard = {
  useSystem: 'pro' | 'com';
};

/**  StyledComponent */
const StyledAppCard = Styled(AppCard)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '200px 1fr',
});
const StyledGridTableHeaderItem = Styled(GridTableHeaderItem)({
  backgroundColor: COLOR.BACKGROUND.GRAY_10,
});

/**  ReactComponent */
const IntroductionFeatureRegisterCard: React.FC<
  IntroductionFeatureRegisterCard
> = ({ useSystem }) => {
  console.log('render IntroductionFeatureRegisterCard');
  return (
    <StyledAppCard cardTitle="導入機能管理" cardTitleIcon="setting">
      <StyledGridTable setBorder={false}>
        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>ID-Link連携</StyledGridTableHeaderItem>
          <GridTableItem>
            <CheckBox setLabelSize="_12" label="利用する" />
          </GridTableItem>
        </GridTableRow>
        {useSystem === 'com' && (
          <GridTableRow setStriped={false}>
            <StyledGridTableHeaderItem>連携シート</StyledGridTableHeaderItem>
            <GridTableItem>
              <CheckBox setLabelSize="_12" label="利用する" />
            </GridTableItem>
          </GridTableRow>
        )}
      </StyledGridTable>
    </StyledAppCard>
  );
};

export default IntroductionFeatureRegisterCard;
