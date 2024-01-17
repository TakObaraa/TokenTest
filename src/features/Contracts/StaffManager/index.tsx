import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import InputText from '@atoms/Input/InputText/InputText';
import Paragraph from '@atoms/Paragraph/Paragraph';
import SelectBox from '@atoms/SelectBox/SelectBox';
import Styled from '@emotion/styled';
import Pagination from '@molecules/Pagination/Pagination';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { SIZE } from '@styles/constant';
import MainTemplate from '@templates/MainTemplate/MainTemplate';
import React, { useState } from 'react';
import StaffEditModal from './StaffEditModal';
import StaffManagerCard from './StaffManagerCard';

/** StyledComponent */
const StyledMainTemplate = Styled(MainTemplate)({});
const ContentHeader = Styled('div')({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
  display: 'flex',
  justifyContent: 'space-between',
});
const ContentTitle = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._4,
});
const HeaderRight = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});
const SearchArea = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._8,
  alignItems: 'center',
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const SearchItems = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._4,
});
const SelectBoxItems = Styled(SearchItems)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._8} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0}`,
});
const StyledSelectBox = Styled(SelectBox)({
  width: '80px',
});
const StyledInputText = Styled(InputText)({
  width: '150px',
});
const FacilityNameTable = Styled(GridTable)({
  gridTemplateColumns: '100px 1fr',
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const GridTableHeaderRow = Styled(GridTableRow)({});
const Paginations = Styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: `${SIZE.MARGIN._16} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0}`,
});
const StyledGridTableHeaderItem = Styled(GridTableHeaderItem)({
  justifyContent: 'space-between',
});

/** ReactComponent */
const StaffManager: React.FC = () => {
  const [showStaffEditModal, setShowStaffEditModal] = useState(false);
  console.log('render StaffManager');

  return (
    <StyledMainTemplate>
      <ContentHeader>
        <ContentTitle>
          <Icon name="staffMale" setSize="_24" />
          <Paragraph setFontSize="_24">スタッフ管理</Paragraph>
        </ContentTitle>
        <HeaderRight>
          <Button iconName="download">スタッフ情報CSV出力</Button>
        </HeaderRight>
      </ContentHeader>
      <FacilityNameTable>
        <GridTableHeaderRow>
          <StyledGridTableHeaderItem>事業所ID</StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>事業所名</StyledGridTableHeaderItem>
        </GridTableHeaderRow>
        <GridTableRow setStriped={false}>
          <GridTableItem>
            <Paragraph setFontSize="_16" setBold>
              abcde
            </Paragraph>
          </GridTableItem>
          <GridTableItem>
            <Paragraph setFontSize="_16" setBold>
              ワイズ病院
            </Paragraph>
          </GridTableItem>
        </GridTableRow>
      </FacilityNameTable>
      <SearchArea>
        <SelectBoxItems>
          <StyledSelectBox
            options={[
              { label: '10', value: '0' },
              { label: '25', value: '1' },
              { label: '50', value: '2' },
              { label: '100', value: '3' },
            ]}
            defaultValue={[{ label: '50', value: '0' }]}
            isClearable={false}
          />
          <Paragraph setBold>件表示</Paragraph>
        </SelectBoxItems>
        <SearchItems>
          <StyledInputText placeholder="キーワード" />
        </SearchItems>
        <Button iconName="search">検索</Button>
      </SearchArea>
      <StaffManagerCard
        onEdit={() => {
          setShowStaffEditModal(true);
        }}
      />
      <StaffEditModal
        isOpen={showStaffEditModal}
        onDidDismiss={() => setShowStaffEditModal(false)}
        staffStatus
      />
      <Paginations>
        <Paragraph>1件〜25件を表示(全2,222件中)</Paragraph>
        <Pagination
          currentPage={0}
          totalPage={10}
          onClick={() => {
            console.log('Pagination');
          }}
        />
      </Paginations>
    </StyledMainTemplate>
  );
};

export default StaffManager;
