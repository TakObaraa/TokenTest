import Button from '@atoms/Button/Button';
import CheckBox from '@atoms/CheckBox/Checkbox';
import InputDate from '@atoms/Input/InputDate/InputDate';
import InputText from '@atoms/Input/InputText/InputText';
import LabelBox from '@atoms/LabelBox/LabelBox';
import SelectBox from '@atoms/SelectBox/SelectBox';
import Styled from '@emotion/styled';
import AttachedFile from '@molecules/AttachedFile/AttachedFile';
import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
import Radios from '@molecules/Radios/Radios';
import { COLOR, SIZE } from '@styles/constant';
import React from 'react';
import DummyImage from '../../../../assets/img/dummy.png';
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
import AttachedFiles from '../../AttachedFiles/AttachedFiles';

export type ContractInformationEditModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  onClick: React.ComponentProps<'button'>['onClick'];
  useSystem: 'pro' | 'com';
};

const PostCodeInput = Styled(InputText)({
  width: '60px',
});

const ContentItemTitle = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});

const ContractInformationEditModal: React.FC<
  ContractInformationEditModalPropsType
> = ({ isOpen, onDidDismiss, onClick, useSystem }) => {
  console.log('render ContractInformationEditModal');

  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle="契約情報編集"
      modalTitleIcon="facility"
    >
      <AppModalContent>
        <AppModalForm>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="契約モード" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <Radios
              radios={[
                { label: '法人', defaultChecked: useSystem === 'pro' },
                { label: '地域', defaultChecked: useSystem === 'com' },
              ]}
              disabled
              refs={{
                name: 'ContractMode',
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
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="契約日" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputDate
              onChange={() => console.log('date')}
              placeholderText="契約日"
              value="2022-08-10"
              disabled
            />
          </AppModalFormItem>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="契約名" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText placeholder="契約名" />
            <CheckBox label="社内アカウント" />
          </AppModalFormItem>
          {useSystem === 'pro' && (
            <AppModalFormItem>
              <ContentItemTitle>
                <ModalContentItemLabel label="法人種別" />
                <LabelBox setLabelColor="warning" setSize="small">
                  必須
                </LabelBox>
              </ContentItemTitle>
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
            </AppModalFormItem>
          )}
          <AppModalFormItem>
            <ModalContentItemLabel label="ロゴ画像" />
            {/* <AttachFiles setExtensionFileType="img" /> */}
            <AttachedFiles>
              <AttachedFile
                style={{
                  borderBottom: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
                }}
                src={DummyImage}
                fileName="添付済みの画像.jpg"
                onDelete={onClick}
              />
            </AttachedFiles>{' '}
          </AppModalFormItem>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="家族連携" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            {useSystem === 'pro' && (
              <Radios
                radios={[
                  { label: '利用しない', defaultChecked: true },
                  { label: '利用する' },
                ]}
                refs={{
                  name: 'familyConnectionSetting',
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
            )}
            {useSystem === 'com' && (
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
            )}
          </AppModalFormItem>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="契約者名" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText placeholder="契約者名" />
          </AppModalFormItem>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="郵便番号" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <AppModalFormInputRowItems>
              <PostCodeInput placeholder="３桁" maxLength={3} />
              <span>-</span>
              <PostCodeInput placeholder="４桁" maxLength={4} />
            </AppModalFormInputRowItems>
          </AppModalFormItem>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="都道府県" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
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
            <ContentItemTitle>
              <ModalContentItemLabel label="住所" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
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
            <ContentItemTitle>
              <ModalContentItemLabel label="代表メール" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText placeholder="メールアドレス" />
          </AppModalFormItem>
        </AppModalForm>
      </AppModalContent>
      <AppModalFooter>
        <AppModalFooterLeft />
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
export default ContractInformationEditModal;
