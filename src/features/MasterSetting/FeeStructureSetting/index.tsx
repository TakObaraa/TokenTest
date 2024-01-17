import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import Styled from '@emotion/styled';
import AppCard from '@organisms/App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import SettingTemplate from '@templates/SettingTemplate/SettingTemplate';
import React, { useState } from 'react';
import DeleteConfirmModal from '../shared/DeleteConfirmModal';
import FeeStructureSettingEditModal from './FeeStructureSettingEditModal';

const dummyFeeStructureSettingData = [
  {
    feeStructureName: '病院',
    fee: '99,999,999',
  },
  {
    feeStructureName: '診療所・介護施設',
    fee: '10,000',
  },
  {
    feeStructureName: '在宅介護サービス',
    fee: '10,000',
  },
];

/** StyledComponent */
const StyledSettingTemplate = Styled(SettingTemplate)({
  width: '100%',
});
const FeeStructureTable = Styled(GridTable)({
  gridTemplateColumns: '1fr 80px 60px',
});
/** ReactComponent */
const FeeStructureSetting: React.FC = () => {
  const [
    showFeeStructureSettingEditModal,
    setShowFeeStructureSettingEditModal,
  ] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

  const [modalType, setModalType] = useState<'new' | 'edit'>('new');

  console.log('render FeeStructureSetting');
  return (
    <StyledSettingTemplate
      activeMenu="feeStructure"
      pageTitle="料金体系管理"
      headerRight={
        <Button
          iconName="entry"
          onClick={() => {
            setModalType('new');
            setShowFeeStructureSettingEditModal(true);
          }}
        >
          料金体系追加
        </Button>
      }
    >
      <AppCard cardTitle="料金体系一覧" cardTitleIcon="category">
        <FeeStructureTable setBorder={false}>
          <GridTableRow>
            <GridTableHeaderItem>料金体系名</GridTableHeaderItem>
            <GridTableHeaderItem setPosition="right" setDirection="row">
              金額
            </GridTableHeaderItem>
            <GridTableHeaderItem setPosition="center">編集</GridTableHeaderItem>
          </GridTableRow>
          {dummyFeeStructureSettingData.map((item, index) => (
            <GridTableRow key={`key-${index.toString()}`}>
              <GridTableItem>{item.feeStructureName}</GridTableItem>
              <GridTableItem setPosition="right" setDirection="row">
                {item.fee}
              </GridTableItem>
              <GridTableItem setPosition="center">
                <ActionAnchor
                  onClick={() => {
                    setModalType('edit');
                    setShowFeeStructureSettingEditModal(true);
                  }}
                  setFontSize="_12"
                >
                  編集
                </ActionAnchor>
              </GridTableItem>
            </GridTableRow>
          ))}
        </FeeStructureTable>
      </AppCard>
      <FeeStructureSettingEditModal
        isOpen={showFeeStructureSettingEditModal}
        onDidDismiss={() => setShowFeeStructureSettingEditModal(false)}
        modalType={modalType}
        onDelete={() => {
          setShowDeleteConfirmModal(true);
        }}
      />
      <DeleteConfirmModal
        isOpen={showDeleteConfirmModal}
        onDidDismiss={() => {
          setShowDeleteConfirmModal(false);
        }}
        message="料金体系を削除します。"
        onDelete={async () => console.log('onDelete')}
      />
    </StyledSettingTemplate>
  );
};

export default FeeStructureSetting;
