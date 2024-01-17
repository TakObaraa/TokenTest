import Button from '@atoms/Button/Button';
import InputText from '@atoms/Input/InputText/InputText';
import LabelBox from '@atoms/LabelBox/LabelBox';
import Styled from '@emotion/styled';
import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
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

export type FeeStructureSettingEditModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  modalType: 'new' | 'edit';
  onDelete: VoidFunction;
};

const ContentItemTitle = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});

const FeeStructureSettingEditModal: React.FC<
  FeeStructureSettingEditModalPropsType
> = ({ isOpen, onDidDismiss, modalType, onDelete }) => {
  console.log('render FeeStructureSettingModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle={modalType === 'new' ? '料金体系 追加' : '料金体系 編集'}
      modalTitleIcon="category"
    >
      <AppModalContent>
        <AppModalForm>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="料金体系" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText placeholder="料金体系" />
          </AppModalFormItem>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="金額(円)" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText placeholder="金額(円)" />
          </AppModalFormItem>
        </AppModalForm>
      </AppModalContent>
      <AppModalFooter>
        <AppModalFooterLeft>
          {modalType === 'edit' && (
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
          <Button iconName="check" onClick={onDidDismiss} setType="primary">
            登録
          </Button>
        </AppModalFooterRight>
      </AppModalFooter>
    </AppModal>
  );
};
export default FeeStructureSettingEditModal;
