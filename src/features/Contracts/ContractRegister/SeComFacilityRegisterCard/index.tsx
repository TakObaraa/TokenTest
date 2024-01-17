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
import React from 'react';

const dummySeComFacilityData = [
  {
    family: '併用',
    facilityName: 'さくらデイサービス',
    securityId: 'Wise1111111',
    facilityType: '病院',
    OperationStatus: true,
    administrator: false,
  },
  {
    family: '単独',
    facilityName: 'さくらデイサービス',
    securityId: 'Wise1111111',
    facilityType: 'その他',
    OperationStatus: true,
    administrator: false,
  },
  {
    family: 'なし',
    facilityName: 'さくらデイサービス',
    securityId: 'Wise1111111',
    facilityType: '薬局',
    OperationStatus: true,
    administrator: false,
  },
  {
    family: '併用',
    facilityName: 'さくらデイサービス',
    securityId: 'Wise1111111',
    facilityType: '居宅介護支援事業所',
    OperationStatus: true,
    administrator: false,
  },
];

type SeComFacilityRegisterCardProps = {
  onEdit: VoidFunction;
  onAdd: VoidFunction;
  useSystem: 'pro' | 'com';
};

/**  StyledComponent */
const StyledAppCard = Styled(AppCard)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '1fr 110px 1fr 70px 80px 70px',
});
const GridTableHeaderRow = Styled(GridTableRow)({});

/**  ReactComponent */
const SeComFacilityRegisterCard: React.FC<SeComFacilityRegisterCardProps> = ({
  onEdit,
  onAdd,
  useSystem,
}) => {
  console.log('render SeComFacilityRegisterCard');
  return (
    <StyledAppCard
      cardTitle={useSystem === 'pro' ? 'SE事業所' : 'Com事業所'}
      cardTitleIcon="facility"
      headerRight={
        <Button onClick={onAdd} iconName="entry">
          事業所追加
        </Button>
      }
    >
      <StyledGridTable setBorder={false}>
        <GridTableHeaderRow>
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
        {dummySeComFacilityData.map((item, index) => (
          <GridTableRow setStriped={false} key={`key-${index.toString()}`}>
            <GridTableItem>{item.facilityName}</GridTableItem>
            <GridTableItem>{item.securityId}</GridTableItem>
            <GridTableItem>
              {useSystem === 'pro' && 'SE/'}
              {item.facilityType}
            </GridTableItem>
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

export default SeComFacilityRegisterCard;
