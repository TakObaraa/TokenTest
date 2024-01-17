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

const dummyProErFacilityData = [
  {
    dbId: '12345',
    type: '他社電カル',
    facilityId: 'abcde',
    family: '併用',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '病院/病院',
    OperationStatus: true,
  },
  {
    dbId: '12345',
    type: '他社電カル',
    facilityId: 'abcde',
    family: '単独',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '診療所・介護施設/診療所',
    OperationStatus: true,
  },
  {
    dbId: '12345',
    type: 'ER',
    facilityId: 'abcde',
    family: 'なし',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '診療所・介護施設/歯科診療所',
    OperationStatus: false,
  },
  {
    dbId: '12345',
    type: 'ER',
    facilityId: 'abcde',
    family: '併用',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '在宅介護サービス/調剤薬局',
    OperationStatus: false,
  },
];

const dummyComErFacilityData = [
  {
    dbId: '12345',
    type: '他社電カル',
    facilityId: 'abcde',
    family: '併用',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '病院',
    OperationStatus: true,
  },
  {
    dbId: '12345',
    type: '他社電カル',
    facilityId: 'abcde',
    family: '併用',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '診療所',
    OperationStatus: true,
  },
  {
    dbId: '12345',
    type: 'ER',
    facilityId: 'abcde',
    family: 'なし',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '歯科診療所',
    OperationStatus: false,
  },
  {
    dbId: '12345',
    type: 'ER',
    facilityId: 'abcde',
    family: 'なし',
    facilityName: 'ワイズ中央病院',
    securityId: 'Wise1111111',
    facilityType: '調剤薬局',
    OperationStatus: false,
  },
];

type ErFacilityCardProps = {
  onErFacilityMenu: VoidFunction;
  openToolTip: boolean;
  onDetailModal: VoidFunction;
  // onEdit: VoidFunction;
  onUsingSetting: VoidFunction;
  erFacilityRadioSelect: Dispatch<SetStateAction<boolean>>;
  useSystem: 'pro' | 'com';
  onAdd: VoidFunction;
};

/**  StyledComponent */
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '40px 100px 100px 100px 1fr 200px 1fr 80px 70px 70px',
});
const GridTableHeaderRow = Styled(GridTableRow)({});

/**  ReactComponent */
const ErFacilityCard: React.FC<ErFacilityCardProps> = ({
  onErFacilityMenu,
  openToolTip,
  onDetailModal,
  // onEdit,
  onUsingSetting,
  erFacilityRadioSelect,
  useSystem,
  onAdd,
}) => {
  console.log('render ErFacilityCard');
  const [erFacilityStatus, setErFacilityStatus] = useState(false);
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
    <AppCard
      cardTitle="ER事業所"
      cardTitleIcon="facility"
      headerRight={
        <>
          <Button onClick={() => onErFacilityMenu()} iconName="chevronUp">
            編集
          </Button>
          <ToolTipContractMenu isOpen={openToolTip}>
            <ContractPulldownItem onClick={onAdd}>
              事業所追加
            </ContractPulldownItem>
            {/* <ContractPulldownItem onClick={onEdit}>編集</ContractPulldownItem> */}
            <ContractPulldownItem onClick={onUsingSetting}>
              {erFacilityStatus === true ? '停止' : '開始'}
            </ContractPulldownItem>
          </ToolTipContractMenu>
        </>
      }
    >
      <StyledGridTable setBorder={false}>
        <GridTableHeaderRow>
          <GridTableHeaderItem setPosition="center">選択</GridTableHeaderItem>
          <GridTableHeaderItem>DBID</GridTableHeaderItem>
          <GridTableHeaderItem>区分</GridTableHeaderItem>
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
        {dummyErFacilityData.map((item, index) => (
          <GridTableRow setStriped={false} key={`key-${index.toString()}`}>
            <GridTableItem setPosition="center">
              <Radio
                label=""
                refs={{
                  name: 'ErFacility',
                  onChange: async () => {
                    console.log('onChage');
                    erFacilityRadioSelect(item.OperationStatus);
                    setErFacilityStatus(item.OperationStatus);
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
            <GridTableItem>{item.dbId}</GridTableItem>
            <GridTableItem>{item.type}</GridTableItem>
            <GridTableItem>
              <ActionAnchor setFontSize="_12">{item.facilityId}</ActionAnchor>
            </GridTableItem>
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

export default ErFacilityCard;
