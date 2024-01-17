import Button from '@atoms/Button/Button';
import CheckBox from '@atoms/CheckBox/Checkbox';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '@organisms/App/AppModal/AppModal';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { SIZE } from '@styles/constant';
import React from 'react';

/** ダミー */
const dummyErFacilityData = [
  {
    dbid: '12345',
    facilityID: 'abcde',
    facilityName: 'ワイズ病院',
  },
  {
    dbid: '67890',
    facilityID: 'akba',
    facilityName: 'ワイズ病院',
  },
  {
    dbid: '24680',
    facilityID: 'kawag',
    facilityName: '盛岡ワイズ病院',
  },
];
const dummyRvFacilityData = [
  {
    siteCode: 'u20211020',
    instance: 'W123',
    GRP: 'GR01',
    DBID: '67890',
    representativeFacilityName: 'ひまわり居宅',
  },
  {
    siteCode: 'u20211021',
    instance: 'W001',
    GRP: 'GR02',
    DBID: '67880',
    representativeFacilityName: 'さくらデイサービス',
  },
];
const dummySeComFacilityData = [
  {
    facilityID: 'syoum',
    facilityName: 'ワイズ病院',
  },
  {
    facilityID: 'sadam',
    facilityName: 'ワイズ病院',
  },
];
const dummyOtherDataImportFacilityData = [
  {
    facilityID: 'harum',
    facilityName: '取込用福祉事業所',
  },
];

