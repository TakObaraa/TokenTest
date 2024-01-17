import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
import AppCard, { AppCardMessage } from '@organisms/App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableRow,
  OutlineGridTableHeaderItem,
  OutlineGridTableItem,
} from '@organisms/GridTable/GridTable';
import { COLOR, SIZE } from '@styles/constant';
import SettingTemplate from '@templates/SettingTemplate/SettingTemplate';
import React, { useState } from 'react';
import DeleteConfirmModal from '../shared/DeleteConfirmModal';
import RegisterConfirmModal from '../shared/RegisterConfirmModal';
import FacilityTypeEditModal from './FacilityTypeEditModal';

const dummyFacilityTypeSettingData = [
  {
    FacilityTypeGroup: '医療機関・薬局',
    FacilityTypeItems: [
      {
        facilityType: '病院',
        status: true,
      },
      {
        facilityType: '診療所',
        status: true,
      },
      {
        facilityType: '歯科診療所',
        status: true,
      },
      {
        facilityType: '調剤薬局',
        status: true,
      },
    ],
  },
  {
    FacilityTypeGroup: '事業所サービス',
    FacilityTypeItems: [
      {
        facilityType: '介護老人保健施設',
        status: true,
      },
      {
        facilityType: '特別養護老人ホーム',
        status: true,
      },
      {
        facilityType: '地域密着型介護老人福祉施設',
        status: true,
      },
      {
        facilityType: '介護療養型老健',
        status: true,
      },
      {
        facilityType: '介護医療院',
        status: true,
      },
    ],
  },
  {
    FacilityTypeGroup: '居宅サービス',
    FacilityTypeItems: [
      {
        facilityType: '居宅介護支援事業所',
        status: false,
      },
      {
        facilityType: '訪問看護ステーション',
        status: false,
      },
      {
        facilityType: '訪問リハビリテーション',
        status: false,
      },
      {
        facilityType: 'ホームヘルプステーション',
        status: false,
      },
      {
        facilityType: '訪問入浴',
        status: false,
      },
      {
        facilityType: 'デイサービスセンター',
        status: false,
      },
      {
        facilityType: '通所リハビリテーション',
        status: false,
      },
      {
        facilityType: '夜間対応型訪問介護',
        status: false,
      },
      {
        facilityType: '定期巡回・随時対応型',
        status: false,
      },
      {
        facilityType: '短期入所生活介護',
        status: false,
      },
      {
        facilityType: '小規模多機能型居宅介護',
        status: false,
      },
      {
        facilityType: '看護小規模多機能型居宅介護',
        status: false,
      },
      {
        facilityType: '福祉用具レンタル事業所',
        status: false,
      },
    ],
  },
  {
    FacilityTypeGroup: '居住系サービス',
    FacilityTypeItems: [
      {
        facilityType: '有料老人ホーム',
        status: false,
      },
      {
        facilityType: 'サービス付き高齢者向け住宅',
        status: false,
      },
      {
        facilityType: 'グループホーム',
        status: false,
      },
      {
        facilityType: 'ケアハウス',
        status: false,
      },
      {
        facilityType: '養護老人ホーム',
        status: false,
      },
    ],
  },
  {
    FacilityTypeGroup: '障がいサービス',
    FacilityTypeItems: [
      {
        facilityType: '障害者関連事業所',
        status: false,
      },
    ],
  },
  {
    FacilityTypeGroup: '自治体系',
    FacilityTypeItems: [
      {
        facilityType: '地域包括支援センター',
        status: false,
      },
      {
        facilityType: '在宅介護支援センター',
        status: false,
      },
      {
        facilityType: '自治体',
        status: false,
      },
    ],
  },
  {
    FacilityTypeGroup: 'その他',
    FacilityTypeItems: [
      {
        facilityType: 'その他',
        status: false,
      },
    ],
  },
  {
    FacilityTypeGroup: 'テストサービス',
    FacilityTypeItems: [
      {
        facilityType: '',
        status: undefined,
      },
    ],
  },
];

