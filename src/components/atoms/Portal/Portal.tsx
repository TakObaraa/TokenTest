import styled from '@emotion/styled';
import React, { HTMLAttributes, useMemo } from 'react';
import { createPortal } from 'react-dom';

const Container = styled('div')({
  position: 'fixed',
  zIndex: 100,
});

type PortalPropsType = {
  open: boolean;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'children' | 'style'>;

// Todo：とりあえずclassName渡し
const Portal: React.FC<PortalPropsType> = ({
  children,
  open,
  className,
  style,
}) => {
  const mount = useMemo(() => {
    const existSlot = document.getElementById('portal');
    return existSlot || document.body; // TODO: templateに専用の要素を確保する
  }, []);
  return open
    ? createPortal(
        <Container className={className} style={style}>
          {children}
        </Container>,
        mount,
      )
    : null;
};
export default Portal;
