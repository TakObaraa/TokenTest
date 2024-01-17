import Button from '@atoms/Button/Button';
import Styled from '@emotion/styled';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '@organisms/App/AppModal/AppModal';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { COLOR } from '@styles/constant';
import React from 'react';

export type FacilityDetailModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  onEdit: VoidFunction;
  facilityType: 'er' | 'rv' | 'seCom' | 'other';
  useSystem: 'pro' | 'com';
};
const ErFacilityDetailTable = Styled(GridTable)({
  gridTemplateColumns: '140px 1fr',
});
const StyledGridTableHeaderItem = Styled(GridTableHeaderItem)({
  backgroundColor: COLOR.BACKGROUND.GRAY_10,
});
const FacilityDetailModal: React.FC<FacilityDetailModalPropsType> = ({
  isOpen,
  onDidDismiss,
  onEdit,
  facilityType,
  useSystem,
}) => {
  console.log('render FacilityDetailModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle="事業所詳細"
      modalTitleIcon="facility"
    >
      <AppModalContent>
        <ErFacilityDetailTable>
          <GridTableRow setStriped={false}>
            <StyledGridTableHeaderItem>事業所名</StyledGridTableHeaderItem>
            <GridTableItem>盛岡ワイズ</GridTableItem>
          </GridTableRow>
          {facilityType !== 'other' && (
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>
                セキュリティID
              </StyledGridTableHeaderItem>
              <GridTableItem>MeLL11111</GridTableItem>
            </GridTableRow>
          )}
          {useSystem === 'pro' && (
            <GridTableRow setStriped={false}>
              <StyledGridTableHeaderItem>料金体系</StyledGridTableHeaderItem>
              <GridTableItem>料金体系</GridTableItem>
            </GridTableRow>
          )}
          <GridTableRow setStriped={false}>
            <StyledGridTableHeaderItem>事業所種別</StyledGridTableHeaderItem>
            <GridTableItem>事業所種別</GridTableItem>
          </GridTableRow>
          {facilityType !== 'other' && (
            <>
              <GridTableRow setStriped={false}>
                <StyledGridTableHeaderItem>家族連携</StyledGridTableHeaderItem>
                <GridTableItem>
                  {useSystem === 'pro' && '併用'}
                  {useSystem === 'com' && '利用しない'}
                </GridTableItem>
              </GridTableRow>
              <GridTableRow setStriped={false}>
                <StyledGridTableHeaderItem>
                  事業所管理者名
                </StyledGridTableHeaderItem>
                <GridTableItem>理事長太郎</GridTableItem>
              </GridTableRow>
              <GridTableRow setStriped={false}>
                <StyledGridTableHeaderItem>住所</StyledGridTableHeaderItem>
                <GridTableItem>020-0834 岩手県盛岡市永井17地割</GridTableItem>
              </GridTableRow>
              <GridTableRow setStriped={false}>
                <StyledGridTableHeaderItem>電話番号</StyledGridTableHeaderItem>
                <GridTableItem>019-604-0753</GridTableItem>
              </GridTableRow>
              <GridTableRow setStriped={false}>
                <StyledGridTableHeaderItem>FAX番号</StyledGridTableHeaderItem>
                <GridTableItem>019-604-0754</GridTableItem>
              </GridTableRow>
              <GridTableRow setStriped={false}>
                <StyledGridTableHeaderItem>
                  個人用メールアドレス
                </StyledGridTableHeaderItem>
                {/* 個人用メールアドレス or 共有用メールアドレス */}
                <GridTableItem>TTRiji@hospwise.hogemail.com</GridTableItem>
              </GridTableRow>
            </>
          )}
        </ErFacilityDetailTable>
      </AppModalContent>
      <AppModalFooter>
        <AppModalFooterLeft>
          {/*
          onErEdit
          onRvEdit
          onSeComEdit
          onOtherEdit
   */}
          <Button
            iconName="edit"
            onClick={onEdit}
            // () => {
            //   console.log(' FacilityDetailModalおした？');
            //   console.log(' facilityType', facilityType);
            //   switch (facilityType) {
            //     case 'er':
            //       console.log(' onErEdit', onErEdit);
            //       return onErEdit;
            //       break;
            //     case 'rv':
            //       return onRvEdit;
            //       break;
            //     case 'seCom':
            //       return onSeComEdit;
            //       break;
            //     case 'other':
            //       return onOtherEdit;
            //       break;
            //     default:
            //       return console.log(' FacilityDetailModal edit');
            //   }
            // }}
            setType="other"
          >
            編集
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
export default FacilityDetailModal;
