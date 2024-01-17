import Button from '@atoms/Button/Button';
import CheckBox from '@atoms/CheckBox/Checkbox';
import InputPassword from '@atoms/Input/InputPassword/InputPassword';
import InputText from '@atoms/Input/InputText/InputText';
import LabelBox from '@atoms/LabelBox/LabelBox';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Radio from '@atoms/Radio/Radio';
import SelectBox from '@atoms/SelectBox/SelectBox';
import Styled from '@emotion/styled';
import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
import Radios from '@molecules/Radios/Radios';
import { SIZE } from '@styles/constant';
import React, { useState } from 'react';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '../../App/AppModal/AppModal';
import AppModalForm, {
  AppModalFormInputRowItems,
  AppModalFormItem,
} from '../../App/AppModalForm/AppModalForm';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '../../GridTable/GridTable';

const dummyRepresentativeFacilityData = [
  {
    siteCode: 'U123456',
    ins: 'W001',
    grp: 'GR01',
    dbid: '12345',
    facilityName: 'さくらデイサービス',
  },
  {
    siteCode: 'U111111',
    ins: 'W001',
    grp: 'GR01',
    dbid: '11111',
    facilityName: 'ワイズ老健',
  },
  {
    siteCode: 'U222222',
    ins: 'W001',
    grp: 'GR01',
    dbid: '22222',
    facilityName: 'ワイズ訪問看護',
  },
];

export type SeComFacilityEditModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  useSystem: 'pro' | 'com';
  seComFacilityModalType: 'edit' | 'new';
  useStaffInput?: boolean;
  useDelete?: boolean;
  proFamilySetting: boolean;
  comFamilySetting: 'none' | 'double' | 'single';
  useFacilityTypeSetting: boolean;
};

const PostCodeInput = Styled(InputText)({
  width: '60px',
});

const MailAddressSelect = Styled(SelectBox)({
  width: '190px',
});

const InstanceSelects = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
  alignItems: 'center',
});

const RepresentativeFacilityTable = Styled(GridTable)({
  gridTemplateColumns: '40px 1fr repeat(3, 65px) 1fr',
});

const ContentItemTitle = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});

