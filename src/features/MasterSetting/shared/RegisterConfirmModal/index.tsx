import Button from '@atoms/Button/Button';
import { IconNameType } from '@atoms/Icon/Icon';
import Paragraph from '@atoms/Paragraph/Paragraph';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '@organisms/App/AppModal/AppModal';
// Todo create Test & Storybook
import React, { memo } from 'react';

export type RegisterConfirmModalPropsType = {
  isOpen: boolean;
  layer?: number;
  onDidDismiss: VoidFunction;
  message: string;
  modalTitleIcon?: IconNameType;
  onRegister: () => Promise<void>;
};

const RegisterConfirmModal: React.FC<RegisterConfirmModalPropsType> = memo(
  ({ isOpen, onDidDismiss, message, onRegister, modalTitleIcon }) => {
    console.log('render RegisterConfirmModal');
    return (
      <AppModal
        isOpen={isOpen}
        onDidDismiss={onDidDismiss}
        modalTitle="登録の確認"
        modalType="dialog"
        modalTitleIcon={modalTitleIcon}
      >
        <AppModalContent>
          <Paragraph>{message}</Paragraph>
        </AppModalContent>
        <AppModalFooter>
          <AppModalFooterLeft>
            <Button iconName="cancel" onClick={onDidDismiss} setType="other">
              キャンセル
            </Button>
          </AppModalFooterLeft>
          <AppModalFooterCenter />
          <AppModalFooterRight>
            <Button iconName="check" setType="primary" onClick={onRegister}>
              登録
            </Button>
          </AppModalFooterRight>
        </AppModalFooter>
      </AppModal>
    );
  },
);

export default RegisterConfirmModal;
