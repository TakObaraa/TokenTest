import styled from '@emotion/styled';
import { forwardRef } from 'react';

type Contents = {
  count?: number;
};

type BadgeProps = React.ComponentProps<'span'> & Contents;

/** StyleComponent */
const Wrapper = styled.span<{ count?: number }>(
  ({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'max-content',
    minWidth: '16px',
    padding: theme.spacings['2xs'],
    fontSize: theme.fontSizes.xs,
    fontWeight: 'normal',
    color: theme.colors.white,
    lineHeight: theme.lineHeights.light,
    verticalAlign: 'baseline',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    backgroundColor: theme.colors.red.main,
    borderRadius: '10px',
  }),
  ({ count }) =>
    count === undefined && {
      minWidth: '10px',
      height: '10px',
    },
);

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ count, ...props }, ref) => {
    return (
      <Wrapper {...props} count={count} ref={ref}>
        {count && (count < 100 ? count : '99+')}
      </Wrapper>
    );
  },
);

// コンポーネントをエクスポートする
export default Badge;
