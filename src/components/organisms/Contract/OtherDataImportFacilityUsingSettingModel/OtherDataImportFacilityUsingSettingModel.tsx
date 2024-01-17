import Button from '@atoms/Button/Button';
import React from 'react';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '../../App/AppModal/AppModal';

type OtherDataImportFacilityUsingSettingModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  facilityStatus: boolean;
};

const OtherDataImportFacilityUsingSettingModal: React.FC<
  OtherDataImportFacilityUsingSettingModalPropsType
> = ({ isOpen, onDidDismiss, facilityStatus }) => {
  console.log('render OtherDataImportFacilityUsingSettingModal');
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
          ? 'この他社データ取込用事業所を停止しますか？'
          : 'この他社データ取込用事業所を開始しますか？'}
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
export default OtherDataImportFacilityUsingSettingModal;
