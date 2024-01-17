import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import InputDate from '@atoms/Input/InputDate/InputDate';
import InputText from '@atoms/Input/InputText/InputText';
import Paragraph from '@atoms/Paragraph/Paragraph';
import SelectBox from '@atoms/SelectBox/SelectBox';
import Styled from '@emotion/styled';
import PrevAnchor from '@molecules/PrevAnchor/PrevAnchor';
import AppCard from '@organisms/App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { SIZE } from '@styles/constant';
import MainTemplate from '@templates/MainTemplate/MainTemplate';
import React, { useState } from 'react';

const dummyContractData = [
  {
    name: '盛岡市',
    features: [
      { name: 'ダッシュボード', number: '123' },
      { name: '患者・利用者一覧', number: '123' },
      { name: 'メッセージ', number: '12' },
      { name: 'スケジュール', number: '12' },
      { name: '掲示板・回覧板', number: '12' },
      { name: '会議室', number: '12' },
      { name: '部門予約確認', number: '12' },
      { name: '基本情報', number: '12' },
    ],
  },
];
const dummyFacilityData = [
  {
    name: 'ワイズ病院',
    features: [
      { name: 'ダッシュボード', number: '123' },
      { name: '患者・利用者一覧', number: '123' },
      { name: 'メッセージ', number: '12' },
      { name: 'スケジュール', number: '12' },
      { name: '掲示板・回覧板', number: '12' },
      { name: '会議室', number: '12' },
      { name: '部門予約確認', number: '12' },
      { name: '基本情報', number: '12' },
    ],
  },
  {
    name: 'ワイズデイ',
    features: [
      { name: 'ダッシュボード', number: '123' },
      { name: '患者・利用者一覧', number: '123' },
      { name: 'メッセージ', number: '12' },
      { name: 'スケジュール', number: '12' },
      { name: '掲示板・回覧板', number: '12' },
      { name: '会議室', number: '12' },
      { name: '部門予約確認', number: '12' },
      { name: '基本情報', number: '12' },
    ],
  },
  {
    name: 'ワイズケア',
    features: [
      { name: 'ダッシュボード', number: '123' },
      { name: '患者・利用者一覧', number: '123' },
      { name: 'メッセージ', number: '12' },
      { name: 'スケジュール', number: '12' },
      { name: '掲示板・回覧板', number: '12' },
      { name: '会議室', number: '12' },
      { name: '部門予約確認', number: '12' },
      { name: '基本情報', number: '12' },
    ],
  },
];

