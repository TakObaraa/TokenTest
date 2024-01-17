import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import ListText from '@atoms/ListText/ListText';
import Styled from '@emotion/styled';
import { COLOR, SIZE } from '@styles/constant';
import React from 'react';
import AppCard from '../../../../components/organisms/App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '../../../../components/organisms/GridTable/GridTable';

/**  StyledComponent */
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '70px 180px 100px 100px 1fr 300px',
});
const GridTableHeaderRow = Styled(GridTableRow)({});
const StatusArea = Styled('div')({});
const Comment = Styled('div')({
  fontSize: '_10',
  color: COLOR.FONT.GRAY_500,
  margin: `${SIZE.MARGIN._4} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0}`,
});

/**  ReactComponent */
const OtherDataImportLogCard: React.FC = () => {
  console.log('render OtherDataImportLogCard');
  return (
    <AppCard cardTitle="ログ" cardTitleIcon="list">
      <StyledGridTable setBorder={false}>
        <GridTableHeaderRow>
          <GridTableHeaderItem setPosition="right" setDirection="row">
            No
          </GridTableHeaderItem>
          <GridTableHeaderItem>Status</GridTableHeaderItem>
          <GridTableHeaderItem>操作</GridTableHeaderItem>
          <GridTableHeaderItem>データ種別</GridTableHeaderItem>
          <GridTableHeaderItem>CSVファイル</GridTableHeaderItem>
          <GridTableHeaderItem>
            実施日時・ログファイルダウンロード
          </GridTableHeaderItem>
        </GridTableHeaderRow>
        <GridTableRow>
          <GridTableItem setPosition="right" setDirection="row">
            6
          </GridTableItem>
          <GridTableItem>処理待ち</GridTableItem>
          <GridTableItem>取込</GridTableItem>
          <GridTableItem>ケア記録</GridTableItem>
          <GridTableItem>xrgcy_care-record-1.csv</GridTableItem>
          <GridTableItem>2017-03-08 11:28:39</GridTableItem>
        </GridTableRow>
        <GridTableRow>
          <GridTableItem setPosition="right" setDirection="row">
            5
          </GridTableItem>
          <GridTableItem>
            <StatusArea>
              処理中
              <Comment>
                ▼おおよその処理済み件数
                <br />
                2017-03-08 11:28:40時点
                <ListText>CSVチェック 約100,000件</ListText>
                <ListText>CSV取込 約1,000件</ListText>
              </Comment>
            </StatusArea>
          </GridTableItem>
          <GridTableItem>取込</GridTableItem>
          <GridTableItem>基本情報</GridTableItem>
          <GridTableItem>xrgcy_kihon.csv</GridTableItem>
          <GridTableItem>2017-03-08 11:28:39</GridTableItem>
        </GridTableRow>
        <GridTableRow>
          <GridTableItem setPosition="right" setDirection="row">
            4
          </GridTableItem>
          <GridTableItem>成功</GridTableItem>
          <GridTableItem>削除</GridTableItem>
          <GridTableItem>基本情報</GridTableItem>
          <GridTableItem />
          <GridTableItem>
            <ActionAnchor setFontSize="_12">2017-03-08 11:28:21</ActionAnchor>
          </GridTableItem>
        </GridTableRow>
        <GridTableRow>
          <GridTableItem setPosition="right" setDirection="row">
            3
          </GridTableItem>
          <GridTableItem>成功</GridTableItem>
          <GridTableItem>取込</GridTableItem>
          <GridTableItem>基本情報</GridTableItem>
          <GridTableItem>xrgcy_kihon.csv</GridTableItem>
          <GridTableItem>
            <ActionAnchor setFontSize="_12">2017-03-08 11:28:16</ActionAnchor>
          </GridTableItem>
        </GridTableRow>
        <GridTableRow>
          <GridTableItem setPosition="right" setDirection="row">
            2
          </GridTableItem>
          <GridTableItem>中止</GridTableItem>
          <GridTableItem>取込</GridTableItem>
          <GridTableItem>ケア記録</GridTableItem>
          <GridTableItem>xrgcy_care-record-1.csv</GridTableItem>
          <GridTableItem>2017-03-08 11:26:54</GridTableItem>
        </GridTableRow>
        <GridTableRow>
          <GridTableItem setPosition="right" setDirection="row">
            1
          </GridTableItem>
          <GridTableItem>失敗</GridTableItem>
          <GridTableItem>取込</GridTableItem>
          <GridTableItem>基本情報</GridTableItem>
          <GridTableItem>xrgcy_kihon.csv</GridTableItem>
          <GridTableItem>
            <ActionAnchor setFontSize="_12">2017-03-08 11:26:54</ActionAnchor>
          </GridTableItem>
        </GridTableRow>
      </StyledGridTable>
    </AppCard>
  );
};

export default OtherDataImportLogCard;
