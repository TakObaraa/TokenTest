import Button from '@atoms/Button/Button';
import React from 'react';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '../../App/AppModal/AppModal';

export type ContractRegisterErrorModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
};
const ContractRegisterErrorModal: React.FC<
  ContractRegisterErrorModalPropsType
> = ({ isOpen, onDidDismiss }) => {
  console.log('render ContractRegisterErrorModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle="登録の確認"
      modalTitleIcon="exclamationSign"
      modalType="small"
    >
      <AppModalContent>
        いずれかの事業所に統括管理者を1人は作成してください。
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
export default ContractRegisterErrorModal;
