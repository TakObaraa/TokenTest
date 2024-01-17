import Button from '@atoms/Button/Button';
import InputPassword from '@atoms/Input/InputPassword/InputPassword';
import InputText from '@atoms/Input/InputText/InputText';
import LabelBox from '@atoms/LabelBox/LabelBox';
import Styled from '@emotion/styled';
import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
import Radios from '@molecules/Radios/Radios';
import { SIZE } from '@styles/constant';
import React from 'react';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '../../App/AppModal/AppModal';
import AppModalForm, {
  AppModalFormItem,
} from '../../App/AppModalForm/AppModalForm';

export type StaffEditModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  staffStatus: boolean;
};

const ContentItemTitle = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});

const StaffEditModal: React.FC<StaffEditModalPropsType> = ({
  isOpen,
  onDidDismiss,
  staffStatus,
}) => {
  console.log('render StaffManagerEditModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle="スタッフ情報編集"
      modalTitleIcon="staffMale"
    >
      <AppModalContent>
        <AppModalForm>
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
          </AppModalFormItem>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="新パスワード" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputPassword placeholder="新パスワード" />
          </AppModalFormItem>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="新パスワード再入力" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputPassword placeholder="新パスワード再入力" />
          </AppModalFormItem>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="状況" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <Radios
              radios={[
                {
                  label: '有効',
                  defaultChecked: staffStatus === true,
                },
                {
                  label: '無効',
                  defaultChecked: staffStatus === false,
                },
              ]}
              refs={{
                name: 'staffStatus',
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
          <Button iconName="check" onClick={onDidDismiss} setType="primary">
            登録
          </Button>
        </AppModalFooterRight>
      </AppModalFooter>
    </AppModal>
  );
};
export default StaffEditModal;
