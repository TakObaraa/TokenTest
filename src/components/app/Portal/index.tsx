import React, { useMemo } from 'react';
import { createPortal } from 'react-dom';

type BaseProps = {
  portalId?: string;
  isOpen?: boolean;
  children: React.ReactNode;
};

const Portal: React.FC<BaseProps> = ({
  portalId = 'app-portal',
  children,
  isOpen,
}) => {
  const mount = useMemo(
    () => document.getElementById(portalId) || document.body,
    [],
  );
  return isOpen ? createPortal(children, mount) : null;
};

export default Portal;
