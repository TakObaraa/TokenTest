import Button from '@atoms/Button/Button';
import InputText from '@atoms/Input/InputText/InputText';
import LabelBox from '@atoms/LabelBox/LabelBox';
import Styled from '@emotion/styled';
import IconText from '@molecules/IconText/IconText';
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

export type ContractTypeEditModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  modalType: 'new' | 'edit';
  onRegister: VoidFunction;
  onDelete: VoidFunction;
  contractTypeStatus: boolean;
};

const ContentItemTitle = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});

const ContractTypeEditModal: React.FC<ContractTypeEditModalPropsType> = ({
  isOpen,
  onDidDismiss,
  modalType,
  onRegister,
  onDelete,
  contractTypeStatus,
}) => {
  console.log('render ContractTypeEditModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle={modalType === 'new' ? '法人種別 登録' : '法人種別 編集'}
      modalTitleIcon="category"
    >
      <AppModalContent>
        <AppModalForm>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="法人種別名" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText placeholder="法人種別名" />
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
                    defaultChecked: contractTypeStatus === false,
                  },
                  {
                    label: '有効',
                    defaultChecked: contractTypeStatus === true,
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
          {modalType === 'edit' && contractTypeStatus === false && (
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
          <Button iconName="check" setType="primary" onClick={onRegister}>
            登録
          </Button>
        </AppModalFooterRight>
      </AppModalFooter>
    </AppModal>
  );
};
export default ContractTypeEditModal;
