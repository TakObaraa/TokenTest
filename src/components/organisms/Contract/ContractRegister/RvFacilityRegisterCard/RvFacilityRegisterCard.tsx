import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Radio from '@atoms/Radio/Radio';
import Styled from '@emotion/styled';
import { SIZE } from '@styles/constant';
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

type RvFacilityCardProps = {
  onRvFacilityMenu: VoidFunction;
  openToolTip: boolean;
  onRepresentativeFacilityAdd: VoidFunction;
  onRepresentativeFacilityEdit: VoidFunction;
  onFacilityAdd: VoidFunction;
  onFacilityEdit: VoidFunction;
  useSystem: 'pro' | 'com';
};

const dummyProRvFacilityData = [
  {
    siteCode: 'U123456',
    ins: 'W001',
    grb: 'GR01',
    representFacility: 'さくらデイサービス',
    facilities: [
      {
        family: '併用',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '在宅介護/通所介護',
        administrator: true,
      },
      {
        family: '単独',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '在宅介護/通所介護',
        administrator: false,
      },
      {
        family: 'なし',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '在宅介護/通所介護',
        administrator: false,
      },
    ],
  },
  {
    siteCode: 'U123456',
    ins: 'W001',
    grb: 'GR01',
    representFacility: 'さくらデイサービス',
    facilities: [
      {
        family: 'なし',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '在宅介護/通所介護',
        administrator: false,
      },
      {
        family: 'なし',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '在宅介護/通所介護',
        administrator: false,
      },
    ],
  },
];
const dummyComRvFacilityData = [
  {
    siteCode: 'U123456',
    ins: 'W001',
    grb: 'GR01',
    representFacility: 'さくらデイサービス',
    facilities: [
      {
        family: '併用',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '通所介護',
        administrator: true,
      },
      {
        family: '単独',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '通所介護',
        administrator: false,
      },
      {
        family: 'なし',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '通所介護',
        administrator: false,
      },
    ],
  },
  {
    siteCode: 'U123456',
    ins: 'W001',
    grb: 'GR01',
    representFacility: 'さくらデイサービス',
    facilities: [
      {
        family: 'なし',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '通所介護',
        administrator: false,
      },
      {
        family: 'なし',
        facilityName: 'さくらデイサービス',
        securityId: 'Wise1111111',
        facilityType: '通所介護',
        administrator: false,
      },
    ],
  },
];

/**  StyledComponent */
const StyledAppCard = Styled(AppCard)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '40px 100px 80px 80px 1fr 1fr 110px 1fr 70px 80px 70px',
});
const GridTableHeaderRow = Styled(GridTableRow)({});
/**  ReactComponent */
const RvFacilityRegisterCard: React.FC<RvFacilityCardProps> = ({
  onRvFacilityMenu,
  openToolTip,
  onRepresentativeFacilityAdd,
  onRepresentativeFacilityEdit,
  onFacilityAdd,
  onFacilityEdit,
  useSystem,
}) => {
  console.log('render RvFacilityRegisterCard');
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
    <StyledAppCard
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
          <GridTableHeaderItem>代表事業所名</GridTableHeaderItem>
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
              {item.grb}
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
                    {facilities.administrator ? '○' : ''}
                  </GridTableItem>
                  <GridTableItem setPosition="center">
                    <ActionAnchor setFontSize="_12" onClick={onFacilityEdit}>
                      編集
                    </ActionAnchor>
                  </GridTableItem>
                </>
              </GridTableRow>
            ))}
          </GridTableRow>
        ))}
      </StyledGridTable>
    </StyledAppCard>
  );
};

export default RvFacilityRegisterCard;
