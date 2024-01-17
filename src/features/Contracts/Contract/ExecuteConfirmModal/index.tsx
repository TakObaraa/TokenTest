import Button from '@atoms/Button/Button';
import { IconNameType } from '@atoms/Icon/Icon';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '@organisms/App/AppModal/AppModal';
import React from 'react';

export type ExecuteConfirmModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  modalTitleIcon: IconNameType;
  message: string;
};

const ExecuteConfirmModal: React.FC<ExecuteConfirmModalPropsType> = ({
  isOpen,
  onDidDismiss,
  modalTitleIcon,
  message,
}) => {
  console.log('render ExecuteConfirmModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle="削除の確認"
      modalType="small"
      modalTitleIcon={modalTitleIcon}
    >
      <AppModalContent>{message}</AppModalContent>
      <AppModalFooter>
        <AppModalFooterLeft>
          <Button iconName="cancel" onClick={onDidDismiss} setType="other">
            キャンセル
          </Button>
        </AppModalFooterLeft>
        <AppModalFooterCenter />
        <AppModalFooterRight>
          <Button iconName="check" setType="light" onClick={onDidDismiss}>
            実行
          </Button>
        </AppModalFooterRight>
      </AppModalFooter>
    </AppModal>
  );
};
export default ExecuteConfirmModal;
