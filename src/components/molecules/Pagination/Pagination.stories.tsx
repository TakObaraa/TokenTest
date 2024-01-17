import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import Pagination from './Pagination';

type PaginationPropsType = PropsOf<typeof Pagination>;

export default ({
  title: 'Molecules/Pagination',
  component: Pagination,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta);

export const Default: Story<PaginationPropsType> = ({
  currentPage,
  totalPage,
  onClick,
}) => (
  <Pagination
    currentPage={currentPage}
    totalPage={totalPage}
    onClick={onClick}
  />
);

Default.args = {
  currentPage: 5,
  totalPage: 9,
  onClick: (n: number) => console.log(n),
};
