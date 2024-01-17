import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Radio from '@atoms/Radio/Radio';
import Styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import AppCard from '../../../App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '../../../GridTable/GridTable';
import ToolTipContractMenu, {
  ContractPulldownGroup,
  ContractPulldownItem,
} from '../../ContractToolTipMenu/ContractToolTipMenu';

type ErFacilityCardProps = {
  onRvFacilityMenu: VoidFunction;
  openToolTip: boolean;
  onDetailModal: VoidFunction;
  onRepresentativeFacilityEdit: VoidFunction;
  onFacilityAdd: VoidFunction;
  onRvUsingSetting: VoidFunction;
  useSystem: 'pro' | 'com';
  onRepresentativeFacilityAdd: VoidFunction;
};

const dummyProRvFacilityData = [
  {
    siteCode: 'U123456',
    ins: 'W001',
    grp: 'GR01',
    dbid: '12345',
    representFacility: 'さくらデイサービス',
    facilities: [
      {
        facilityId: 'abcde1',
        family: 'なし',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '在宅介護/通所介護',
        status: true,
      },
      {
        facilityId: 'abcde2',
        family: 'なし',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '在宅介護/通所介護',
        status: true,
      },
      {
        facilityId: 'abcde3',
        family: 'なし',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '在宅介護/通所介護',
        status: true,
      },
      {
        facilityId: 'abcde3',
        family: 'なし',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '在宅介護/通所介護',
        status: true,
      },
    ],
  },
];

const dummyComRvFacilityData = [
  {
    siteCode: 'U123456',
    ins: 'W001',
    grp: 'GR01',
    dbid: '12345',
    representFacility: 'さくらデイサービス',
    facilities: [
      {
        facilityId: 'abcde1',
        family: '併用',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '通所介護',
        status: true,
      },
      {
        facilityId: 'abcde2',
        family: 'なし',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '通所介護',
        status: true,
      },
      {
        facilityId: 'abcde3',
        family: '併用',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '通所介護',
        status: true,
      },
      {
        facilityId: 'abcde3',
        family: 'なし',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '通所介護',
        status: true,
      },
    ],
  },
];

