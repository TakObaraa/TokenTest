import Button from '@atoms/Button/Button';
import CheckBox from '@atoms/CheckBox/Checkbox';
import InputPassword from '@atoms/Input/InputPassword/InputPassword';
import InputText from '@atoms/Input/InputText/InputText';
import LabelBox from '@atoms/LabelBox/LabelBox';
import SelectBox from '@atoms/SelectBox/SelectBox';
import Styled from '@emotion/styled';
import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
import Radios from '@molecules/Radios/Radios';
import { SIZE } from '@styles/constant';
import React, { useCallback } from 'react';
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
// import InputDate from '@atoms/Input/InputDate/InputDate';

export type ErFacilityEditModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  useSystem: 'pro' | 'com';
  useStaffInput: boolean;
  erFacilityModalType: 'new' | 'edit';
  useDelete?: boolean;
  proFamilySetting: boolean;
  comFamilySetting: 'none' | 'double' | 'single';
};

const PostCodeInput = Styled(InputText)({
  width: '60px',
});

const MailAddressSelect = Styled(SelectBox)({
  width: '190px',
});

const ContentItemTitle = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});

const ErFacilityEditModal: React.FC<ErFacilityEditModalPropsType> = ({
  isOpen,
  onDidDismiss,
  useSystem,
  useStaffInput,
  erFacilityModalType,
  useDelete,
  proFamilySetting,
  comFamilySetting,
}) => {
  console.log('render ErFacilityEditModal');

  const modalTitle = useCallback(
    (modalType: ErFacilityEditModalPropsType['erFacilityModalType']) => {
      if (modalType === 'new') {
        return 'ER事業所追加';
      }
      if (modalType === 'edit') {
        return 'ER事業所編集';
      }
      return 'ER事業所追加';
    },
    [],
  );

  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle={modalTitle(erFacilityModalType)}
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
            <CheckBox label="他社電カル" />
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
                menuPosition="fixed"
                options={[
                  { label: '病院', value: '' },
                  { label: '診療所', value: '' },
                  { label: '在宅介護', value: '' },
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
              // menuPosition="absolute"
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
          {/* <AppModalFormItem>
              <ModalContentItemLabel label="登録日" />
              <InputDate
                onChange={() => {
                  console.log('0000/00/00');
                }}
                placeholderText="登録日"
                selected={new Date()}
              />
            </AppModalFormItem> */}
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
export default ErFacilityEditModal;
