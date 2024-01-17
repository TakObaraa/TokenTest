import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import CheckBox from '@atoms/CheckBox/Checkbox';
import Icon from '@atoms/Icon/Icon';
import InputDate from '@atoms/Input/InputDate/InputDate';
import InputText from '@atoms/Input/InputText/InputText';
import Paragraph from '@atoms/Paragraph/Paragraph';
import SelectBox from '@atoms/SelectBox/SelectBox';
import Styled from '@emotion/styled';
import DatePeriod from '@molecules/DatePeriod/DatePeriod';
import Pagination from '@molecules/Pagination/Pagination';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { COLOR, SIZE } from '@styles/constant';
import MainTemplate from '@templates/MainTemplate/MainTemplate';
import React, { useState } from 'react';

const dummyContractFacilityListData = [
  {
    contractType: '法人',
    contractId: 'abcde',
    corporationName: 'ワイズ法人',
    corporationType: '医療法人',
    dbId: '12345',
    type: 'RV',
    siteCode: 'U123456',
    CS: 'ASP',
    Ins: 'W001',
    GR: 'GR01',
    representativeFacilityName: 'さくらデイサービス',
    facilityId: 'klmmn',
    facilityName: 'さくらデイサービス',
    // connectionSystem: 'SP',
    family: '併用',
    option: 'ID-Link',
    feeStructure: '在宅介護',
    facilityGroupType: '事業所サービス',
    facilityType: 'デイサービス',
    videoStorage: '1.2/14.8',
    date: '2022年04月01日',
    OperationStatus: true,
    wisemanAccount: false,
  },
  {
    contractType: '法人',
    contractId: 'abcde',
    corporationName: 'ワイズ法人',
    corporationType: '医療法人',
    dbId: '12345',
    type: 'ER',
    siteCode: '',
    CS: 'ASP',
    Ins: '',
    GR: '',
    representativeFacilityName: '',
    facilityId: 'fghij',
    facilityName: 'ワイズ病院',
    // connectionSystem: 'MV',
    family: 'なし',
    option: 'ID-Link',
    feeStructure: '病院',
    facilityGroupType: '医療機関・薬局',
    facilityType: '病院',
    videoStorage: '1.2/14.8',
    date: '2022年04月01日',
    OperationStatus: true,
    wisemanAccount: false,
  },
  {
    contractType: '法人',
    contractId: 'abcde',
    corporationName: 'ワイズ法人',
    corporationType: '医療法人',
    dbId: '12345',
    type: '他社電カル',
    siteCode: '',
    CS: 'ASP',
    Ins: '',
    GR: '',
    representativeFacilityName: '',
    facilityId: 'fghij',
    facilityName: 'ワイズ病院',
    // connectionSystem: 'MV',
    family: 'なし',
    option: 'ID-Link',
    feeStructure: '病院',
    facilityGroupType: '医療機関・薬局',
    facilityType: '病院',
    videoStorage: '1.2/14.8',
    date: '2022年04月01日',
    OperationStatus: true,
    wisemanAccount: false,
  },
  {
    contractType: '地域',
    contractId: 'opqrs',
    corporationName: '',
    corporationType: 'その他',
    dbId: '',
    type: 'データ移行',
    siteCode: '',
    CS: '',
    Ins: '',
    GR: '',
    representativeFacilityName: 'データ移行ワイズワイズ事業所',
    facilityId: 'tuvwx',
    facilityName: 'データ移行ワイズワイズ事業所',
    // connectionSystem: 'SP',
    family: '',
    option: '',
    feeStructure: '',
    facilityGroupType: 'その他',
    facilityType: 'その他',
    videoStorage: '',
    date: '2022年04月01日',
    OperationStatus: true,
    wisemanAccount: false,
  },
  {
    contractType: '地域',
    contractId: 'opqrs',
    corporationName: '盛岡市',
    corporationType: '',
    dbId: '',
    type: 'com',
    siteCode: '',
    CS: '',
    Ins: '',
    GR: '',
    representativeFacilityName: '',
    facilityId: 'tuvwx',
    facilityName: '開運橋ケアプランセンター',
    // connectionSystem: 'SP',
    family: '',
    option: '',
    feeStructure: '',
    facilityGroupType: '事業所サービス',
    facilityType: '居宅介護事業所',
    videoStorage: '',
    date: '2022年04月01日',
    OperationStatus: true,
    wisemanAccount: false,
  },
  {
    contractType: '地域',
    contractId: 'opqrs',
    corporationName: '盛岡市',
    corporationType: '',
    dbId: '',
    type: 'SE',
    siteCode: '',
    CS: '',
    Ins: '',
    GR: '',
    representativeFacilityName: '',
    facilityId: 'tuvwx',
    facilityName: '開運橋ケアプランセンター',
    // connectionSystem: 'SP',
    family: '',
    option: '',
    feeStructure: '',
    facilityGroupType: '事業所サービス',
    facilityType: '居宅介護事業所',
    videoStorage: '',
    date: '2022年04月01日',
    OperationStatus: true,
    wisemanAccount: false,
  },
  {
    contractType: '地域',
    contractId: 'testw',
    corporationName: 'ワイズテスト',
    corporationType: '',
    dbId: '67890',
    type: 'RV',
    siteCode: 'U1234567',
    CS: 'ASP',
    Ins: 'w001',
    GR: 'GR01',
    representativeFacilityName: 'ワイズデイサービス',
    facilityId: 'yzabc',
    facilityName: 'ワイズデイサービス',
    // connectionSystem: 'SP',
    family: '',
    option: '',
    feeStructure: '',
    facilityGroupType: '事業所サービス',
    facilityType: 'デイサービス',
    videoStorage: '',
    date: '2022年04月01日',
    OperationStatus: true,
    wisemanAccount: true,
  },
];

