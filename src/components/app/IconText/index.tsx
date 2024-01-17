import Styled from '@emotion/styled';
import React, { forwardRef } from 'react';

type IconTextProps = {
  icon: React.ReactNode;
} & React.ComponentProps<'label'>;

/** StyleComponent */
const Wrapper = Styled('label')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacings.xs,
}));

/** ReactComponent */
const IconText = forwardRef<HTMLLabelElement, IconTextProps>(({
  icon,
  children,
  className,
  ...props
},
ref,) => (
  <Wrapper className={className} ref={ref} {...props}>
    {/* iconはpropsで渡す */}
    {icon}
    {/* テキストでもAnchorでも受け取り可 */}
      {children}
  </Wrapper>
));

export default IconText;
