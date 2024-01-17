import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import CheckBox from '@atoms/CheckBox/Checkbox';
import InputText from '@atoms/Input/InputText/InputText';
import SelectBox from '@atoms/SelectBox/SelectBox';
import Styled from '@emotion/styled';
import { BREAKPOINT, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

type SearchFormPropsType = Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

const Wrapper = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._8,
});
const PatientsSearchMainConditions = Styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: SIZE.GAP._8,
  alignItems: 'center',
});
const PatientsSearchFacility = Styled(SelectBox)({
  width: '200px',
  [BREAKPOINT.MOBILE]: {
    width: '100%',
  },
});
const PatientsSearchName = Styled(InputText)({
  width: '192px',
  [BREAKPOINT.MOBILE]: {
    width: 'calc(100% - 90px)',
  },
});
const PatientSearchRow = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._8,
});
const PatientsSearchChecks = Styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: SIZE.GAP._8,
  alignItems: 'center',
});
// const PatientSearchDivider = Styled('div')({
//   minWidth: '1px',
//   height: '14px',
//   backgroundColor: COLOR.BORDER.DEFAULT,
// });
const PatientsSearchActions = Styled('div')({
  minWidth: 'max-content',
  display: 'flex',
  flex: 1,
  gap: SIZE.GAP._8,
  alignSelf: 'flex-end',
  alignItems: 'center',
  [BREAKPOINT.MOBILE]: {
    justifyContent: 'flex-end',
    padding: SIZE.PADDING._0,
  },
});

const SearchForm: React.FC<SearchFormPropsType> = ({ className }) => (
  <Wrapper className={className}>
    <PatientsSearchMainConditions>
      <PatientsSearchFacility
        placeholder="医療機関・代表事業所"
        isSearchable
        options={[
          { label: 'ワイズ医院', value: '' },
          { label: '訪問介護ワイズ', value: '' },
          { label: 'スタッフ１', value: '' },
          { label: 'スタッフ２', value: '' },
          { label: 'スタッフ３', value: '' },
          { label: 'ワイズ医院', value: '' },
          { label: '訪問介護ワイズ', value: '' },
          { label: 'スタッフ１', value: '' },
          { label: 'スタッフ２', value: '' },
          { label: 'スタッフ３', value: '' },
        ]}
      />
      <PatientsSearchName placeholder="名前・フリガナ・利用者コード" />
      <CheckBox label="前方一致" />
    </PatientsSearchMainConditions>

    <PatientSearchRow>
      <PatientsSearchChecks>
        <CheckBox label="栞あり" />
        <CheckBox label="家族連携中" />
        <CheckBox label="利用中" />
        <CheckBox label="休止中" />
        <CheckBox label="利用終了" />
        <CheckBox label="死亡者" />
        {/* <PatientSearchDivider /> */}
      </PatientsSearchChecks>

      <PatientsSearchActions>
        <Button iconName="search">検索</Button>
        <ActionAnchor>クリア</ActionAnchor>
      </PatientsSearchActions>
    </PatientSearchRow>
  </Wrapper>
);

export default SearchForm;