/** StyledComponent */
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
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
  flexDirection: 'column',
});
const SearchRow = Styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: SIZE.GAP._8,
  alignItems: 'center',
});
const SelectBoxItems = Styled('div')({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._8} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0}`,
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._4,
});
const StyledSelectBox = Styled(SelectBox)({
  width: '80px',
});
const SearchCheckItems = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._8,
});
const SearchContractId = Styled(InputText)({
  width: '150px',
});
const SearchContractFacilityName = Styled(InputText)({
  width: '200px',
});
const SearchContractType = Styled(SelectBox)({
  width: '170px',
});
const SearchDbId = Styled(InputText)({
  width: '80px',
});
const SearchDivision = Styled(SelectBox)({
  width: '120px',
});
const SearchSiteCode = Styled(InputText)({
  width: '100px',
});
const SearchInsGrp = Styled(InputText)({
  width: '60px',
});
const SearchFamily = Styled(SelectBox)({
  width: '100px',
});
const SearchFeeStructure = Styled(SelectBox)({
  width: '170px',
});
const SearchFacilityTypeGroup = Styled(SelectBox)({
  width: '170px',
});
const SearchFacilityType = Styled(SelectBox)({
  width: '170px',
});
const SearchDateItems = Styled('div')({
  gap: SIZE.GAP._4,
  display: 'flex',
  alignItems: 'center',
});
const SearchButton = Styled('div')({
  gap: SIZE.GAP._8,
  display: 'flex',
  alignItems: 'center',
});

const ContractFacilityTable = Styled(GridTable)({
  width: '100%',
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN.AUTO} ${SIZE.MARGIN._16}`,
  gridTemplateColumns:
    '40px 60px 100px 60px 80px 60px 80px 80px 50px 50px 200px 60px minmax(200px,1fr) 40px 110px 40px 120px 120px 60px 110px 40px',
  overflowX: 'scroll',
});
const GridTableHeaderRow = Styled(GridTableRow)({});
const Paginations = Styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});
const StyledGridTableItem = Styled(GridTableItem)({
  flexWrap: 'wrap',
  whiteSpace: 'normal',
});
const StyledGridTableHeaderItem = Styled(GridTableHeaderItem)({
  padding: '4px 14px 4px 4px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  position: 'relative',
  borderBottom: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.GRAY_1000}`,
  fontSize: '9px',
});
const SortIcon = Styled(Icon)({
  position: 'absolute',
  top: '50%',
  right: '4px',
  transformY: 'translateY(-50%)',
});

/** ReactComponent */
const ContractsList: React.FC = () => {
  console.log('render ContractsList');
  const [sortChange, setSortChange] = useState(true);
  return (
    <MainTemplate contentSizeMax>
      <ContentHeader>
        <ContentTitle>
          <Icon name="home" setSize="_24" />
          <Paragraph setFontSize="_24">ダッシュボード</Paragraph>
        </ContentTitle>
        <HeaderRight>
          <Button iconName="download">すべて出力</Button>
          <Button iconName="download">RVのみ出力</Button>
        </HeaderRight>
      </ContentHeader>
      <SearchArea>
        <SearchRow>
          <SelectBoxItems>
            <StyledSelectBox
              options={[
                { label: '10', value: '0' },
                { label: '25', value: '1' },
                { label: '50', value: '2' },
                { label: '100', value: '3' },
              ]}
              defaultValue={[{ label: '10', value: '0' }]}
              isClearable={false}
            />
            <Paragraph setBold>件表示</Paragraph>
          </SelectBoxItems>
          <SearchCheckItems>
            <CheckBox label="法人" />
            <CheckBox label="地域" />
          </SearchCheckItems>
          <SearchContractId placeholder="契約ID・事業所ID" />
          <SearchContractFacilityName placeholder="契約名・代表事業所名・事業所名" />
          <CheckBox label="社内アカウントのみ" />
        </SearchRow>
        <SearchRow>
          <SearchContractType
            options={[
              { label: '社会福祉法人', value: '0' },
              { label: '医療法人', value: '1' },
              { label: '株式会社', value: '2' },
              { label: '特定非営利活動法人', value: '3' },
              { label: '生活共同組合', value: '4' },
              { label: '自治体', value: '5' },
              { label: 'その他', value: '6' },
            ]}
            placeholder="法人種別"
          />
          <SearchDbId placeholder="DBID" />
          <SearchDivision
            options={[
              { label: 'RV', value: '0' },
              { label: 'ER', value: '1' },
              { label: '他社電カル', value: '2' },
              { label: 'データ移行', value: '3' },
              { label: 'Com', value: '4' },
              { label: 'SE', value: '5' },
            ]}
            placeholder="区分"
          />
          <SearchSiteCode placeholder="サイトコード" />
          <SearchInsGrp placeholder="INS" />
          <SearchInsGrp placeholder="GRP" />
          <SearchFamily
            options={[
              { label: 'なし', value: '0' },
              { label: '併用', value: '1' },
              { label: '単独', value: '2' },
            ]}
            placeholder="家族連携"
          />
        </SearchRow>
        <SearchRow>
          <SearchCheckItems>
            <CheckBox label="ID-Link" />
            <CheckBox label="連携シート" />
          </SearchCheckItems>
          <SearchFeeStructure
            options={[
              { label: '病院', value: '0' },
              { label: '診療所・介護施設', value: '1' },
              { label: '在宅介護サービス', value: '2' },
            ]}
            placeholder="料金体系"
          />
          <SearchFacilityTypeGroup
            options={[
              { label: '医療機関・薬局', value: '0' },
              { label: '事業所サービス', value: '1' },
              { label: '居宅サービス', value: '2' },
              { label: '居住系サービス', value: '3' },
              { label: '障がいサービス', value: '4' },
              { label: '自治体系', value: '5' },
              { label: 'その他', value: '6' },
              { label: 'テストサービス', value: '7' },
            ]}
            placeholder="事業所種別グループ"
          />
          <SearchFacilityType
            options={[
              { label: '病院', value: '0' },
              { label: '居宅介護事業所', value: '1' },
              { label: 'デイサービス', value: '2' },
              { label: 'その他', value: '3' },
            ]}
            placeholder="事業所種別"
          />
          <SearchDateItems>
            <DatePeriod
              startInputDate={
                <InputDate
                  onChange={() => {
                    console.log('StartDateSelect');
                  }}
                  placeholderText="契約日：開始"
                />
              }
              endInputDate={
                <InputDate
                  onChange={() => {
                    console.log('EndDateSelect');
                  }}
                  placeholderText="契約日：終了"
                />
              }
            />
          </SearchDateItems>
          <SearchCheckItems>
            <CheckBox label="稼働中" />
            <CheckBox label="停止中" />
          </SearchCheckItems>
          <SearchButton>
            <Button iconName="search">検索</Button>
            <ActionAnchor>クリア</ActionAnchor>
          </SearchButton>
        </SearchRow>
      </SearchArea>

      <ContractFacilityTable>
        <GridTableHeaderRow>
          <StyledGridTableHeaderItem>
            契約モード
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem
            setPosition="center"
            onClick={() => setSortChange(!sortChange)}
          >
            契約ID
            <SortIcon
              name={sortChange === true ? 'triangleUp' : 'triangleDown'}
              setSize="_12"
              setColor="blue"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            契約名
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            社内アカウント
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            法人種別
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            DBID
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            区分
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            サイトコード
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            INS
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            GRP
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            代表事業所
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            事業所ID
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            事業所名
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            家族連携
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            オプション導入
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            料金体系
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            事業所種別グループ
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            事業所種別
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            動画使用容量/上限
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            契約日
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
          <StyledGridTableHeaderItem>
            稼働状況
            <SortIcon
              name="triangleUpDown"
              setSize="_12"
              setColor="lightGray"
            />
          </StyledGridTableHeaderItem>
        </GridTableHeaderRow>
        {dummyContractFacilityListData.map((item, index) => (
          <GridTableRow key={`key-${index.toString()}`}>
            <StyledGridTableItem>{item.contractType}</StyledGridTableItem>
            <StyledGridTableItem setPosition="center">
              <ActionAnchor setFontSize="_12">{item.contractId}</ActionAnchor>
            </StyledGridTableItem>
            <StyledGridTableItem>{item.corporationName}</StyledGridTableItem>
            <StyledGridTableItem setPosition="center">
              {item.wisemanAccount === true && '社内'}
            </StyledGridTableItem>
            <StyledGridTableItem>{item.corporationType}</StyledGridTableItem>
            <StyledGridTableItem>{item.dbId}</StyledGridTableItem>
            <StyledGridTableItem>{item.type}</StyledGridTableItem>
            <StyledGridTableItem>{item.siteCode}</StyledGridTableItem>
            {/* <StyledGridTableItem>{item.CS}</StyledGridTableItem> */}
            <StyledGridTableItem>{item.Ins}</StyledGridTableItem>
            <StyledGridTableItem>{item.GR}</StyledGridTableItem>
            <StyledGridTableItem>
              {item.representativeFacilityName}
            </StyledGridTableItem>
            <StyledGridTableItem>{item.facilityId}</StyledGridTableItem>
            <StyledGridTableItem>{item.facilityName}</StyledGridTableItem>
            {/* <StyledGridTableItem>{item.connectionSystem}</StyledGridTableItem> */}
            <StyledGridTableItem>
              <Paragraph
                setFontSize="_12"
                setColor={item.family === 'なし' ? 'default' : 'success'}
              >
                {item.family}
              </Paragraph>
            </StyledGridTableItem>
            <StyledGridTableItem>{item.option}</StyledGridTableItem>
            <StyledGridTableItem>{item.feeStructure}</StyledGridTableItem>
            <StyledGridTableItem>{item.facilityGroupType}</StyledGridTableItem>
            <StyledGridTableItem>{item.facilityType}</StyledGridTableItem>
            <StyledGridTableItem>{item.videoStorage}</StyledGridTableItem>
            <StyledGridTableItem>{item.date}</StyledGridTableItem>
            <StyledGridTableItem setPosition="center">
              <Icon
                name={item.OperationStatus ? 'check' : 'stop'}
                setColor={item.OperationStatus ? 'green' : 'red'}
                setSize="_12"
              />
            </StyledGridTableItem>
          </GridTableRow>
        ))}
      </ContractFacilityTable>
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
    </MainTemplate>
  );
};

export default ContractsList;