/** StyledComponent */
const StyledSettingTemplate = Styled(SettingTemplate)({
  width: '100%',
});
const StyledAppCard = Styled(AppCard)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const FacilityTypeGroupTable = Styled(GridTable)({
  backgroundColor: 'inherit',
  display: 'grid',
  gridTemplateColumns: '300px 1fr 64px 64px',
});
const FacilityTypeGroupTableHeaderItem = Styled(GridTableHeaderItem)({
  outline: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
  ':last-child': {
    border: 'none',
  },
});
const FacilityTypeTableRow = Styled(GridTableRow)({});
const FacilityTypeGroupSortIcon = Styled(Icon)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._8} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0}`,
});
const FacilityTypeGroupTableItem = Styled(OutlineGridTableItem)({});
const FacilityTypeGroupHeader = Styled(OutlineGridTableHeaderItem)({});
const FooterControl = Styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

/** ReactComponent */
const FacilityTypeSetting: React.FC = () => {
  console.log('render FacilityTypeSetting');
  const [showFacilityTypeEditModal, setShowFacilityTypeEditModal] =
    useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [showRegisterConfirmModal, setShowRegisterConfirmModal] =
    useState(false);
  const [facilityTypeEditModalType, setFacilityTypeEditModalType] = useState<
    'edit' | 'new'
  >('new');
  const [facilityTypeStatus, setFacilityTypeStatus] = useState(false);
  return (
    <StyledSettingTemplate
      activeMenu="facilityType"
      pageTitle="事業所種別管理"
      headerRight={
        <Button
          iconName="entry"
          onClick={() => {
            setShowFacilityTypeEditModal(true);
            setFacilityTypeEditModalType('new');
            console.log('事業所追加');
          }}
        >
          事業所種別追加
        </Button>
      }
    >
      <StyledAppCard cardTitle="事業所種別一覧" cardTitleIcon="category">
        <AppCardMessage>
          <Paragraph setFontSize="_12">
            追加・編集・削除・並び順変更等を行うと、変更内容がユーザーの画面に反映されます。
          </Paragraph>
        </AppCardMessage>
        <FacilityTypeGroupTable setBorder={false}>
          <GridTableRow>
            <FacilityTypeGroupTableHeaderItem>
              事業所種別グループ名
            </FacilityTypeGroupTableHeaderItem>
            <FacilityTypeGroupTableHeaderItem>
              事業所種別名
            </FacilityTypeGroupTableHeaderItem>
            <FacilityTypeGroupTableHeaderItem setPosition="center">
              有効
            </FacilityTypeGroupTableHeaderItem>
            <FacilityTypeGroupTableHeaderItem setPosition="center">
              編集
            </FacilityTypeGroupTableHeaderItem>
          </GridTableRow>
          {dummyFacilityTypeSettingData.map((FacilityTypeGroupItem, index) => (
            <FacilityTypeTableRow key={`key-${index.toString()}`}>
              {FacilityTypeGroupItem.FacilityTypeItems.map((item, j) => (
                <GridTableRow key={`key-${j.toString()}`} setStriped={false}>
                  {j === 0 && (
                    <FacilityTypeGroupHeader
                      setRow={FacilityTypeGroupItem.FacilityTypeItems.length}
                    >
                      {FacilityTypeGroupItem.FacilityTypeGroup}
                    </FacilityTypeGroupHeader>
                  )}
                  <FacilityTypeGroupTableItem setBackground={false}>
                    {item.facilityType === '' ? (
                      <Paragraph setFontSize="_12" setColor="ash">
                        事業所種別がありません
                      </Paragraph>
                    ) : (
                      <>
                        <FacilityTypeGroupSortIcon name="sort" setSize="_12" />
                        <Paragraph setFontSize="_12">
                          {item.facilityType}
                        </Paragraph>
                      </>
                    )}
                  </FacilityTypeGroupTableItem>
                  <FacilityTypeGroupTableItem setPosition="center">
                    {item.status === undefined ? (
                      '-'
                    ) : (
                      <Icon
                        name={item.status ? 'check' : 'cancel'}
                        setColor={item.status ? 'green' : 'red'}
                        setSize="_12"
                      />
                    )}
                  </FacilityTypeGroupTableItem>
                  <FacilityTypeGroupTableItem
                    setBackground={false}
                    setPosition="center"
                  >
                    {item.status !== undefined && (
                      <ActionAnchor
                        setFontSize="_12"
                        onClick={() => {
                          console.log('編集');
                          setShowFacilityTypeEditModal(true);
                          setFacilityTypeEditModalType('edit');
                          setFacilityTypeStatus(item.status);
                        }}
                      >
                        編集
                      </ActionAnchor>
                    )}
                  </FacilityTypeGroupTableItem>
                </GridTableRow>
              ))}
            </FacilityTypeTableRow>
          ))}
        </FacilityTypeGroupTable>
      </StyledAppCard>
      <FooterControl>
        <Button iconName="check">並び順を登録</Button>
      </FooterControl>
      <FacilityTypeEditModal
        isOpen={showFacilityTypeEditModal}
        onDidDismiss={() => {
          setShowFacilityTypeEditModal(false);
        }}
        modalType={facilityTypeEditModalType}
        onDelete={() => {
          setShowDeleteConfirmModal(true);
        }}
        onRegister={() => {
          setShowRegisterConfirmModal(true);
        }}
        facilityTypeStatus={facilityTypeStatus}
      />
      <DeleteConfirmModal
        isOpen={showDeleteConfirmModal}
        onDidDismiss={() => {
          setShowDeleteConfirmModal(false);
        }}
        message="事業所種別名を削除します。"
        onDelete={async () => console.log('onDelete')}
      />
      <RegisterConfirmModal
        isOpen={showRegisterConfirmModal}
        onDidDismiss={() => {
          setShowRegisterConfirmModal(false);
        }}
        message="状態を「有効」にして登録すると、ユーザーの環境に反映されます。登録してよろしいですか？"
        onRegister={async () => console.log('onRegister')}
        modalTitleIcon="category"
      />
    </StyledSettingTemplate>
  );
};

export default FacilityTypeSetting;
