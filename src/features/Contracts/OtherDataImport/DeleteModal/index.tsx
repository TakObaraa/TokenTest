import Button from '@atoms/Button/Button';
import React from 'react';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '../../../../components/organisms/App/AppModal/AppModal';

export type OtherDataDeleteModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  modalType: 'basic' | 'care';
};

const OtherDataDeleteModal: React.FC<OtherDataDeleteModalPropsType> = ({
  isOpen,
  onDidDismiss,
  modalType,
}) => {
  console.log('render OtherDataDeleteModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle="削除の確認"
      modalType="small"
      modalTitleIcon="document"
    >
      <AppModalContent>
        {modalType === 'care'
          ? 'ケア情報を削除します。よろしいですか？'
          : '基本情報を削除します。よろしいですか？'}
      </AppModalContent>
      <AppModalFooter>
        <AppModalFooterLeft>
          <Button iconName="delete" onClick={onDidDismiss} setType="danger">
            削除
          </Button>
        </AppModalFooterLeft>
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
export default OtherDataDeleteModal;
