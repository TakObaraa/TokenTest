import Button from '@atoms/Button/Button';
import InputText from '@atoms/Input/InputText/InputText';
import LabelBox from '@atoms/LabelBox/LabelBox';
import SelectBox from '@atoms/SelectBox/SelectBox';
import Styled from '@emotion/styled';
import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '@organisms/App/AppModal/AppModal';
import AppModalForm, {
  AppModalFormItem,
} from '@organisms/App/AppModalForm/AppModalForm';
import { SIZE } from '@styles/constant';
import React from 'react';

export type OtherDataImportFacilityModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  useSystem: 'pro' | 'com';
  modalType: 'new' | 'edit';
};

const ContentItemTitle = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});

const OtherDataImportFacilityModal: React.FC<
  OtherDataImportFacilityModalPropsType
> = ({ isOpen, onDidDismiss, useSystem, modalType }) => {
  console.log('render OtherDataImportFacilityModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle={`他社データ取込用事業所${
        modalType === 'new' ? '追加' : '編集'
      }`}
      modalTitleIcon="facility"
    >
      <AppModalContent>
        <AppModalForm>
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="事業所名" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText placeholder="事業所名" />
          </AppModalFormItem>
          {useSystem === 'pro' && (
            <AppModalFormItem>
              <ContentItemTitle>
                <ModalContentItemLabel label="料金体系" />
                <LabelBox setLabelColor="warning" setSize="small">
                  必須
                </LabelBox>
              </ContentItemTitle>
              <SelectBox
                placeholder="料金体系"
                isSearchable
                options={[
                  { label: '病院', value: '' },
                  { label: '診療所', value: '' },
                  { label: '在宅介護', value: '' },
                ]}
              />
            </AppModalFormItem>
          )}
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="事業所種別" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <SelectBox
              placeholder="事業所種別"
              isSearchable
              isClearable={false}
              options={[
                { label: '病院', value: '1' },
                { label: '診療所', value: '1' },
                { label: '介護老人保健事業所', value: '1' },
              ]}
            />
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
export default OtherDataImportFacilityModal;
