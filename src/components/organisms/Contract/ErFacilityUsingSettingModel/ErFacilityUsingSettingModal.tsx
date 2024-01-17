import Button from '@atoms/Button/Button';
import React from 'react';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '../../App/AppModal/AppModal';

type ErFacilityUsingSettingModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  facilityStatus: boolean;
};

const ErFacilityUsingSettingModal: React.FC<
  ErFacilityUsingSettingModalPropsType
> = ({ isOpen, onDidDismiss, facilityStatus }) => {
  console.log('render ErFacilityUsingSettingModal');

  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle={facilityStatus ? '利用停止の確認' : '利用開始の確認'}
      modalType="small"
      modalTitleIcon="facility"
    >
      <AppModalContent>
        {facilityStatus
          ? 'このER事業所を停止しますか？'
          : 'このER事業所を開始しますか？'}
      </AppModalContent>
      <AppModalFooter>
        <AppModalFooterLeft>
          {facilityStatus === true && (
            <Button iconName="ban" setType="danger" onClick={onDidDismiss}>
              停止
            </Button>
          )}
        </AppModalFooterLeft>
        <AppModalFooterCenter>
          <Button iconName="cancel" onClick={onDidDismiss} setType="other">
            閉じる
          </Button>
        </AppModalFooterCenter>
        {facilityStatus === false && (
          <AppModalFooterRight>
            <Button iconName="check" setType="primary" onClick={onDidDismiss}>
              開始
            </Button>
          </AppModalFooterRight>
        )}
      </AppModalFooter>
    </AppModal>
  );
};
export default ErFacilityUsingSettingModal;
