import Styled from '@emotion/styled';
import { COLOR, CONTENT_SIZE, SIZE } from '@styles/constant';
import { motion } from 'framer-motion';
// Todo 後で色々考える
import React, { HTMLAttributes, useMemo } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../Icon/Icon';

type FlashMessagePropsType = {
  onDidDismiss?: VoidFunction;
  children: React.ReactNode;
  setFlashMessageType: 'success' | 'warning' | 'error';
  isOpen: boolean;
  withModal?: boolean;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

const FlashMessageWrapper = Styled(motion.div)<{ withModal: boolean }>(
  ({ withModal }) => ({
    width: '100%',
    position: 'fixed',
    top: withModal ? '8px' : '56px',
    zIndex: withModal ? '9999' : '1',
  }),
);
const FlashMessageContents = Styled('div')<{
  alertType?: 'success' | 'warning' | 'error';
}>(
  {
    width: '100%',
  },
  ({ alertType }) => {
    switch (alertType) {
      case 'success':
        return {
          backgroundColor: `${COLOR.BACKGROUND.GREEN_200}EE`,
          border: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.GREEN_300}`,
        };
      case 'warning':
        return {
          backgroundColor: `${COLOR.BACKGROUND.YELLOW_100}EE`,
          border: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.YELLOW_300}`,
        };
      case 'error':
        return {
          backgroundColor: `${COLOR.BACKGROUND.RED_100}EE`,
          border: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.RED_300}`,
        };
      default:
        return {};
    }
  },
);
const FlashMessageBox = Styled('div')({
  // TODO: 最大横幅をpropsで渡す。モーダルのときはモーダルサイズになるよう修正
  width: '100%',
  maxWidth: CONTENT_SIZE.MIDDLE,
  display: 'flex',
  gap: SIZE.GAP._8,
  justifyContent: 'space-between',
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN.AUTO}`,
  padding: SIZE.PADDING._16,
});
const FlashMessageMessage = Styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const CloseIcon = Styled('button')({
  padding: SIZE.PADDING._0,
  lineHeight: SIZE.LINEHEIGHT.RESET,
  border: SIZE.BORDER._0,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  ':hover': {
    opacity: '0.5',
  },
});

const FlashMessage: React.FC<FlashMessagePropsType> = ({
  isOpen = false,
  setFlashMessageType = 'success',
  onDidDismiss,
  children,
  withModal = false,
}) => {
  console.log('FlashMessage');
  const mount = useMemo(() => {
    const existSlot = document.getElementById('portal');
    return existSlot || document.body; // TODO: templateに専用の要素を確保する
  }, []);
  return isOpen
    ? createPortal(
        <FlashMessageWrapper
          initial={{ translateY: '-80%' }}
          animate={{ translateY: '0%' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          withModal={withModal}
        >
          <FlashMessageContents alertType={setFlashMessageType}>
            <FlashMessageBox>
              <FlashMessageMessage>{children}</FlashMessageMessage>
              <CloseIcon onClick={onDidDismiss}>
                <Icon name="cancel" setSize="_18" setColor="gray" />
              </CloseIcon>
            </FlashMessageBox>
          </FlashMessageContents>
        </FlashMessageWrapper>,
        mount,
      )
    : null;
};

// アラートをエクスポートする
export default FlashMessage;
