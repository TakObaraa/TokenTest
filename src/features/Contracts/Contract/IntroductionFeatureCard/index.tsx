import Button from '@atoms/Button/Button';
import Styled from '@emotion/styled';
import AppCard from '@organisms/App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { COLOR } from '@styles/constant';
import React from 'react';

type IntroductionFeatureCardProps = {
  useSystem: 'pro' | 'com';
  onEdit: VoidFunction;
};

/**  StyledComponent */
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '200px 1fr 200px 1fr',
});
const StyledGridTableHeaderItem = Styled(GridTableHeaderItem)({
  backgroundColor: COLOR.BACKGROUND.GRAY_10,
});
/**  ReactComponent */
const IntroductionFeatureCard: React.FC<IntroductionFeatureCardProps> = ({
  useSystem,
  onEdit,
}) => {
  console.log('render IntroductionFeatureCard');
  return (
    <AppCard
      cardTitle="導入機能管理"
      cardTitleIcon="setting"
      headerRight={
        <Button onClick={onEdit} iconName="chevronUp">
          編集
        </Button>
      }
    >
      <StyledGridTable setBorder={false}>
        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>ID-Link連携</StyledGridTableHeaderItem>
          <GridTableItem>利用する</GridTableItem>
          {useSystem === 'pro' && (
            <>
              <StyledGridTableHeaderItem />
              <GridTableItem />
            </>
          )}
          {useSystem === 'com' && (
            <>
              <StyledGridTableHeaderItem>連携シート</StyledGridTableHeaderItem>
              <GridTableItem>利用する</GridTableItem>
            </>
          )}
        </GridTableRow>
      </StyledGridTable>
    </AppCard>
  );
};

export default IntroductionFeatureCard;
