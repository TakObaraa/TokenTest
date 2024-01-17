import Button from '@atoms/Button/Button';
import InputText from '@atoms/Input/InputText/InputText';
import LabelBox from '@atoms/LabelBox/LabelBox';
import SelectBox from '@atoms/SelectBox/SelectBox';
import Styled from '@emotion/styled';
import IconText from '@molecules/IconText/IconText';
import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
import Radios from '@molecules/Radios/Radios';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '@organisms/App/AppModal/AppModal';
import AppModalForm, {
  AppModalFormItem,
} from '@organisms/App/AppModalForm/AppModalForm';
import { SIZE } from '@styles/constant';
import React from 'react';

export type FacilityTypeEditModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  modalType: 'new' | 'edit';
  onDelete: VoidFunction;
  onRegister: VoidFunction;
  facilityTypeStatus: boolean;
};

const ContentItemTitle = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});

const FacilityTypeEditModal: React.FC<FacilityTypeEditModalPropsType> = ({
  isOpen,
  onDidDismiss,
  modalType,
  onDelete,
  onRegister,
  facilityTypeStatus,
}) => {
  console.log('render FacilityTypeEditModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle={modalType === 'new' ? '事業所種別 登録' : '事業所種別 編集'}
      modalTitleIcon="category"
    >
      <AppModalContent>
        <AppModalForm>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="事業所種別グループ名" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <SelectBox
              options={[
                { label: '医療機関・薬局', value: '0' },
                { label: '事業所サービス', value: '1' },
                { label: '居宅サービス', value: '2' },
                { label: '居住系サービス', value: '3' },
                { label: '障がいサービス', value: '4' },
                { label: '自治体系', value: '5' },
                { label: 'その他', value: '6' },
                { label: 'テストサービス', value: '7' },
              ]}
              isClearable={false}
              placeholder="事業所種別グループ名"
            />
          </AppModalFormItem>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="事業所種別名" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText placeholder="事業所種別名" />
          </AppModalFormItem>
          {modalType === 'edit' && (
            <AppModalFormItem>
              <ContentItemTitle>
                <ModalContentItemLabel label="状態" />
                <LabelBox setLabelColor="warning" setSize="small">
                  必須
                </LabelBox>
              </ContentItemTitle>
              <Radios
                radios={[
                  {
                    label: '無効',
                    defaultChecked: facilityTypeStatus === false,
                  },
                  {
                    label: '有効',
                    defaultChecked: facilityTypeStatus === true,
                  },
                ]}
                refs={{
                  name: 'contractTypeStatus',
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
              <IconText
                setIconColor="ash"
                setFontColor="ash"
                iconName="exclamationSign"
              >
                状態を「有効」にして登録すると、ユーザーの環境に反映されます。
              </IconText>
            </AppModalFormItem>
          )}
        </AppModalForm>
      </AppModalContent>
      <AppModalFooter>
        <AppModalFooterLeft>
          {modalType === 'edit' && facilityTypeStatus === false && (
            <Button iconName="delete" onClick={onDelete} setType="danger">
              削除
            </Button>
          )}
        </AppModalFooterLeft>
        <AppModalFooterCenter>
          <Button iconName="cancel" onClick={onDidDismiss} setType="other">
            閉じる
          </Button>
        </AppModalFooterCenter>
        <AppModalFooterRight>
          <Button
            iconName="check"
            onClick={modalType === 'new' ? onDidDismiss : onRegister}
            setType="primary"
          >
            登録
          </Button>
        </AppModalFooterRight>
      </AppModalFooter>
    </AppModal>
  );
};
export default FacilityTypeEditModal;
