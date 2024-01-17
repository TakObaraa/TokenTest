import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
import AppCard from '@organisms/App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { SIZE } from '@styles/constant';
import React, { useEffect, useState } from 'react';

const dummyProErFacilityData = [
  {
    type: '他社電カル',
    family: '併用',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '病院/病院',
    OperationStatus: true,
    administrator: true,
  },
  {
    type: '他社電カル',
    family: '単独',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '診療所・介護施設/診療所',
    OperationStatus: true,
    administrator: false,
  },
  {
    type: 'ER',
    family: 'なし',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '診療所・介護施設/歯科診療所',
    OperationStatus: false,
    administrator: true,
  },
  {
    type: 'ER',
    family: '併用',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '在宅介護サービス/調剤薬局',
    OperationStatus: false,
    administrator: false,
  },
];
const dummyComErFacilityData = [
  {
    type: '他社電カル',
    family: '併用',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '病院',
    OperationStatus: true,
    administrator: true,
  },
  {
    type: '他社電カル',
    family: '単独',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '診療所',
    OperationStatus: true,
    administrator: false,
  },
  {
    type: 'ER',
    family: 'なし',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '歯科診療所',
    OperationStatus: false,
    administrator: true,
  },
  {
    type: 'ER',
    family: '併用',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '調剤薬局',
    OperationStatus: false,
    administrator: false,
  },
];

type ErFacilityCardProps = {
  onEdit: VoidFunction;
  onAdd: VoidFunction;
  useSystem: 'pro' | 'com';
};

/**  StyledComponent */
const StyledAppCard = Styled(AppCard)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '100px 1fr 200px 1fr 70px 80px 70px',
});
const GridTableHeaderRow = Styled(GridTableRow)({});

/**  ReactComponent */
const ErFacilityCard: React.FC<ErFacilityCardProps> = ({
  onEdit,
  onAdd,
  useSystem,
}) => {
  console.log('render ErFacilityCard');
  const [dummyErFacilityData, setDummyErFacilityData] = useState(
    dummyProErFacilityData,
  );
  useEffect(() => {
    if (useSystem === 'pro') {
      setDummyErFacilityData(dummyProErFacilityData);
    }
    if (useSystem === 'com') {
      setDummyErFacilityData(dummyComErFacilityData);
    }
  }, [useSystem]);

  return (
    <StyledAppCard
      cardTitle="ER事業所"
      cardTitleIcon="facility"
      headerRight={
        <Button onClick={onAdd} iconName="entry">
          事業所追加
        </Button>
      }
    >
      <StyledGridTable setBorder={false}>
        <GridTableHeaderRow>
          <GridTableHeaderItem>区分</GridTableHeaderItem>
          <GridTableHeaderItem>事業所名</GridTableHeaderItem>
          <GridTableHeaderItem>セキュリティID</GridTableHeaderItem>
          <GridTableHeaderItem>事業所種別</GridTableHeaderItem>
          <GridTableHeaderItem setPosition="center">
            家族連携
          </GridTableHeaderItem>
          <GridTableHeaderItem setPosition="center">
            統括管理者
          </GridTableHeaderItem>
          <GridTableHeaderItem setPosition="center">編集</GridTableHeaderItem>
        </GridTableHeaderRow>
        {dummyErFacilityData.map((item, index) => (
          <GridTableRow setStriped={false} key={`key-${index.toString()}`}>
            <GridTableItem>{item.type}</GridTableItem>
            <GridTableItem>{item.facilityName}</GridTableItem>
            <GridTableItem>{item.securityId}</GridTableItem>
            <GridTableItem>{item.facilityType}</GridTableItem>
            <GridTableItem setPosition="center">
              <Paragraph
                setFontSize="_12"
                setColor={item.family === 'なし' ? 'default' : 'success'}
              >
                {item.family}
              </Paragraph>
            </GridTableItem>
            <GridTableItem setPosition="center">
              {item.administrator ? '○' : ''}
            </GridTableItem>
            <GridTableItem setPosition="center">
              <ActionAnchor setFontSize="_12" onClick={onEdit}>
                編集
              </ActionAnchor>
            </GridTableItem>
          </GridTableRow>
        ))}
      </StyledGridTable>
    </StyledAppCard>
  );
};

export default ErFacilityCard;
