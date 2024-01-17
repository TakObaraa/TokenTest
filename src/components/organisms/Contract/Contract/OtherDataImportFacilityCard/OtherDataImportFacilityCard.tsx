import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import Radio from '@atoms/Radio/Radio';
import Styled from '@emotion/styled';
import { COLOR } from '@styles/constant';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import AppCard from '../../../App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '../../../GridTable/GridTable';
import ToolTipContractMenu, {
  ContractPulldownItem,
} from '../../ContractToolTipMenu/ContractToolTipMenu';

type OtherDataImportFacilityProps = {
  onOtherDataImportFacilityMenu: VoidFunction;
  openToolTip: boolean;
  useSystem: 'pro' | 'com';
  onUsingSetting: VoidFunction;
  otherDataImportFacilityRadioSelect: Dispatch<SetStateAction<boolean>>;
  onAdd: VoidFunction;
  onDetailModal: VoidFunction;
};

const dummyProOtherDataImportFacilityData = [
  {
    facilityId: 'abcde',
    facilityType: '病院/病院',
    facilityName: 'ワイズ病院',
    status: true,
  },
  {
    facilityId: 'abcde',
    facilityType: '病院/病院',
    facilityName: 'ワイズ病院',
    status: false,
  },
];
const dummyComOtherDataImportFacilityData = [
  {
    facilityId: 'abcde',
    facilityType: '病院',
    facilityName: 'ワイズ病院',
    status: true,
  },
  {
    facilityId: 'abcde',
    facilityType: '病院',
    facilityName: 'ワイズ病院',
    status: false,
  },
];

const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '40px 100px 1fr 380px 70px 70px',
});

const StyledGridTableHeaderItem = Styled(GridTableHeaderItem)({
  backgroundColor: COLOR.BACKGROUND.GRAY_10,
});

/**  ReactComponent */
const OtherDataImportFacilityCard: React.FC<OtherDataImportFacilityProps> = ({
  onOtherDataImportFacilityMenu,
  openToolTip,
  useSystem,
  onUsingSetting,
  otherDataImportFacilityRadioSelect,
  onAdd,
  onDetailModal,
}) => {
  console.log('render OtherDataImportFacilityCard');
  const [otherDataImportFacilityStatus, setOtherDataImportFacilityStatus] =
    useState(false);
  const [
    dummyOtherDataImportFacilityData,
    setDummyOtherDataImportFacilityData,
  ] = useState(dummyProOtherDataImportFacilityData);
  useEffect(() => {
    if (useSystem === 'pro') {
      setDummyOtherDataImportFacilityData(dummyProOtherDataImportFacilityData);
    }
    if (useSystem === 'com') {
      setDummyOtherDataImportFacilityData(dummyComOtherDataImportFacilityData);
    }
  }, [useSystem]);
  return (
    <AppCard
      cardTitle="他社データ取込用事業所"
      cardTitleIcon="facility"
      headerRight={
        <>
          <Button
            onClick={() => onOtherDataImportFacilityMenu()}
            iconName="chevronUp"
          >
            編集
          </Button>
          <ToolTipContractMenu isOpen={openToolTip}>
            <ContractPulldownItem onClick={onAdd}>
              事業所追加
            </ContractPulldownItem>
            <ContractPulldownItem onClick={onUsingSetting}>
              {otherDataImportFacilityStatus === true ? '停止' : '開始'}
            </ContractPulldownItem>
          </ToolTipContractMenu>
        </>
      }
    >
      <StyledGridTable setBorder={false}>
        <GridTableRow>
          <StyledGridTableHeaderItem setPosition="center">
            選択
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>事業所ID</StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>事業所名</StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>事業所種別</StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem setPosition="center">
            稼働状況
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem setPosition="center">
            詳細
          </StyledGridTableHeaderItem>
        </GridTableRow>
        {dummyOtherDataImportFacilityData.map((item, index) => (
          <GridTableRow setStriped={false} key={`key-${index.toString()}`}>
            <GridTableItem setPosition="center">
              <Radio
                label=""
                refs={{
                  name: 'OtherDataImportFacility',
                  onChange: async () => {
                    console.log('onChage');
                    otherDataImportFacilityRadioSelect(item.status);
                    setOtherDataImportFacilityStatus(item.status);
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
            <GridTableItem>{item.facilityType}</GridTableItem>
            <GridTableItem setPosition="center">
              <Icon
                name={item.status ? 'check' : 'cancel'}
                setColor={item.status ? 'green' : 'red'}
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

export default OtherDataImportFacilityCard;