const SeComFacilityEditModal: React.FC<SeComFacilityEditModalPropsType> = ({
  isOpen,
  onDidDismiss,
  useSystem,
  seComFacilityModalType,
  useStaffInput,
  useDelete,
  proFamilySetting,
  comFamilySetting,
  useFacilityTypeSetting,
}) => {
  console.log('render SeComFacilityEditModal');

  // モーダルタイトル
  const systemName = useSystem === 'pro' ? 'SE' : 'Com';
  const editType = seComFacilityModalType === 'new' ? '追加' : '編集';
  const modalTitle = `${systemName}事業所${editType}`;
  const [facilityType, setFacilityType] = useState<'seCom' | 'er' | 'rv'>(
    'seCom',
  );
  const [changeMethod, setChangeMethod] = useState<'site' | 'facility'>('site');

  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle={modalTitle}
      modalTitleIcon="facility"
    >
      <AppModalContent>
        <AppModalForm>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="事業所名" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText placeholder="事業所名" />
          </AppModalFormItem>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="セキュリティID" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText placeholder="セキュリティID" />
          </AppModalFormItem>
          {useSystem === 'pro' && (
            <AppModalFormItem>
              <ContentItemTitle>
                <ModalContentItemLabel label="料金体系" />
                <LabelBox setLabelColor="warning" setSize="small">
                  必須
                </LabelBox>
              </ContentItemTitle>
              <SelectBox
                placeholder="料金体系"
                isSearchable
                options={[
                  { label: '無料SE', value: '' },
                  { label: 'SE', value: '' },
                ]}
              />
            </AppModalFormItem>
          )}

          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="事業所種別" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <SelectBox
              placeholder="事業所種別"
              isSearchable
              isClearable={false}
              options={[
                { label: '病院', value: '1' },
                { label: '診療所', value: '1' },
                { label: '介護老人保健事業所', value: '1' },
              ]}
              refs={{
                name: 'facilityTypeSelect',
                onChange: async () => {
                  console.log('facilityTypeSelect');
                },
                onBlur: async () => {
                  console.log('facilityTypeSelect');
                },
                ref: () => {
                  console.log('facilityTypeSelect');
                },
              }}
            />
          </AppModalFormItem>

          {useSystem === 'pro' && proFamilySetting === true && (
            <AppModalFormItem>
              <ContentItemTitle>
                <ModalContentItemLabel label="家族連携" />
                <LabelBox setLabelColor="warning" setSize="small">
                  必須
                </LabelBox>
              </ContentItemTitle>
              <Radios
                radios={[
                  { label: 'なし', defaultChecked: true },
                  { label: '併用' },
                  { label: '単独' },
                ]}
                refs={{
                  name: 'family',
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
              />
            </AppModalFormItem>
          )}
          {useSystem === 'com' && comFamilySetting !== 'none' && (
            <AppModalFormItem>
              <ContentItemTitle>
                <ModalContentItemLabel label="家族連携" />
                <LabelBox setLabelColor="warning" setSize="small">
                  必須
                </LabelBox>
              </ContentItemTitle>
              <Radios
                radios={[
                  { label: '利用しない', defaultChecked: true },
                  { label: '利用する' },
                ]}
                refs={{
                  name: 'family',
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
              />
            </AppModalFormItem>
          )}

          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="事業所管理者名" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText placeholder="事業所管理者名" />
          </AppModalFormItem>

          <AppModalFormItem>
            <ModalContentItemLabel label="郵便番号" />
            <AppModalFormInputRowItems>
              <PostCodeInput placeholder="３桁" maxLength={3} />
              <span>-</span>
              <PostCodeInput placeholder="４桁" maxLength={4} />
            </AppModalFormInputRowItems>
          </AppModalFormItem>
          <AppModalFormItem>
            <ModalContentItemLabel label="都道府県" />
            <SelectBox
              placeholder="都道府県"
              isSearchable
              menuPosition="fixed"
              options={[
                { label: '和歌山県', value: '' },
                { label: '青森', value: '' },
              ]}
            />
          </AppModalFormItem>
          <AppModalFormItem>
            <ModalContentItemLabel label="住所" />
            <InputText placeholder="住所" />
          </AppModalFormItem>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="電話番号" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText placeholder="電話番号" />
          </AppModalFormItem>
          <AppModalFormItem>
            <ModalContentItemLabel label="FAX番号" />
            <InputText placeholder="FAX番号" />
          </AppModalFormItem>
          <AppModalFormItem>
            <ModalContentItemLabel label="メールアドレス" />
            <MailAddressSelect
              placeholder="メールアドレス"
              isSearchable
              menuPosition="absolute"
              options={[
                { label: '個人用メールアドレス', value: '' },
                { label: '共有用メールアドレス', value: '' },
              ]}
            />
            <InputText placeholder="メールアドレス" />
          </AppModalFormItem>

          {useStaffInput && (
            <>
              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="スタッフ名" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputText placeholder="スタッフ名" />
              </AppModalFormItem>
              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="スタッフID" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputText placeholder="スタッフID" />
                <CheckBox label="このスタッフを統括管理者にする" />
              </AppModalFormItem>
              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="パスワード" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputPassword placeholder="パスワード" />
                <ContentItemTitle>
                  <ModalContentItemLabel label="パスワード再入力" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputPassword placeholder="パスワード再入力" />
              </AppModalFormItem>
            </>
          )}
          {useFacilityTypeSetting && (
            <AppModalFormItem>
              <ContentItemTitle>
                <ModalContentItemLabel label="事業所タイプ変更" />
                <LabelBox setLabelColor="warning" setSize="small">
                  必須
                </LabelBox>
              </ContentItemTitle>
              {useSystem === 'pro' && (
                <Radios
                  radios={[
                    { label: 'SE事業所', value: 'seCom', defaultChecked: true },
                    { label: 'ER', value: 'er' },
                    { label: 'RV', value: 'rv' },
                  ]}
                  refs={{
                    name: 'facilityTypeSetting',
                    onChange: async (e) => {
                      console.log('onChange', e.target.value);
                      if (e.target.value === 'seCom') {
                        setFacilityType('seCom');
                      }
                      if (e.target.value === 'er') {
                        setFacilityType('er');
                      }
                      if (e.target.value === 'rv') {
                        setFacilityType('rv');
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
                      label: 'Com事業所',
                      value: 'seCom',
                      defaultChecked: true,
                    },
                    { label: 'ER', value: 'er' },
                    { label: 'RV', value: 'rv' },
                  ]}
                  refs={{
                    name: 'facilityTypeSetting',
                    onChange: async (e) => {
                      console.log('onChange');
                      if (e.target.value === 'seCom') {
                        setFacilityType('seCom');
                      }
                      if (e.target.value === 'er') {
                        setFacilityType('er');
                      }
                      if (e.target.value === 'rv') {
                        setFacilityType('rv');
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
            </AppModalFormItem>
          )}
          {facilityType === 'er' && (
            <AppModalFormItem>
              <CheckBox label="他社電カル" />
            </AppModalFormItem>
          )}
          {facilityType === 'rv' && (
            <AppModalFormItem>
              <ContentItemTitle>
                <ModalContentItemLabel label="変更方式" />
                <LabelBox setLabelColor="warning" setSize="small">
                  必須
                </LabelBox>
              </ContentItemTitle>
              <Radios
                radios={[
                  {
                    label: 'RVサイト追加',
                    value: 'site',
                    defaultChecked: true,
                  },
                  { label: 'RV事業所追加', value: 'facility' },
                ]}
                refs={{
                  name: 'ChangeMethod',
                  onChange: async (e) => {
                    console.log('onChange', e.target.value);
                    if (e.target.value === 'site') {
                      setChangeMethod('site');
                    }
                    if (e.target.value === 'facility') {
                      setChangeMethod('facility');
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
            </AppModalFormItem>
          )}
          {facilityType === 'rv' && changeMethod === 'site' && (
            <>
              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="サイトコード" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputText placeholder="サイトコード" />
              </AppModalFormItem>
              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="インスタンス" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InstanceSelects>
                  <Paragraph setBold>W</Paragraph>
                  <SelectBox
                    placeholder="インスタンス1"
                    options={[
                      { label: '0', value: '0' },
                      { label: '1', value: '1' },
                      { label: '2', value: '2' },
                      { label: '3', value: '3' },
                      { label: '4', value: '4' },
                      { label: '5', value: '5' },
                      { label: '6', value: '6' },
                      { label: '7', value: '7' },
                      { label: '8', value: '8' },
                      { label: '9', value: '9' },
                    ]}
                  />
                  <SelectBox
                    placeholder="インスタンス2"
                    options={[
                      { label: '0', value: '0' },
                      { label: '1', value: '1' },
                      { label: '2', value: '2' },
                      { label: '3', value: '3' },
                      { label: '4', value: '4' },
                      { label: '5', value: '5' },
                      { label: '6', value: '6' },
                      { label: '7', value: '7' },
                      { label: '8', value: '8' },
                      { label: '9', value: '9' },
                    ]}
                  />
                  <SelectBox
                    placeholder="インスタンス3"
                    options={[
                      { label: '0', value: '0' },
                      { label: '1', value: '1' },
                      { label: '2', value: '2' },
                      { label: '3', value: '3' },
                      { label: '4', value: '4' },
                      { label: '5', value: '5' },
                      { label: '6', value: '6' },
                      { label: '7', value: '7' },
                      { label: '8', value: '8' },
                      { label: '9', value: '9' },
                    ]}
                  />
                </InstanceSelects>
              </AppModalFormItem>

              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="グループ" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputText placeholder="グループ" />
              </AppModalFormItem>

              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="代表事業所名" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputText placeholder="代表事業所名" />
              </AppModalFormItem>
            </>
          )}
          {facilityType === 'rv' && changeMethod === 'facility' && (
            <AppModalFormItem>
              <ContentItemTitle>
                <ModalContentItemLabel label="代表事業所選択" />
                <LabelBox setLabelColor="warning" setSize="small">
                  必須
                </LabelBox>
              </ContentItemTitle>
              <RepresentativeFacilityTable>
                <GridTableRow>
                  <GridTableHeaderItem setPosition="center">
                    選択
                  </GridTableHeaderItem>
                  <GridTableHeaderItem>サイトコード</GridTableHeaderItem>
                  <GridTableHeaderItem>INS</GridTableHeaderItem>
                  <GridTableHeaderItem>GRP</GridTableHeaderItem>
                  <GridTableHeaderItem>DBID</GridTableHeaderItem>
                  <GridTableHeaderItem>代表事業所名</GridTableHeaderItem>
                </GridTableRow>
                {dummyRepresentativeFacilityData.map((facility, index) => (
                  <GridTableRow key={`key-${index.toString()}`}>
                    <GridTableItem setPosition="center">
                      <Radio
                        label=""
                        refs={{
                          name: 'RepresentativeFacility',
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
                    <GridTableItem>{facility.siteCode}</GridTableItem>
                    <GridTableItem>{facility.ins}</GridTableItem>
                    <GridTableItem>{facility.grp}</GridTableItem>
                    <GridTableItem>{facility.dbid}</GridTableItem>
                    <GridTableItem>{facility.facilityName}</GridTableItem>
                  </GridTableRow>
                ))}
              </RepresentativeFacilityTable>
            </AppModalFormItem>
          )}
        </AppModalForm>
      </AppModalContent>
      <AppModalFooter>
        {useDelete ? (
          <AppModalFooterLeft>
            <Button iconName="check" setType="danger" onClick={onDidDismiss}>
              削除
            </Button>
          </AppModalFooterLeft>
        ) : (
          <AppModalFooterLeft />
        )}
        <AppModalFooterCenter>
          <Button iconName="cancel" onClick={onDidDismiss} setType="other">
            閉じる
          </Button>
        </AppModalFooterCenter>
        <AppModalFooterRight>
          <Button iconName="check" setType="primary" onClick={onDidDismiss}>
            登録
          </Button>
        </AppModalFooterRight>
      </AppModalFooter>
    </AppModal>
  );
};
export default SeComFacilityEditModal;
