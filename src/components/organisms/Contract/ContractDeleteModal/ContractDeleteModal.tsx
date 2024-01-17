import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import CheckBox from '@atoms/CheckBox/Checkbox';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
import { SIZE } from '@styles/constant';
import React, { useState } from 'react';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '../../App/AppModal/AppModal';

type ContractDeleteModalProps = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
};

const ConfirmCheck = Styled(AppModalContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._16,
});

const ContractDeleteModal: React.FC<ContractDeleteModalProps> = ({
  isOpen,
  onDidDismiss,
}) => {
  console.log('render ContractDeleteModal');
  const [confirmChecked, setConfirmChecked] = useState(false);
  // 契約稼働状況の切替
  const [contractStatus, setContractStatus] = useState<
    'familyUsing' | 'stopped' | 'using'
  >('using'); // 開発要仮State
  return (
    <AppModal
      isOpen={isOpen}
      modalTitle={contractStatus === 'stopped' ? '全利用開始' : '全利用停止'}
      modalTitleIcon="exclamationSign"
      modalType="default"
      onDidDismiss={onDidDismiss}
    >
      <ConfirmCheck>
        <Paragraph>
          {contractStatus === 'stopped'
            ? 'この契約を開始しますか？'
            : 'この契約を停止しますか？'}
        </Paragraph>
        {contractStatus === 'familyUsing' && (
          <CheckBox
            label="家族連携利用中の患者・利用者が存在しています。全患者・利用者について家族連携を削除しますがよろしいですか？"
            setColor="danger"
            setBold
            refs={{
              name: 'confirmChecked',
              onChange: async () => {
                setConfirmChecked(!confirmChecked);
              },
              onBlur: async () => {
                console.log('onBlur');
              },
              ref: () => {
                // console.log('ref');
              },
            }}
          />
        )}
        {/* 開発用切替 */}
        <ActionAnchor onClick={() => setContractStatus('using')}>
          稼働中の契約の表示(開発用切替)
        </ActionAnchor>
        <ActionAnchor onClick={() => setContractStatus('familyUsing')}>
          家族連携使用中で稼働中の契約の場合の表示(開発用切替)
        </ActionAnchor>
        <ActionAnchor onClick={() => setContractStatus('stopped')}>
          停止中の契約の表示(開発用切替)
        </ActionAnchor>
      </ConfirmCheck>
      <AppModalFooter>
        <AppModalFooterLeft>
          {(contractStatus === 'familyUsing' || contractStatus === 'using') ===
            true && (
            <Button
              setType="danger"
              iconName="stop"
              isDisable={
                contractStatus === 'familyUsing' && confirmChecked === false
              }
            >
              停止
            </Button>
          )}
          {contractStatus === 'stopped' && (
            <Button setType="other" iconName="cancel" onClick={onDidDismiss}>
              キャンセル
            </Button>
          )}
        </AppModalFooterLeft>
        <AppModalFooterCenter />
        <AppModalFooterRight>
          {(contractStatus === 'familyUsing' || contractStatus === 'using') ===
            true && (
            <Button setType="other" iconName="cancel" onClick={onDidDismiss}>
              キャンセル
            </Button>
          )}
          {contractStatus === 'stopped' && (
            <Button setType="primary" iconName="check" onClick={onDidDismiss}>
              開始
            </Button>
          )}
        </AppModalFooterRight>
      </AppModalFooter>
    </AppModal>
  );
};

export default ContractDeleteModal;