/**  StyledComponent */
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns:
    '40px 100px 80px 80px 80px 1fr 80px 1fr 1fr 110px 65px 70px 70px',
});
const GridTableHeaderRow = Styled(GridTableRow)({});
/**  ReactComponent */
const RvFacilityCard: React.FC<ErFacilityCardProps> = ({
  onRvFacilityMenu,
  openToolTip,
  onDetailModal,
  onRepresentativeFacilityEdit,
  onFacilityAdd,
  onRvUsingSetting,
  useSystem,
  onRepresentativeFacilityAdd,
}) => {
  console.log('render RvFacilityCard');
  const [dummyRvFacilityData, setDummyRvFacilityData] = useState(
    dummyProRvFacilityData,
  );
  useEffect(() => {
    if (useSystem === 'pro') {
      setDummyRvFacilityData(dummyProRvFacilityData);
    }
    if (useSystem === 'com') {
      setDummyRvFacilityData(dummyComRvFacilityData);
    }
  }, [useSystem]);
  return (
    <AppCard
      cardTitle="RV事業所"
      cardTitleIcon="facility"
      headerRight={
        <>
          <Button onClick={() => onRvFacilityMenu()} iconName="chevronUp">
            編集
          </Button>
          <ToolTipContractMenu isOpen={openToolTip}>
            <ContractPulldownGroup>
              <ContractPulldownItem onClick={onRepresentativeFacilityAdd}>
                {/* 選択した事業所の下に新しい代表事業所を追加 選択しない場合は一番下に追加 */}
                RVサイト追加
              </ContractPulldownItem>
              <ContractPulldownItem onClick={onRepresentativeFacilityEdit}>
                RVサイト編集
              </ContractPulldownItem>
            </ContractPulldownGroup>
            <ContractPulldownGroup>
              <ContractPulldownItem onClick={onFacilityAdd}>
                RV事業所追加
              </ContractPulldownItem>
            </ContractPulldownGroup>
            <ContractPulldownGroup>
              <ContractPulldownItem onClick={onRvUsingSetting}>
                停止・開始
              </ContractPulldownItem>
            </ContractPulldownGroup>
          </ToolTipContractMenu>
        </>
      }
    >
      <StyledGridTable setBorder={false}>
        <GridTableHeaderRow>
          <GridTableHeaderItem setPosition="center">選択</GridTableHeaderItem>
          <GridTableHeaderItem>サイトコード</GridTableHeaderItem>
          <GridTableHeaderItem>INS</GridTableHeaderItem>
          <GridTableHeaderItem>GRP</GridTableHeaderItem>
          <GridTableHeaderItem>DBID</GridTableHeaderItem>
          <GridTableHeaderItem>代表事業所名</GridTableHeaderItem>
          <GridTableHeaderItem>事業所ID</GridTableHeaderItem>
          <GridTableHeaderItem>事業所名</GridTableHeaderItem>
          <GridTableHeaderItem>セキュリティID</GridTableHeaderItem>
          <GridTableHeaderItem>事業所種別</GridTableHeaderItem>
          <GridTableHeaderItem>家族連携</GridTableHeaderItem>
          <GridTableHeaderItem setPosition="center">
            稼働状況
          </GridTableHeaderItem>
          <GridTableHeaderItem setPosition="center">詳細</GridTableHeaderItem>
        </GridTableHeaderRow>
        {dummyRvFacilityData.map((item, index) => (
          <GridTableRow setStriped={false} key={`key-${index.toString()}`}>
            <GridTableItem setPosition="center" setRow={item.facilities.length}>
              <Radio
                label=""
                refs={{
                  name: 'RvFacility',
                  onChange: async () => {
                    console.log('onChage');
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
            <GridTableItem setRow={item.facilities.length}>
              {item.siteCode}
            </GridTableItem>
            <GridTableItem setRow={item.facilities.length}>
              {item.ins}
            </GridTableItem>
            <GridTableItem setRow={item.facilities.length}>
              {item.grp}
            </GridTableItem>
            <GridTableItem setRow={item.facilities.length}>
              {item.dbid}
            </GridTableItem>
            <GridTableItem setRow={item.facilities.length}>
              {item.representFacility}
            </GridTableItem>

            {item.facilities.map((facilities, facilitiesIndex) => (
              <GridTableRow
                setStriped={false}
                key={`key-${facilitiesIndex.toString()}`}
              >
                <>
                  {console.log('facilitiesIndex', facilitiesIndex)}
                  <GridTableItem>
                    <ActionAnchor setFontSize="_12">
                      {facilities.facilityId}
                    </ActionAnchor>
                  </GridTableItem>
                  <GridTableItem>{facilities.facilityName}</GridTableItem>
                  <GridTableItem>{facilities.securityId}</GridTableItem>
                  <GridTableItem>{facilities.facilityType}</GridTableItem>
                  <GridTableItem setPosition="center">
                    <Paragraph
                      setFontSize="_12"
                      setColor={
                        facilities.family === 'なし' ? 'default' : 'success'
                      }
                    >
                      {facilities.family}
                    </Paragraph>
                  </GridTableItem>
                  <GridTableItem setPosition="center">
                    <Icon
                      name={facilities.status ? 'check' : 'cancel'}
                      setColor={facilities.status ? 'green' : 'red'}
                      setSize="_12"
                    />
                  </GridTableItem>
                  <GridTableItem setPosition="center">
                    <ActionAnchor setFontSize="_12" onClick={onDetailModal}>
                      詳細
                    </ActionAnchor>
                  </GridTableItem>
                </>
              </GridTableRow>
            ))}
          </GridTableRow>
        ))}
      </StyledGridTable>
    </AppCard>
  );
};

export default RvFacilityCard;
