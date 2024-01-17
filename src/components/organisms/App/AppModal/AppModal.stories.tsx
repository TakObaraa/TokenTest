import { PropsOf } from '@emotion/react';
import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from './AppModal';

type AppModalPropsType = PropsOf<typeof AppModal>;

const ContentText = styled('p')({
  margin: '0 0 16px',
});

export default ({
  title: 'Organisms/App/AppModal',
  component: AppModal,
} as Meta);

export const Default: Story<AppModalPropsType> = ({
  modalTitle,
  modalTitleIcon,
}) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="story-item" data-test-id="sb-dismiss">
      <AppModal
        isOpen={showModal}
        onDidDismiss={() => {
          setShowModal(false);
        }}
        modalTitle={modalTitle}
        modalTitleIcon={modalTitleIcon}
      >
        <AppModalContent>
          <ContentText>
            コンテンツ部分は`AppModalContent`をインポートして使用
          </ContentText>
          <ContentText>
            フッター部分は`AppModalFooter`,`AppModalFooterLeft`,`AppModalFooterCenter`,`AppModalRight`をインポートして使用
          </ContentText>
        </AppModalContent>
        <AppModalFooter>
          <AppModalFooterLeft />
          <AppModalFooterCenter>
            <p>閉じるボタンとかを設置</p>
          </AppModalFooterCenter>
          <AppModalFooterRight />
        </AppModalFooter>
      </AppModal>
    </div>
  );
};

Default.args = {
  modalTitle: 'モーダルタイトル',
  modalTitleIcon: 'alert',
};
