import Button from '@atoms/Button/Button';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
import ListTexts from '@molecules/ListTexts/ListTexts';
import { SIZE } from '@styles/constant';
import React from 'react';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '../../App/AppModal/AppModal';

export type OtherDataImportConfirmModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
};
/** StyledComponent */
const ConfirmText = Styled('div')({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const ConfirmImportCsvList = Styled('div')({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
/** ReactComponent */
const OtherDataImportConfirmModal: React.FC<
  OtherDataImportConfirmModalPropsType
> = ({ isOpen, onDidDismiss }) => {
  console.log('render OtherDataImportConfirmModal');
  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle="CSVファイル取込の確認"
      modalTitleIcon="document"
    >
      <AppModalContent>
        <ConfirmText>
          <Paragraph>
            以下のCSVファイルを取り込みます。よろしいですか？
          </Paragraph>
        </ConfirmText>
        <ConfirmImportCsvList>
          <Paragraph setBold>【基本情報】</Paragraph>
          <ListTexts texts={[{ text: 'xrgcy_kihon.csv' }]} />
        </ConfirmImportCsvList>
        <ConfirmImportCsvList>
          <Paragraph setBold>【ケア記録】</Paragraph>
          <ListTexts texts={[{ text: 'xrgcy__care-record-1.csv' }]} />
        </ConfirmImportCsvList>
      </AppModalContent>
      <AppModalFooter>
        <AppModalFooterLeft />
        <AppModalFooterCenter>
          <Button iconName="cancel" onClick={onDidDismiss} setType="other">
            閉じる
          </Button>
        </AppModalFooterCenter>
        <AppModalFooterRight>
          <Button iconName="check" onClick={onDidDismiss} setType="primary">
            CSVファイル取込
          </Button>
        </AppModalFooterRight>
      </AppModalFooter>
    </AppModal>
  );
};
export default OtherDataImportConfirmModal;
