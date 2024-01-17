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

export type FacilityTypeGroupEditModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  modalType: 'new' | 'edit';
  onDelete: VoidFunction;
};

const ContentItemTitle = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});

const FacilityTypeGroupEditModal: React.FC<
  FacilityTypeGroupEditModalPropsType
> = ({ isOpen, onDidDismiss, modalType, onDelete }) => {
  console.log('render FacilityTypeGroupEditModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle={
        modalType === 'new'
          ? '事業所種別グループ 登録'
          : '事業所種別グループ 編集'
      }
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
            <InputText placeholder="事業所種別グループ名" />
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
export default FacilityTypeGroupEditModal;
