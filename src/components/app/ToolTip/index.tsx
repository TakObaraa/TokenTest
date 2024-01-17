import styled from '@emotion/styled';

/** StyleComponent */
const ToolTip = styled('div')(({ theme }) => ({
  padding: theme.spacings.sm,
  backgroundColor: theme.colors.background.surface,
  border: theme.borders.default,
  borderRadius: theme.radius.base,
  boxShadow: theme.shadows.popper,
}));

// コンポーネントをエクスポートする
export default ToolTip;