type ContractCsvModalProps = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  useSystem: 'pro' | 'com';
};
/** StyledComponent */
const StyledAppModalContent = Styled(AppModalContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._16,
});
const ERFacilityTable = Styled(GridTable)({
  gridTemplateColumns: '60px 100px 100px 1fr',
});
const RvFacilityTable = Styled(GridTable)({
  gridTemplateColumns: '60px 100px 80px 80px 80px 1fr',
});
const OtherFacilityTable = Styled(GridTable)({
  gridTemplateColumns: '60px 100px 1fr',
});
const TableTitle = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});
const FacilityTableWrap = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._4,
});
const StyledAppModalFooterRight = Styled(AppModalFooterRight)({
  display: 'flex',
  gap: SIZE.GAP._8,
});
/** ReactComponent */
const ContractCsvModal: React.FC<ContractCsvModalProps> = ({
  isOpen,
  onDidDismiss,
  useSystem,
}) => {
  console.log('render ContractCsvModal');
  return (
    <AppModal
      isOpen={isOpen}
      modalTitle="出力する事業所・サイトを選択"
      modalTitleIcon="download"
      modalType="large"
      onDidDismiss={onDidDismiss}
    >
      <StyledAppModalContent>
        <FacilityTableWrap>
          <TableTitle>
            <Paragraph setBold>ER事業所</Paragraph>
          </TableTitle>
          <ERFacilityTable>
            <GridTableRow>
              <GridTableHeaderItem setPosition="center">
                <CheckBox setBold setLabelSize="_12" label="選択" />
              </GridTableHeaderItem>
              <GridTableHeaderItem>DBID</GridTableHeaderItem>
              <GridTableHeaderItem>事業所ID</GridTableHeaderItem>
              <GridTableHeaderItem>事業所名</GridTableHeaderItem>
            </GridTableRow>
            {dummyErFacilityData.map((data, index) => (
              <GridTableRow key={`key-${index.toString()}`}>
                <GridTableItem setPosition="center">
                  <CheckBox />
                </GridTableItem>
                <GridTableItem>{data.dbid}</GridTableItem>
                <GridTableItem>{data.facilityID}</GridTableItem>
                <GridTableItem>{data.facilityName}</GridTableItem>
              </GridTableRow>
            ))}
          </ERFacilityTable>
        </FacilityTableWrap>

        <FacilityTableWrap>
          <TableTitle>
            <Paragraph setBold>RVサイト</Paragraph>
          </TableTitle>
          <RvFacilityTable>
            <GridTableRow>
              <GridTableHeaderItem setPosition="center">
                <CheckBox setBold setLabelSize="_12" label="選択" />
              </GridTableHeaderItem>
              <GridTableHeaderItem>サイトコード</GridTableHeaderItem>
              <GridTableHeaderItem>Instance</GridTableHeaderItem>
              <GridTableHeaderItem>GRP</GridTableHeaderItem>
              <GridTableHeaderItem>DBID</GridTableHeaderItem>
              <GridTableHeaderItem>代表事業所名</GridTableHeaderItem>
            </GridTableRow>
            {dummyRvFacilityData.map((data, index) => (
              <GridTableRow key={`key-${index.toString()}`}>
                <GridTableItem setPosition="center">
                  <CheckBox />
                </GridTableItem>
                <GridTableItem>{data.siteCode}</GridTableItem>
                <GridTableItem>{data.instance}</GridTableItem>
                <GridTableItem>{data.GRP}</GridTableItem>
                <GridTableItem>{data.DBID}</GridTableItem>
                <GridTableItem>{data.representativeFacilityName}</GridTableItem>
              </GridTableRow>
            ))}
          </RvFacilityTable>
        </FacilityTableWrap>

        <FacilityTableWrap>
          <TableTitle>
            <Paragraph setBold>
              {useSystem === 'pro' ? 'SE事業所' : 'Com事業所'}
            </Paragraph>
          </TableTitle>
          <OtherFacilityTable>
            <GridTableRow>
              <GridTableHeaderItem setPosition="center">
                <CheckBox setBold setLabelSize="_12" label="選択" />
              </GridTableHeaderItem>
              <GridTableHeaderItem>事業所ID</GridTableHeaderItem>
              <GridTableHeaderItem>事業所名</GridTableHeaderItem>
            </GridTableRow>
            {dummySeComFacilityData.map((data, index) => (
              <GridTableRow key={`key-${index.toString()}`}>
                <GridTableItem setPosition="center">
                  <CheckBox />
                </GridTableItem>
                <GridTableItem>{data.facilityID}</GridTableItem>
                <GridTableItem>{data.facilityName}</GridTableItem>
              </GridTableRow>
            ))}
          </OtherFacilityTable>
        </FacilityTableWrap>

        <FacilityTableWrap>
          <TableTitle>
            <Paragraph setBold>他社データ取込用事業所</Paragraph>
          </TableTitle>
          <OtherFacilityTable>
            <GridTableRow>
              <GridTableHeaderItem setPosition="center">
                <CheckBox setBold setLabelSize="_12" label="選択" />
              </GridTableHeaderItem>
              <GridTableHeaderItem>事業所ID</GridTableHeaderItem>
              <GridTableHeaderItem>事業所名</GridTableHeaderItem>
            </GridTableRow>
            {dummyOtherDataImportFacilityData.map((data, index) => (
              <GridTableRow key={`key-${index.toString()}`}>
                <GridTableItem setPosition="center">
                  <CheckBox />
                </GridTableItem>
                <GridTableItem>{data.facilityID}</GridTableItem>
                <GridTableItem>{data.facilityName}</GridTableItem>
              </GridTableRow>
            ))}
          </OtherFacilityTable>
        </FacilityTableWrap>
      </StyledAppModalContent>
      <AppModalFooter>
        <AppModalFooterLeft />
        <AppModalFooterCenter>
          <Button setType="other" iconName="cancel" onClick={onDidDismiss}>
            キャンセル
          </Button>
        </AppModalFooterCenter>
        <StyledAppModalFooterRight>
          <Button setType="primary" iconName="download" onClick={onDidDismiss}>
            設定用
          </Button>
          <Button setType="success" iconName="download" onClick={onDidDismiss}>
            証書用
          </Button>
        </StyledAppModalFooterRight>
      </AppModalFooter>
    </AppModal>
  );
};

export default ContractCsvModal;
