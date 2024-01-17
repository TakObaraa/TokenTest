// Todo Create test Storybook

import Styled from '@emotion/styled';
import { SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

type Contents = {
  startInputDate: React.ReactNode;
  endInputDate: React.ReactNode;
};

type DatePeriodProps = Contents &
  Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

/** StyleComponent */
const Wrapper = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._4,
});

/** ReactComponent */
const DatePeriod: React.FC<DatePeriodProps> = ({
  startInputDate,
  endInputDate,
  className,
}) => (
  <Wrapper className={className}>
    {startInputDate}-{endInputDate}
  </Wrapper>
);

export default DatePeriod;
