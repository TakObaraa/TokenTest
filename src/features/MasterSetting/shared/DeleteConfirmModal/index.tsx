import Button from '@atoms/Button/Button';
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

export type DeleteConfirmModalPropsType = {
  isOpen: boolean;
  layer?: number;
  onDidDismiss: VoidFunction;
  message: string;
  onDelete: () => Promise<void>;
};

const DeleteConfirmModal: React.FC<DeleteConfirmModalPropsType> = memo(
  ({ isOpen, onDidDismiss, message, onDelete }) => {
    console.log('render DeleteConfirmModal');
    return (
      <AppModal
        isOpen={isOpen}
        onDidDismiss={onDidDismiss}
        modalTitle="削除の確認"
        modalType="dialog"
        modalTitleIcon="delete"
      >
        <AppModalContent>
          <Paragraph>{message}</Paragraph>
        </AppModalContent>
        <AppModalFooter>
          <AppModalFooterLeft>
            <Button iconName="delete" setType="danger" onClick={onDelete}>
              削除
            </Button>
          </AppModalFooterLeft>
          <AppModalFooterCenter />
          <AppModalFooterRight>
            <Button iconName="cancel" onClick={onDidDismiss} setType="other">
              キャンセル
            </Button>
          </AppModalFooterRight>
        </AppModalFooter>
      </AppModal>
    );
  },
);

export default DeleteConfirmModal;
