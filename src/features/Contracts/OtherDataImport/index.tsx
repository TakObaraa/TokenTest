import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import FlashMessage from '@atoms/FlashMessage/FlashMessage';
import Icon from '@atoms/Icon/Icon';
import Paragraph from '@atoms/Paragraph/Paragraph';
import styled from '@emotion/styled';
import ImportConfirmModal from '@features/Contracts/OtherDataImport/ConfirmModal';
import DeleteModal from '@features/Contracts/OtherDataImport/DeleteModal';
import ImportCard from '@features/Contracts/OtherDataImport/ImportCard';
import ImportLogCard from '@features/Contracts/OtherDataImport/ImportLogCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { SIZE } from '@styles/constant';
import MainTemplate from '@templates/MainTemplate/MainTemplate';
import React, { useState } from 'react';

/** StyledComponent */
const ContentHeader = styled('div')({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
  display: 'flex',
  justifyContent: 'space-between',
});
const ContentTitle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._4,
});
const FacilityNameTable = styled(GridTable)({
  gridTemplateColumns: '100px 1fr',
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const ImportArea = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  margin: `${SIZE.MARGIN._16} ${SIZE.MARGIN._0} ${SIZE.MARGIN._32} ${SIZE.MARGIN._0}`,
});

/** ReactComponent */
const OtherDataImport: React.FC = () => {
  // データ取り込み確認モーダル
  const [showOtherDataImportConfirmModal, setShowOtherDataImportConfirmModal] =
    useState(false);
  // 取り込みデータ削除確認モーダル
  const [showOtherDataDeleteModal, setShowOtherDataDeleteModal] =
    useState(false);
  const [modalType, setModalType] = useState<'basic' | 'care'>('basic');

  // フラッシュメッセージ
  const [flashMessage, setFlashMessage] = useState(false);
  const [flashMessageType, setFlashMessageType] = useState<'success' | 'error'>(
    'success',
  ); // 開発用仮State
  const [csvImportError, setCsvImportError] = useState(false); // 開発用仮State

  console.log('render StaffManager');
  return (
    <MainTemplate>
      <ContentHeader>
        <FlashMessage
          setFlashMessageType={
            flashMessageType === 'success' ? 'success' : 'error'
          }
          isOpen={flashMessage}
          onDidDismiss={() => setFlashMessage(false)}
        >
          {flashMessageType === 'success' && (
            <Paragraph>
              xrgcy_kihon.csvの取り込みに成功しました。
              <br />
              xrgcy__care-record-1.csvの取り込みに成功しました。
            </Paragraph>
          )}
          {flashMessageType === 'error' && (
            <Paragraph>
              xrgcy__care-record-1.csvの取り込みに失敗しました。ログを確認してください。
            </Paragraph>
          )}
        </FlashMessage>
        <ContentTitle>
          <Icon name="entry" setSize="_24" />
          <Paragraph setFontSize="_24">他社データ取込</Paragraph>
        </ContentTitle>
      </ContentHeader>
      <FacilityNameTable>
        <GridTableRow>
          <GridTableHeaderItem>事業所ID</GridTableHeaderItem>
          <GridTableHeaderItem>事業所名</GridTableHeaderItem>
        </GridTableRow>
        <GridTableRow setStriped={false}>
          <GridTableItem>
            <Paragraph setFontSize="_16" setBold>
              abcde
            </Paragraph>
          </GridTableItem>
          <GridTableItem>
            <Paragraph setFontSize="_16" setBold>
              ワイズ病院(データ移行用)
            </Paragraph>
          </GridTableItem>
        </GridTableRow>
      </FacilityNameTable>
      <ImportCard
        onBasicDelete={() => {
          setShowOtherDataDeleteModal(true);
          setModalType('basic');
        }}
        onCareDelete={() => {
          setShowOtherDataDeleteModal(true);
          setModalType('care');
        }}
        csvImportError={csvImportError}
      />
      <ImportArea>
        <Button
          iconName="check"
          onClick={() => setShowOtherDataImportConfirmModal(true)}
        >
          CSVファイル取込
        </Button>
      </ImportArea>
      <ImportLogCard />

      {/* モーダル */}
      <DeleteModal
        isOpen={showOtherDataDeleteModal}
        onDidDismiss={() => setShowOtherDataDeleteModal(false)}
        modalType={modalType}
      />
      <ImportConfirmModal
        isOpen={showOtherDataImportConfirmModal}
        onDidDismiss={() => setShowOtherDataImportConfirmModal(false)}
      />

      {/* 開発用切替 */}
      <ActionAnchor onClick={() => setCsvImportError(!csvImportError)}>
        CSV取込エラー表示/非表示
      </ActionAnchor>
      <ActionAnchor
        onClick={() => {
          setFlashMessage(true);
          setFlashMessageType('success');
        }}
      >
        フラッシュメッセージ(成功)のサンプル
      </ActionAnchor>
      <ActionAnchor
        onClick={() => {
          setFlashMessage(true);
          setFlashMessageType('error');
        }}
      >
        フラッシュメッセージ(エラー)のサンプル
      </ActionAnchor>
    </MainTemplate>
  );
};

export default OtherDataImport;
