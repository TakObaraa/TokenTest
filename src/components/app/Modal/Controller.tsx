import Portal from '@app/Portal';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const ModalPortal = styled('div')({
  position: 'fixed',
  zIndex: 1000,
});

const AnimateModal = styled(motion.div)({
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

const AnimateOverlay = styled(motion.div)({
  position: 'fixed',
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',
  backgroundColor: 'black',
});

type PortalProps = React.ComponentProps<typeof Portal>;

type BaseControllerProps = PortalProps & {
  // NOTE: 必要に応じて追加
  onExitAnimationComplete?: React.ComponentProps<
    typeof AnimatePresence
  >['onExitComplete'];
};

const Controller: React.FC<BaseControllerProps> = ({ children, ...props }) => (
  <AnimatePresence>
    {props.isOpen && (
      <Portal {...props}>
        <ModalPortal>
          <AnimateOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            transition={{ duration: 0.4, ease: 'linear' }}
          />
          <AnimateModal
            initial={{ translateY: '-25%', opacity: 0.3 }}
            animate={{ translateY: '0%', opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            exit={{
              translateY: '-25%',
              opacity: 0,
              transition: { duration: 0.4, ease: 'easeInOut' },
            }}
          >
            {children}
          </AnimateModal>
        </ModalPortal>
      </Portal>
    )}
  </AnimatePresence>
);

export default Controller;
