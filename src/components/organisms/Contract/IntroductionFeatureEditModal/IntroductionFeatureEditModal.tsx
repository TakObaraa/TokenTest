import Button from '@atoms/Button/Button';
import CheckBox from '@atoms/CheckBox/Checkbox';
import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
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

export type IntroductionFeatureEditModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  useSystem: 'pro' | 'com';
};
const IntroductionFeatureEditModal: React.FC<
  IntroductionFeatureEditModalPropsType
> = ({ isOpen, onDidDismiss, useSystem }) => {
  console.log('render IntroductionFeatureEditModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle="導入機能管理編集"
      modalTitleIcon="setting"
    >
      <AppModalContent>
        <AppModalForm>
          <AppModalFormItem>
            <ModalContentItemLabel label="ID-Link連携機能" />
            <CheckBox label="利用する" />
          </AppModalFormItem>
          {useSystem === 'com' && (
            <AppModalFormItem>
              <ModalContentItemLabel label="連携シート" />
              <CheckBox label="利用する" />
            </AppModalFormItem>
          )}
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
          <Button iconName="check" setType="primary" onClick={onDidDismiss}>
            登録
          </Button>
        </AppModalFooterRight>
      </AppModalFooter>
    </AppModal>
  );
};
export default IntroductionFeatureEditModal;
