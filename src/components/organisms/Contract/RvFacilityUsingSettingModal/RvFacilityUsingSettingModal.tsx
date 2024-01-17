import Button from '@atoms/Button/Button';
import CheckBox from '@atoms/CheckBox/Checkbox';
import Styled from '@emotion/styled';
import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
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

export type RvFacilityUsingSettingModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
};

const FacilityCheckItem = Styled(CheckBox)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16}`,
});

const RvFacilityUsingSettingModal: React.FC<
  RvFacilityUsingSettingModalPropsType
> = ({ isOpen, onDidDismiss }) => {
  console.log('render RvFacilityUsingSettingModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle="利用停止事業所設定"
      modalTitleIcon="facility"
    >
      <AppModalContent>
        <AppModalForm>
          <AppModalFormItem>
            <ModalContentItemLabel label="利用停止する事業所を選択" />
            <CheckBox label="U123456: さくらデイサービス" />
            <FacilityCheckItem label="abcde1 / さくらデイサービス" />
            <FacilityCheckItem label="abcde2 / さくらデイサービス" />
            <FacilityCheckItem label="abcde3 / さくらデイサービス" />
            <FacilityCheckItem label="abcde4 / さくらデイサービス" />
          </AppModalFormItem>
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
export default RvFacilityUsingSettingModal;
