import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import LabelBox from '@atoms/LabelBox/LabelBox';
import Styled from '@emotion/styled';
import IconText from '@molecules/IconText/IconText';
import AppCard from '@organisms/App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { COLOR, SIZE } from '@styles/constant';
import React, { useEffect, useState } from 'react';
import dummyContractLogo from '../../../../assets/img/dummyContractLogo.png';
import ToolTipContractMenu, {
  ContractPulldownGroup,
  ContractPulldownItem,
} from '../../shared/ContractToolTipMenu';

type ContractInformationCardProps = {
  onContractInformationMenu: VoidFunction;
  openToolTip: boolean;
  onEdit: VoidFunction;
  contractDelete: VoidFunction;
  useSystem: 'pro' | 'com';
};

const dummyProContractData = [
  {
    contractType: '法人',
    OperationStatus: true,
    contractId: 'Abcde',
    date: '2022年04月01日', // 契約日
    corporationName: '岩手県中央ワイズ法人',
    corporationType: '医療法人',
    family: '利用する',
    contractorName: '契約太郎',
    address: '岩手県盛岡市盛岡駅西通2-11-1',
    phoneNumber: '123-4567-8901',
    faxNumber: '123-4567-8901',
    representativeMail: 'representative@testmail.com',
    number: '32', // 所属事業所数
  },
];
const dummyComContractData = [
  {
    contractType: '法人',
    OperationStatus: true,
    contractId: 'Abcde',
    date: '2022年04月01日', // 契約日
    corporationName: '岩手県中央ワイズ法人',
    corporationType: '医療法人',
    family: '併用',
    contractorName: '契約太郎',
    address: '岩手県盛岡市盛岡駅西通2-11-1',
    phoneNumber: '123-4567-8901',
    faxNumber: '123-4567-8901',
    representativeMail: 'representative@testmail.com',
    number: '32', // 所属事業所数
  },
];

/**  StyledComponent */
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '200px 1fr 200px 1fr',
});
const StyledGridTableHeaderItem = Styled(GridTableHeaderItem)({
  backgroundColor: COLOR.BACKGROUND.GRAY_10,
});
const ContractLogoWrapper = Styled('div')({
  width: '150px',
});
const ContractNameItem = Styled(GridTableItem)({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._4,
  alignItems: 'flex-start',
});
/**  ReactComponent */
const ContractInformationCard: React.FC<ContractInformationCardProps> = ({
  onContractInformationMenu,
  openToolTip,
  useSystem,
  onEdit,
  // onErFacilityEdit,
  // onRvFacilityEdit,
  // onOtherDataImportFacilityEdit,
  // onSeFacilityEdit,
  contractDelete,
  // onCsv,
}) => {
  console.log('render ContractInformationCard');
  const [contractStatus, setContractStatus] = useState(false);
  const [dummyContractData, setDummyContractData] =
    useState(dummyProContractData);
  useEffect(() => {
    if (useSystem === 'pro') {
      setDummyContractData(dummyProContractData);
    }
    if (useSystem === 'com') {
      setDummyContractData(dummyComContractData);
    }
  });
  return (
    <>
      {/* 開発用切替 */}
      <ActionAnchor onClick={() => setContractStatus(!contractStatus)}>
        契約稼働/停止切替(開発用切替)
      </ActionAnchor>
      <AppCard
        cardTitle="契約情報"
        cardTitleIcon="facility"
        headerRight={
          <>
            <Button
              onClick={() => onContractInformationMenu()}
              iconName="chevronUp"
            >
              編集
            </Button>
            <ToolTipContractMenu isOpen={openToolTip}>
              <ContractPulldownGroup>
                <ContractPulldownItem onClick={onEdit}>
                  編集
                </ContractPulldownItem>
                <ContractPulldownItem onClick={contractDelete}>
                  {contractStatus ? '全利用停止' : '全利用開始'}
                </ContractPulldownItem>
              </ContractPulldownGroup>
            </ToolTipContractMenu>
          </>
        }
      >
        {dummyContractData.map((item, index) => (
          <StyledGridTable setBorder={false} key={`key-${index.toString()}`}>
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>契約モード</StyledGridTableHeaderItem>
              <GridTableItem>{item.contractType}</GridTableItem>
            </GridTableRow>
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>稼働状況</StyledGridTableHeaderItem>
              <GridTableItem>
                <IconText
                  iconName={contractStatus === true ? 'check' : 'cancel'}
                  setIconColor={contractStatus === true ? 'green' : 'red'}
                  setIconSize="_12"
                  setFontSize="_12"
                >
                  {contractStatus === true ? '稼働中' : '停止中'}
                </IconText>
              </GridTableItem>
            </GridTableRow>
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>契約ID</StyledGridTableHeaderItem>
              <GridTableItem>{item.contractId}</GridTableItem>
            </GridTableRow>
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>契約日</StyledGridTableHeaderItem>
              <GridTableItem>{item.date}</GridTableItem>
            </GridTableRow>
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>契約名</StyledGridTableHeaderItem>
              <ContractNameItem>
                <LabelBox setLabelColor="primary" setSize="small">
                  社内アカウント
                </LabelBox>
                {item.corporationName}
              </ContractNameItem>
            </GridTableRow>
            {useSystem === 'pro' && (
              <GridTableRow setStriped={false}>
                <StyledGridTableHeaderItem>法人種別</StyledGridTableHeaderItem>
                <GridTableItem>{item.corporationType}</GridTableItem>
              </GridTableRow>
            )}
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>ロゴ画像</StyledGridTableHeaderItem>
              <GridTableItem>
                <ContractLogoWrapper>
                  <img src={dummyContractLogo} alt="dummyContractLogo" />
                </ContractLogoWrapper>
              </GridTableItem>
            </GridTableRow>
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>家族連携</StyledGridTableHeaderItem>
              <GridTableItem>{item.family}</GridTableItem>
            </GridTableRow>
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>契約者名</StyledGridTableHeaderItem>
              <GridTableItem>{item.contractorName}</GridTableItem>
            </GridTableRow>
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>住所</StyledGridTableHeaderItem>
              <GridTableItem>{item.address}</GridTableItem>
            </GridTableRow>
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>電話番号</StyledGridTableHeaderItem>
              <GridTableItem>{item.phoneNumber}</GridTableItem>
            </GridTableRow>
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>FAX番号</StyledGridTableHeaderItem>
              <GridTableItem>{item.faxNumber}</GridTableItem>
            </GridTableRow>
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>代表メール</StyledGridTableHeaderItem>
              <GridTableItem>{item.representativeMail}</GridTableItem>
            </GridTableRow>
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>
                所属事業所数
              </StyledGridTableHeaderItem>
              <GridTableItem>{item.number}事業所</GridTableItem>
            </GridTableRow>
            {useSystem === 'com' && (
              <GridTableRow setStriped={false}>
                <StyledGridTableHeaderItem />
                <GridTableItem />
              </GridTableRow>
            )}
          </StyledGridTable>
        ))}
      </AppCard>
    </>
  );
};

export default ContractInformationCard;
