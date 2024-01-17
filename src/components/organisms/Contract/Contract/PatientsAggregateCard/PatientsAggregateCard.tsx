import Button from '@atoms/Button/Button';
import InputDate from '@atoms/Input/InputDate/InputDate';
import LabelBox from '@atoms/LabelBox/LabelBox';
import Paragraph from '@atoms/Paragraph/Paragraph';
import SelectBox from '@atoms/SelectBox/SelectBox';
import Styled from '@emotion/styled';
import DatePeriod from '@molecules/DatePeriod/DatePeriod';
import { SIZE } from '@styles/constant';
import React from 'react';
import AppCard from '../../../App/AppCard/AppCard';

// type PatientsAggregate = {
//   onRvFacilityMenu: VoidFunction;
//   openToolTip: boolean;
// };

// /**  StyledComponent */
const StyledAppCard = Styled(AppCard)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const PatientsAggregate = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: SIZE.PADDING._16,
  gap: SIZE.GAP._8,
});
const FormItem = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._8,
});
const FormItemTitle = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
  alignItems: 'center',
});

const UnitSelect = Styled(SelectBox)({
  width: '160px',
});

/**  ReactComponent */
const PatientsAggregateCard: React.FC = () => {
  console.log('render PatientsAggregateCard');
  return (
    <StyledAppCard cardTitle="患者・利用者登録状況の集計" cardTitleIcon="stats">
      <PatientsAggregate>
        <Paragraph>
          契約全体の事業所・利用者登録状況の集計を出力します
        </Paragraph>
        <FormItem>
          <FormItemTitle>
            <Paragraph setBold>集計単位</Paragraph>
            <LabelBox setLabelColor="warning" setSize="small">
              必須
            </LabelBox>
          </FormItemTitle>
          <UnitSelect
            placeholder="集計単位"
            options={[
              { label: '週単位', value: '1' },
              { label: '月単位', value: '1' },
            ]}
            defaultValue={[{ label: '週単位', value: '1' }]}
            isClearable={false}
          />
        </FormItem>

        <FormItem>
          <FormItemTitle>
            <Paragraph setBold>集計期間</Paragraph>
            <LabelBox setLabelColor="warning" setSize="small">
              必須
            </LabelBox>
          </FormItemTitle>
          <DatePeriod
            startInputDate={
              <InputDate
                onChange={() => {
                  console.log('StartDateSelect');
                }}
                placeholderText="開始日"
                selected={new Date('2022-05-25T00:15:12.929Z')}
              />
            }
            endInputDate={
              <InputDate
                onChange={() => {
                  console.log('EndDateSelect');
                }}
                placeholderText="終了日"
                selected={new Date('2023-05-25T00:15:12.929Z')}
              />
            }
          />
          <Paragraph setFontSize="_12" setColor="gray">
            集計期間は最大1年間設定できます
          </Paragraph>
        </FormItem>
        <Button iconName="download">集計</Button>
      </PatientsAggregate>
    </StyledAppCard>
  );
};

export default PatientsAggregateCard;
