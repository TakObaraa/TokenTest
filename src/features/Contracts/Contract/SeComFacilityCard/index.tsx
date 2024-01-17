import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Radio from '@atoms/Radio/Radio';
import Styled from '@emotion/styled';
import AppCard from '@organisms/App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ToolTipContractMenu, {
  ContractPulldownItem,
} from '../../shared/ContractToolTipMenu';

const dummySeFacilityData = [
  {
    facilityId: 'abcde',
    family: '併用',
    facilityName: 'さくらデイサービス',
    securityId: 'Wise1111111',
    facilityType: '病院',
    OperationStatus: true,
  },
  {
    facilityId: 'abcde',
    family: '単独',
    facilityName: 'さくらデイサービス',
    securityId: 'Wise1111111',
    facilityType: 'その他',
    OperationStatus: true,
  },
  {
    facilityId: 'abcde',
    family: 'なし',
    facilityName: 'さくらデイサービス',
    securityId: 'Wise1111111',
    facilityType: '薬局',
    OperationStatus: false,
  },
  {
    facilityId: 'abcde',
    family: '併用',
    facilityName: 'さくらデイサービス',
    securityId: 'Wise1111111',
    facilityType: '居宅介護支援事業所',
    OperationStatus: false,
  },
];
const dummyComFacilityData = [
  {
    facilityId: 'abcde',
    family: '併用',
    facilityName: 'さくらデイサービス',
    securityId: 'Wise1111111',
    facilityType: '病院',
    OperationStatus: true,
  },
  {
    facilityId: 'abcde',
    family: '併用',
    facilityName: 'さくらデイサービス',
    securityId: 'Wise1111111',
    facilityType: 'その他',
    OperationStatus: true,
  },
  {
    facilityId: 'abcde',
    family: 'なし',
    facilityName: 'さくらデイサービス',
    securityId: 'Wise1111111',
    facilityType: '薬局',
    OperationStatus: false,
  },
  {
    facilityId: 'abcde',
    family: 'なし',
    facilityName: 'さくらデイサービス',
    securityId: 'Wise1111111',
    facilityType: '居宅介護支援事業所',
    OperationStatus: false,
  },
];

type SeComFacilityCardProps = {
  onSeComFacilityMenu: VoidFunction;
  openToolTip: boolean;
  onDetailModal: VoidFunction;
  // onEdit: VoidFunction;
  onSeUsingSetting: VoidFunction;
  onComUsingSetting: VoidFunction;
  seComFacilityRadioSelect: Dispatch<SetStateAction<boolean>>;
  useSystem: 'pro' | 'com';
  onAdd: VoidFunction;
};

/**  StyledComponent */
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '40px 100px 1fr 110px 300px 80px 70px 70px',
});
const GridTableHeaderRow = Styled(GridTableRow)({});

/**  ReactComponent */
const SeComFacilityCard: React.FC<SeComFacilityCardProps> = ({
  onSeComFacilityMenu,
  openToolTip,
  onDetailModal,
  // onEdit,
  onSeUsingSetting,
  onComUsingSetting,
  seComFacilityRadioSelect,
  useSystem,
  onAdd,
}) => {
  console.log('render SeComFacilityCard');
  const [seComFacilityStatus, setSeComFacilityStatus] = useState(false);
  const [dummySeComFacilityData, setDummySeComFacilityData] =
    useState(dummySeFacilityData);
  useEffect(() => {
    if (useSystem === 'pro') {
      setDummySeComFacilityData(dummySeFacilityData);
    }
    if (useSystem === 'com') {
      setDummySeComFacilityData(dummyComFacilityData);
    }
  });
  return (
    <AppCard
      cardTitle={useSystem === 'pro' ? 'SE事業所' : 'Com事業所'}
      cardTitleIcon="facility"
      headerRight={
        <>
          <Button onClick={() => onSeComFacilityMenu()} iconName="chevronUp">
            編集
          </Button>
          <ToolTipContractMenu isOpen={openToolTip}>
            <ContractPulldownItem onClick={onAdd}>
              事業所追加
            </ContractPulldownItem>
            <ContractPulldownItem
              onClick={
                useSystem === 'pro' ? onSeUsingSetting : onComUsingSetting
              }
            >
              {seComFacilityStatus === true ? '停止' : '開始'}
            </ContractPulldownItem>
          </ToolTipContractMenu>
        </>
      }
    >
      <StyledGridTable setBorder={false}>
        <GridTableHeaderRow>
          <GridTableHeaderItem setPosition="center">選択</GridTableHeaderItem>
          <GridTableHeaderItem>事業所ID</GridTableHeaderItem>
          <GridTableHeaderItem>事業所名</GridTableHeaderItem>
          <GridTableHeaderItem>セキュリティID</GridTableHeaderItem>
          <GridTableHeaderItem>事業所種別</GridTableHeaderItem>
          <GridTableHeaderItem setPosition="center">
            家族連携
          </GridTableHeaderItem>
          <GridTableHeaderItem setPosition="center">
            稼働状況
          </GridTableHeaderItem>
          <GridTableHeaderItem setPosition="center">詳細</GridTableHeaderItem>
        </GridTableHeaderRow>
        {dummySeComFacilityData.map((item, index) => (
          <GridTableRow setStriped={false} key={`key-${index.toString()}`}>
            <GridTableItem setPosition="center">
              <Radio
                label=""
                refs={{
                  name: 'SeComFacility',
                  onChange: async () => {
                    console.log('onChange');
                    seComFacilityRadioSelect(item.OperationStatus);
                    setSeComFacilityStatus(item.OperationStatus);
                  },
                  onBlur: async () => {
                    console.log('onBlur');
                  },
                  ref: () => {
                    console.log('ref');
                  },
                }}
              />
            </GridTableItem>
            <GridTableItem>
              <ActionAnchor setFontSize="_12">{item.facilityId}</ActionAnchor>
            </GridTableItem>
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
              <Icon
                name={item.OperationStatus ? 'check' : 'cancel'}
                setColor={item.OperationStatus ? 'green' : 'red'}
                setSize="_12"
              />
            </GridTableItem>
            <GridTableItem setPosition="center">
              <ActionAnchor setFontSize="_12" onClick={onDetailModal}>
                詳細
              </ActionAnchor>
            </GridTableItem>
          </GridTableRow>
        ))}
      </StyledGridTable>
    </AppCard>
  );
};

export default SeComFacilityCard;
