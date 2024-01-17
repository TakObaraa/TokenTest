import Icon, { IconNameType } from '@atoms/Icon/Icon';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
import { BREAKPOINT, COLOR, SIZE } from '@styles/constant';
import { AnimatePresence, motion } from 'framer-motion';
import React, { HTMLAttributes, useMemo } from 'react';
import { createPortal } from 'react-dom';

/** 型定義 */
export type ModalType = 'default' | 'large' | 'dialog' | 'small';

type Contents = {
  isOpen?: boolean;
  onDidDismiss?: VoidFunction;
  modalTitle?: string;
  modalSubTitle?: string;
  modalTitleIcon?: IconNameType;
};

type Style = {
  modalType?: ModalType;
  setContentScroll?: boolean;
};

type AppModalProps = Contents &
  Style &
  Pick<HTMLAttributes<HTMLDivElement>, 'children'>;

/** StyledComponent */
const ModalPortal = Styled('div')({
  position: 'fixed',
  zIndex: 1000, // Todo: zIndex絶滅計画
});

const ModalWrapper = Styled(motion.div)({
  display: 'flex',
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  wordWrap: 'break-word',
  wordBreak: 'break-all',
  height: '100%',
  overflowY: 'auto',
  overscrollBehaviorY: 'contain',
  '::-webkit-scrollbar': {
    display: 'none',
  },

  '::after': {
    content: '""',
    width: '1px',
    height: 'calc(100vh + 1px)',
    display: 'flex',
  },
  '::before': {
    content: '""',
    width: '1px',
    height: 'calc(100vh + 1px)',
    display: 'flex',
  },
});

/** モーダルの背景オーバーレイ */
const BackgroundOverlay = Styled(motion.div)({
  position: 'fixed',
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',
  backgroundColor: 'black',
});

const ModalContents = Styled('div')<Style>(
  ({ setContentScroll }) => ({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: SIZE.RADIUS.DEFAULT,
    margin: `${SIZE.MARGIN._32} ${SIZE.MARGIN.AUTO}`,
    maxHeight: setContentScroll ? 'calc(100% - 64px)' : 'auto',
    width: '600px',
    height: 'fit-content',
    boxShadow: '0 5px 15px rgb(0 0 0 / 50%)',
    [BREAKPOINT.TABLET]: {
      maxHeight: setContentScroll ? 'calc(100% - 32px)' : 'auto',
      margin: `${SIZE.MARGIN._16} ${SIZE.MARGIN.AUTO}`,
    },
    [BREAKPOINT.MOBILE]: {
      maxWidth: 'calc(100% - 16px)',
      maxHeight: setContentScroll ? 'calc(100% - 16px)' : 'auto',
      margin: `${SIZE.MARGIN._8} ${SIZE.MARGIN._8}`,
    },
  }),
  ({ modalType }) =>
    modalType === 'dialog' && {
      width: '300px',
      [BREAKPOINT.MOBILE]: {
        width: '300px',
        margin: `${SIZE.MARGIN._8} ${SIZE.MARGIN.AUTO}`,
      },
    },
  ({ modalType }) =>
    modalType === 'large' && {
      width: '800px',
      [BREAKPOINT.TABLET]: {
        width: '600px',
      },
      [BREAKPOINT.MOBILE]: {
        width: 'calc(100% - 16px)',
      },
    },
  ({ modalType }) =>
    modalType === 'small' && {
      width: '300px',
      [BREAKPOINT.MOBILE]: {
        width: '300px',
        margin: `${SIZE.MARGIN._8} ${SIZE.MARGIN.AUTO}`,
      },
    },
);

const Header = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: `${SIZE.RADIUS.DEFAULT} ${SIZE.RADIUS.DEFAULT} ${SIZE.RADIUS.ZERO} ${SIZE.RADIUS.ZERO}`,
  lineHeight: SIZE.LINEHEIGHT.DEFAULT,
  padding: `${SIZE.PADDING._12} ${SIZE.PADDING._16} ${SIZE.PADDING._8} ${SIZE.PADDING._16}`,
  backgroundColor: COLOR.BACKGROUND.GRAY_50,
  borderBottom: `${SIZE.BORDER._1} solid ${COLOR.BORDER.GRAY_100}`,
});

const HeaderTitles = Styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: `${SIZE.GAP._2} ${SIZE.GAP._8}`,
  alignItems: 'center',
});
const ModalTitle = Styled(Paragraph)({
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._4,
});

const CloseIcon = Styled('button')({
  fontFamily: 'inherit',
  padding: SIZE.PADDING._0,
  opacity: '0.3', // hoverが必要なため例外的にopacityでIconの色を制御
  lineHeight: SIZE.LINEHEIGHT.RESET,
  border: SIZE.BORDER._0,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  ':hover': {
    opacity: '0.5',
  },
});

