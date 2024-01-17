import Button from '@atoms/Button/Button';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '@organisms/App/AppModal/AppModal';
import React from 'react';

type ComFacilityUsingSettingModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  facilityStatus: boolean;
};

const ComFacilityUsingSettingModal: React.FC<
  ComFacilityUsingSettingModalPropsType
> = ({ isOpen, onDidDismiss, facilityStatus }) => {
  console.log('render ComFacilityUsingSettingModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle={facilityStatus ? '利用停止の確認' : '利用開始の確認'}
      modalTitleIcon="facility"
      modalType="small"
    >
      <AppModalContent>
        {facilityStatus
          ? 'このCom事業所を停止しますか？'
          : 'このCom事業所を開始しますか？'}
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
export default ComFacilityUsingSettingModal;
