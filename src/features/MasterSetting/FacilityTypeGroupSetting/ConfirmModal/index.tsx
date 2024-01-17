import Button from '@atoms/Button/Button';
import { IconNameType } from '@atoms/Icon/Icon';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
  ModalType,
} from '@organisms/App/AppModal/AppModal';
// Todo create Test & Storybook
// テキストを確認させるだけのモーダル キャンセルはないので確認時のアクションは発火させない
import React from 'react';

export type ConfirmModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  modalTitle: string;
  setIcon: IconNameType;
  message: string;
  modalType?: Extract<ModalType, 'default' | 'dialog'>;
};

const StyledText = Styled(Paragraph)({
  whiteSpace: 'pre-wrap',
});

const ConfirmModal: React.FC<ConfirmModalPropsType> = ({
  isOpen,
  onDidDismiss,
  setIcon,
  modalTitle,
  message,
  modalType,
}) => {
  console.log('render ConfirmModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle={modalTitle}
      modalTitleIcon={setIcon}
      modalType={modalType}
    >
      <AppModalContent>
        <StyledText>{message}</StyledText>
      </AppModalContent>
      <AppModalFooter>
        <AppModalFooterLeft />
        <AppModalFooterCenter>
          <Button iconName="cancel" onClick={onDidDismiss} setType="other">
            閉じる
          </Button>
        </AppModalFooterCenter>
        <AppModalFooterRight />
      </AppModalFooter>
    </AppModal>
  );
};

export default ConfirmModal;
