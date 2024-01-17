import CheckBox from '@atoms/CheckBox/Checkbox';
import InputDate from '@atoms/Input/InputDate/InputDate';
import InputText from '@atoms/Input/InputText/InputText';
import LabelBox from '@atoms/LabelBox/LabelBox';
import SelectBox from '@atoms/SelectBox/SelectBox';
import Styled from '@emotion/styled';
import Radios from '@molecules/Radios/Radios';
import AppCard from '@organisms/App/AppCard/AppCard';
import AttachFiles from '@organisms/AttachFiles/AttachFiles';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { COLOR, SIZE } from '@styles/constant';
import React from 'react';

type ContractInformationRegisterCardProps = {
  useSystem: 'pro' | 'com';
  proFamilySetting: (proFamilySetting: boolean) => void;
  setComFamilySetting: (comFamilySetting: 'none' | 'double' | 'single') => void;
};
/**  StyledComponent */
const StyledAppCard = Styled(AppCard)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '200px 1fr',
});
const StyledGridTableHeaderItem = Styled(GridTableHeaderItem)({
  display: 'flex',
  gap: SIZE.GAP._4,
  backgroundColor: COLOR.BACKGROUND.GRAY_10,
  justifyContent: 'space-between',
});
const ContractTypeItem = Styled(GridTableItem)({
  overflow: 'visible',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: SIZE.GAP._4,
});
const ContractNameItem = Styled(GridTableItem)({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._4,
  alignItems: 'flex-start',
});

const PostCodeItem = Styled(GridTableItem)({
  gap: SIZE.GAP._8,
});

const PostCodeInput = Styled(InputText)({
  width: '60px',
});

/**  ReactComponent */
const ContractInformationRegisterCard: React.FC<
  ContractInformationRegisterCardProps