/**
 * AppModalの子要素のみで使用可能なコンポーネント
 * モダール内のメインコンテンツをラップして使用
 * setScroll,AppModal側のsetContentScrollと両方指定して使用
 */
export const AppModalContent = Styled('div')<{
  resetPadding?: boolean;
  setScroll?: boolean;
}>(({ resetPadding, setScroll }) => ({
  backgroundColor: 'white',
  padding: resetPadding ? SIZE.PADDING._0 : `${SIZE.PADDING._16}`,
  maxHeight: setScroll ? '100%' : 'auto',
  overflowY: setScroll ? 'scroll' : 'visible',
}));

/**
 * AppModalの子要素のみで使用可能なコンポーネント
 * Footerの中身についてはモーダルによって差異があるので呼び出し側で作成する
 */
export const AppModalFooter = Styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  backgroundColor: COLOR.BACKGROUND.GRAY_50,
  borderRadius: `${SIZE.RADIUS.ZERO} ${SIZE.RADIUS.ZERO} ${SIZE.RADIUS.DEFAULT} ${SIZE.RADIUS.DEFAULT}`,
  padding: `${SIZE.PADDING._8} ${SIZE.PADDING._16}`,
  borderTop: `${SIZE.BORDER._1} solid ${COLOR.BORDER.GRAY_100}`,
});
export const AppModalFooterLeft = Styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
});
export const AppModalFooterCenter = Styled('div')({
  display: 'flex',
  justifyContent: 'center',
});
export const AppModalFooterRight = Styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

/**
 * Todo モーダルのRedux対応が完了次第削除
 * StandByCloseModalAnimation
 *
 * モーダルを閉じるアニメーションの終了を待ってStateを更新させるための関数
 * アニメーション終了後にZindexを更新しないとアニメーションが見えなくなるため、
 * AppModalに渡すlayerStateはこの関数を使用して更新すること
 * isOpenをfalseに更新、モーダルが閉じるアニメーションを再生、layerをfalseに更新の流れ
 * アニメーションの終了の直前に消えるように時間調整
 */
// export const StandByCloseModalAnimation = (setLayer: VoidFunction) => {
//   setTimeout(() => {
//     setLayer();
//   }, 250);
// };

// Todo cssで対応したので絶滅させたら殺す
// スクロールバーの表示非表示によるガクッとなるやつの対策
// export const checkModalOpen = (modalStates: boolean[]) => {
//   const checkOpen = modalStates.includes(true);
//   if (checkOpen) {
//     document.body.style.overflow = 'hidden';
//   } else {
//     setTimeout(() => {
//       document.body.style.overflow = 'auto';
//     }, 250);
//   }
// };

/** ReactComponent */
const Modal: React.FC<AppModalProps> = ({
  isOpen,
  modalType,
  setContentScroll,
  onDidDismiss,
  modalTitle,
  modalTitleIcon,
  modalSubTitle,
  children,
}) => {
  const mount = useMemo(() => {
    const existSlot = document.getElementById('portal');
    return existSlot || document.body; // TODO: templateに専用の要素を確保する
  }, []);
  return isOpen
    ? createPortal(
        <ModalPortal>
          <BackgroundOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            transition={{ duration: 0.4, ease: 'linear' }}
          />

          <ModalWrapper
            initial={{ translateY: '-25%', opacity: 0.3 }}
            animate={{ translateY: '0%', opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            exit={{
              translateY: '-25%',
              opacity: 0,
              transition: { duration: 0.4, ease: 'easeInOut' },
            }}
          >
            <ModalContents
              modalType={modalType}
              setContentScroll={setContentScroll}
            >
              <Header>
                <HeaderTitles>
                  <ModalTitle setFontSize="_18">
                    {modalTitleIcon && <Icon name={modalTitleIcon} />}
                    {modalTitle}
                  </ModalTitle>
                  {modalSubTitle && (
                    <Paragraph setFontSize="_12" setColor="ash">
                      {modalSubTitle}
                    </Paragraph>
                  )}
                </HeaderTitles>
                {onDidDismiss && (
                  <CloseIcon onClick={onDidDismiss}>
                    <Icon name="cancel" setSize="_18" />
                  </CloseIcon>
                )}
              </Header>
              {children}
            </ModalContents>
          </ModalWrapper>
        </ModalPortal>,
        mount,
      )
    : null;
};

const AppModal: React.FC<AppModalProps> = ({
  isOpen = false,
  modalType = 'default',
  setContentScroll = false,
  onDidDismiss,
  modalTitle,
  modalTitleIcon,
  modalSubTitle,
  children,
}) => {
  console.log('render AppModal');
  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          modalType={modalType}
          setContentScroll={setContentScroll}
          onDidDismiss={onDidDismiss}
          modalTitle={modalTitle}
          modalTitleIcon={modalTitleIcon}
          modalSubTitle={modalSubTitle}
        >
          {children}
        </Modal>
      )}
      ;
    </AnimatePresence>
  );
};

export default AppModal;