/** StyledComponent */
const StyledMainTemplate = Styled(MainTemplate)({
  width: '100%',
});
const ContentHeader = Styled('div')({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
  display: 'flex',
  justifyContent: 'flex-start',
});
const StyledPrevAnchor = Styled(PrevAnchor)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16}`,
});
const ContentTitle = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._4,
});
const SearchArea = Styled('div')({
  display: 'flex',
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
  gap: SIZE.GAP._8,
});
const StyledSelectBox = Styled(SelectBox)({
  width: '80px',
});
const StyledInputText = Styled(InputText)({
  width: '200px',
});

const AccessTotallingDetailCard = Styled(AppCard)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const AccessTotallingTable = Styled(GridTable)({
  gridTemplateColumns: '300px 1fr 220px',
});
const GridTableHeaderRow = Styled(GridTableRow)({});
const NameItem = Styled(GridTableItem)({
  alignItems: 'flex-start',
});
const MonthSelectBox = Styled(SelectBox)({
  width: '100px',
});
const WeekSelectBox = Styled(SelectBox)({
  width: '200px',
});
/** ReactComponent */
const AccessTotallingDetail: React.FC = () => {
  console.log('render AccessTotallingDetail');
  const [sortType, setSortType] = useState<'week' | 'month'>('week');
  return (
    <StyledMainTemplate>
      <ContentHeader>
        <ContentTitle>
          <Icon name="stats" setSize="_24" />
          <Paragraph setFontSize="_24">アクセス集計 内訳</Paragraph>
        </ContentTitle>
      </ContentHeader>
      <StyledPrevAnchor
        onClick={() => {
          console.log('契約一覧');
        }}
      >
        契約一覧へ戻る
      </StyledPrevAnchor>
      <SearchArea>
        <StyledSelectBox
          options={[
            { label: '週単位', value: 'week' },
            { label: '月単位', value: 'month' },
          ]}
          defaultValue={[{ label: '週単位', value: '0' }]}
          isClearable={false}
          refs={{
            name: 'sortType',
            onChange: async (e) => {
              console.log('onChange');
              setSortType(e.target.value.value);
            },
            onBlur: async () => {
              console.log('onBlur');
            },
            ref: () => {
              console.log('ref');
            },
          }}
        />
        {sortType === 'month' && (
          <MonthSelectBox
            options={[
              { label: '2023年4月', value: '0' },
              { label: '2023年3月', value: '1' },
              { label: '2023年2月', value: '2' },
            ]}
            defaultValue={[{ label: '2023年4月', value: '0' }]}
            isClearable={false}
          />
        )}
        {sortType === 'week' && (
          <>
            <InputDate
              onChange={() => {
                console.log('StartDateSelect');
              }}
              placeholderText="基準日"
              selected={new Date('2022-05-25T00:15:12.929Z')}
            />
            <WeekSelectBox
              options={[
                { label: '2023/04/01~2023/04/07', value: '0' },
                { label: '2023/04/08~2023/04/14', value: '0' },
              ]}
              defaultValue={[{ label: '2023/04/01~2023/04/07', value: '0' }]}
              isClearable={false}
            />
          </>
        )}
        <StyledInputText placeholder="事業所名" />
        <Button iconName="search">検索</Button>
      </SearchArea>
      <AccessTotallingDetailCard
        cardTitle={
          sortType === 'week'
            ? '2023/04/01~2023/04/07のアクセス集計'
            : '2023年4月のアクセス集計'
        }
        cardTitleIcon="stats"
      >
        <AccessTotallingTable setBorder={false}>
          <GridTableHeaderRow>
            <GridTableHeaderItem>契約名</GridTableHeaderItem>
            <GridTableHeaderItem>機能名</GridTableHeaderItem>
            <GridTableHeaderItem setPosition="right" setDirection="row">
              アクセス数
            </GridTableHeaderItem>
          </GridTableHeaderRow>
          {dummyContractData.map((contract, i) => (
            <GridTableRow key={`key-${i.toString()}`} setStriped={false}>
              <NameItem setRow={contract.features.length + 1}>
                {contract.name}
              </NameItem>
              {contract.features.map((feature, k) => (
                <React.Fragment key={`key-${k.toString()}`}>
                  {k === 0 && (
                    <>
                      <GridTableItem>
                        <Paragraph setFontSize="_12" setBold>
                          合計
                        </Paragraph>
                      </GridTableItem>
                      <GridTableItem setPosition="right" setDirection="row">
                        12345
                      </GridTableItem>
                    </>
                  )}
                  <GridTableItem>{feature.name}</GridTableItem>
                  <GridTableItem setPosition="right" setDirection="row">
                    {feature.number}
                  </GridTableItem>
                </React.Fragment>
              ))}
            </GridTableRow>
          ))}
        </AccessTotallingTable>
      </AccessTotallingDetailCard>
      <AccessTotallingDetailCard
        cardTitle="事業所毎のアクセス集計"
        cardTitleIcon="stats"
      >
        <AccessTotallingTable setBorder={false}>
          <GridTableHeaderRow>
            <GridTableHeaderItem>事業所名</GridTableHeaderItem>
            <GridTableHeaderItem>機能名</GridTableHeaderItem>
            <GridTableHeaderItem setPosition="right" setDirection="row">
              アクセス数
            </GridTableHeaderItem>
          </GridTableHeaderRow>
          {dummyFacilityData.map((facility, i) => (
            <GridTableRow key={`key-${i.toString()}`}>
              <NameItem setRow={facility.features.length + 1}>
                {facility.name}
              </NameItem>
              {facility.features.map((feature, k) => (
                <React.Fragment key={`key-${k.toString()}`}>
                  {k === 0 && (
                    <>
                      <GridTableItem>
                        <Paragraph setFontSize="_12" setBold>
                          合計
                        </Paragraph>
                      </GridTableItem>
                      <GridTableItem setPosition="right" setDirection="row">
                        12345
                      </GridTableItem>
                    </>
                  )}
                  <GridTableItem>{feature.name}</GridTableItem>
                  <GridTableItem setPosition="right" setDirection="row">
                    {feature.number}
                  </GridTableItem>
                </React.Fragment>
              ))}
            </GridTableRow>
          ))}
        </AccessTotallingTable>
      </AccessTotallingDetailCard>
    </StyledMainTemplate>
  );
};

export default AccessTotallingDetail;
