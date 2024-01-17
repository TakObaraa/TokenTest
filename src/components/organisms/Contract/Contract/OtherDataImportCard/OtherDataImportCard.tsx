import Button from '@atoms/Button/Button';
import InputFile from '@atoms/Input/InputFile/InputFile';
import Styled from '@emotion/styled';
import IconText from '@molecules/IconText/IconText';
import { SIZE } from '@styles/constant';
import React from 'react';
import AppCard from '../../../App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '../../../GridTable/GridTable';

type OtherDataImportCardProps = {
  onBasicDelete: VoidFunction;
  onCareDelete: VoidFunction;
  csvImportError: boolean;
};

/**  StyledComponent */
const StyledGridTable = Styled(GridTable)({
  gridTemplateColumns: '100px 1fr 300px 100px',
});
const InputFileItem = Styled(GridTableItem)({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._8,
  alignItems: 'flex-start',
});

/**  ReactComponent */
const OtherDataImportCard: React.FC<OtherDataImportCardProps> = ({
  onBasicDelete,
  onCareDelete,
  csvImportError,
}) => {
  console.log('render OtherDataImportCard');
  return (
    <AppCard cardTitle="CSVファイル取込・削除" cardTitleIcon="document">
      <StyledGridTable setBorder={false}>
        <GridTableRow>
          <GridTableHeaderItem>データ種別</GridTableHeaderItem>
          <GridTableHeaderItem>CSVファイル</GridTableHeaderItem>
          <GridTableHeaderItem>取込済CSVファイル</GridTableHeaderItem>
          <GridTableHeaderItem />
        </GridTableRow>
        <GridTableRow setStriped={false}>
          <GridTableItem>基本情報</GridTableItem>
          <InputFileItem>
            <InputFile />
            {csvImportError === true && (
              <IconText
                iconName="exclamationSign"
                setIconColor="red"
                setFontColor="danger"
                setIconSize="_12"
                setFontSize="_12"
              >
                csvファイルを選択してください
              </IconText>
            )}
          </InputFileItem>
          <GridTableItem>xrgcy_kihon.csv</GridTableItem>
          <GridTableItem setPosition="center">
            <Button iconName="delete" setType="danger" onClick={onBasicDelete}>
              削除
            </Button>
          </GridTableItem>
        </GridTableRow>
        <GridTableRow>
          <GridTableItem>ケア記録</GridTableItem>
          <InputFileItem>
            <InputFile />
            {csvImportError === true && (
              <IconText
                iconName="exclamationSign"
                setIconColor="red"
                setFontColor="danger"
                setIconSize="_12"
                setFontSize="_12"
              >
                csvファイルを選択してください
              </IconText>
            )}
          </InputFileItem>
          <GridTableItem>xrgcy__care-record-1.csv</GridTableItem>
          <GridTableItem setPosition="center">
            <Button iconName="delete" setType="danger" onClick={onCareDelete}>
              削除
            </Button>
          </GridTableItem>
        </GridTableRow>
      </StyledGridTable>
    </AppCard>
  );
};

export default OtherDataImportCard;
