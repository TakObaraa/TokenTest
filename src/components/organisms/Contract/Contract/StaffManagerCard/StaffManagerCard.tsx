import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Icon from '@atoms/Icon/Icon';
import Styled from '@emotion/styled';
import React from 'react';
import AppCard from '../../../App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '../../../GridTable/GridTable';

type StaffManagerCardProps = {
  onEdit: VoidFunction;
};

const dummyStaffsData = [
  {
    staffName: 'MeLLadmin1',
    staffId: 'MeLLadmin1',
    authority: '統括管理者',
    status: true,
  },
  {
    staffName: 'MeLLadmin2',
    staffId: 'MeLLadmin2',
    authority: '統括管理者',
    status: true,
  },
  {
    staffName: 'MeLLadmin3',
    staffId: 'MeLLadmin3',
    authority: '統括管理者',
    status: false,
  },
];

/**  StyledComponent */
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '1fr 1fr 1fr 70px 70px',
});
const StyledGridTableHeaderItem = Styled(GridTableHeaderItem)({
  justifyContent: 'space-between',
});

/**  ReactComponent */
const StaffManagerCard: React.FC<StaffManagerCardProps> = ({ onEdit }) => {
  console.log('render StaffManagerCard');
  return (
    <AppCard cardTitle="スタッフ一覧" cardTitleIcon="staffMale">
      <StyledGridTable setBorder={false}>
        <GridTableRow>
          <StyledGridTableHeaderItem>
            スタッフ名
            <Icon name="triangleUpDown" setSize="_12" setColor="lightGray" />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            スタッフID
            <Icon name="triangleUpDown" setSize="_12" setColor="lightGray" />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            権限
            <Icon name="triangleUpDown" setSize="_12" setColor="lightGray" />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem setPosition="center">
            状況
            <Icon name="triangleUpDown" setSize="_12" setColor="lightGray" />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem setPosition="center">
            編集
            <Icon name="triangleUpDown" setSize="_12" setColor="lightGray" />
          </StyledGridTableHeaderItem>
        </GridTableRow>
        {dummyStaffsData.map((item, index) => (
          <GridTableRow key={`key-${index.toString()}`}>
            <GridTableItem>{item.staffName}</GridTableItem>
            <GridTableItem>{item.staffId}</GridTableItem>
            <GridTableItem>{item.authority}</GridTableItem>
            <GridTableItem setPosition="center">
              <Icon
                name={item.status ? 'check' : 'cancel'}
                setColor={item.status ? 'green' : 'red'}
                setSize="_12"
              />
            </GridTableItem>
            <GridTableItem setPosition="center">
              <ActionAnchor onClick={onEdit} setFontSize="_12">
                編集
              </ActionAnchor>
            </GridTableItem>
          </GridTableRow>
        ))}
      </StyledGridTable>
    </AppCard>
  );
};

export default StaffManagerCard;