> = ({ useSystem, proFamilySetting, setComFamilySetting }) => {
  console.log('render ContractInformationRegisterCard');
  return (
    <StyledAppCard cardTitle="契約情報" cardTitleIcon="facility">
      <StyledGridTable setBorder={false}>
        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>契約モード</StyledGridTableHeaderItem>
          <GridTableItem>
            {/* <Radios
              radios={[
                { label: '法人', defaultChecked: true },
                { label: '地域', defaultChecked: false },
              ]}
              disabled
              refs={{
                name: `ContractMode`,
                onChange: async () => {
                  console.log('onChange');
                },
                onBlur: async () => {
                  console.log('onBlur');
                },
                ref: () => {
                  console.log('ref');
                },
              }}
            /> */}
            {useSystem === 'pro' && '法人'}
            {useSystem === 'com' && '地域'}
          </GridTableItem>
        </GridTableRow>

        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>
            契約日
            <LabelBox setLabelColor="warning" setSize="small">
              必須
            </LabelBox>
          </StyledGridTableHeaderItem>
          <GridTableItem>
            <InputDate
              onChange={() => console.log('date')}
              placeholderText="契約日"
              value="2022-08-10"
            />
          </GridTableItem>
        </GridTableRow>

        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>
            契約名
            <LabelBox setLabelColor="warning" setSize="small">
              必須
            </LabelBox>
          </StyledGridTableHeaderItem>
          <ContractNameItem>
            <InputText placeholder="契約名" />
            <CheckBox setLabelSize="_12" label="社内アカウント" />
          </ContractNameItem>
        </GridTableRow>

        {useSystem === 'pro' && (
          <GridTableRow setStriped={false}>
            <StyledGridTableHeaderItem>
              法人種別
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </StyledGridTableHeaderItem>
            <ContractTypeItem>
              <SelectBox
                placeholder="法人種別"
                isSearchable
                isClearable={false}
                options={[
                  { label: '医療法人', value: '1' },
                  { label: '社会福祉法人', value: '1' },
                  { label: '株式会社', value: '1' },
                ]}
                refs={{
                  name: 'serviceFacilitySelect',
                  onChange: async () => {
                    console.log('serviceFacilitySelect');
                  },
                  onBlur: async () => {
                    console.log('serviceFacilitySelect');
                  },
                  ref: () => {
                    console.log('serviceFacilitySelect');
                  },
                }}
              />
            </ContractTypeItem>
          </GridTableRow>
        )}

        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>ロゴ画像</StyledGridTableHeaderItem>
          <GridTableItem>
            <AttachFiles setExtensionFileType="img" />
          </GridTableItem>
        </GridTableRow>

        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>
            家族連携
            <LabelBox setLabelColor="warning" setSize="small">
              必須
            </LabelBox>
          </StyledGridTableHeaderItem>
          <GridTableItem>
            {useSystem === 'pro' && (
              <Radios
                radios={[
                  {
                    label: '利用しない',
                    value: 0,
                    defaultChecked: true,
                  },
                  {
                    label: '利用する',
                    value: 1,
                  },
                ]}
                refs={{
                  name: 'FamilyConnectionSetting',
                  onChange: async (e) => {
                    console.log('onChange ContractRegister', e.target.value);
                    if (e.target.value === '0') {
                      proFamilySetting(false);
                    }
                    if (e.target.value === '1') {
                      proFamilySetting(true);
                    }
                  },
                  onBlur: async () => {
                    console.log('onBlur');
                  },
                  ref: () => {
                    console.log('ref');
                  },
                }}
              />
            )}
            {useSystem === 'com' && (
              <Radios
                radios={[
                  {
                    label: 'なし',
                    value: 0,
                    defaultChecked: true,
                  },
                  {
                    label: '併用',
                    value: 1,
                  },
                  {
                    label: '単独',
                    value: 2,
                  },
                ]}
                refs={{
                  name: 'contractInformationRegisterfamily',
                  onChange: async (e) => {
                    console.log('onChange ContractRegister', e.target.value);
                    if (e.target.value === '0') {
                      setComFamilySetting('none');
                    }
                    if (e.target.value === '1') {
                      setComFamilySetting('double');
                    }
                    if (e.target.value === '2') {
                      setComFamilySetting('single');
                    }
                  },
                  onBlur: async () => {
                    console.log('onBlur');
                  },
                  ref: () => {
                    console.log('ref');
                  },
                }}
              />
            )}
          </GridTableItem>
        </GridTableRow>

        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>
            契約者名
            <LabelBox setLabelColor="warning" setSize="small">
              必須
            </LabelBox>
          </StyledGridTableHeaderItem>
          <GridTableItem>
            <InputText placeholder="契約者名" />
          </GridTableItem>
        </GridTableRow>

        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>
            郵便番号
            <LabelBox setLabelColor="warning" setSize="small">
              必須
            </LabelBox>
          </StyledGridTableHeaderItem>
          <PostCodeItem>
            <PostCodeInput placeholder="３桁" maxLength={3} />
            <span>-</span>
            <PostCodeInput placeholder="４桁" maxLength={4} />
          </PostCodeItem>
        </GridTableRow>
        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>
            都道府県
            <LabelBox setLabelColor="warning" setSize="small">
              必須
            </LabelBox>
          </StyledGridTableHeaderItem>
          <GridTableItem>
            <SelectBox
              placeholder="都道府県"
              isSearchable
              menuPosition="fixed"
              options={[
                { label: '和歌山県', value: '' },
                { label: '青森', value: '' },
              ]}
            />
          </GridTableItem>
        </GridTableRow>
        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>
            住所
            <LabelBox setLabelColor="warning" setSize="small">
              必須
            </LabelBox>
          </StyledGridTableHeaderItem>
          <GridTableItem>
            <InputText placeholder="住所" />
          </GridTableItem>
        </GridTableRow>

        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>
            電話番号
            <LabelBox setLabelColor="warning" setSize="small">
              必須
            </LabelBox>
          </StyledGridTableHeaderItem>
          <GridTableItem>
            <InputText placeholder="電話番号" />
          </GridTableItem>
        </GridTableRow>
        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>FAX番号</StyledGridTableHeaderItem>
          <GridTableItem>
            <InputText placeholder="FAX番号" />
          </GridTableItem>
        </GridTableRow>
        <GridTableRow setStriped={false}>
          <StyledGridTableHeaderItem>
            代表メール
            <LabelBox setLabelColor="warning" setSize="small">
              必須
            </LabelBox>
          </StyledGridTableHeaderItem>
          <GridTableItem>
            <InputText placeholder="メールアドレス" />
          </GridTableItem>
        </GridTableRow>
      </StyledGridTable>
    </StyledAppCard>
  );
};

export default ContractInformationRegisterCard;
