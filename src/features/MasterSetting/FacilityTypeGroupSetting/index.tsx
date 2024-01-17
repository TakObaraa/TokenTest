import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useDroppable,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Styled from '@emotion/styled';
import AppCard from '@organisms/App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { COLOR, SIZE } from '@styles/constant';
import SettingTemplate from '@templates/SettingTemplate/SettingTemplate';
import React, { HTMLAttributes, useState } from 'react';
import DeleteConfirmModal from '../shared/DeleteConfirmModal';
import ConfirmModal from './ConfirmModal';
import FacilityTypeGroupEditModal from './FacilityTypeGroupEditModal';

type GroupNameType = {
  id: string;
  groupName: string;
};
const dummyFacilityTypeGroupNameData: GroupNameType[] = [
  {
    id: '1',
    groupName: '医療機関・薬局',
  },
  {
    id: '2',
    groupName: '事業所サービス',
  },
  {
    id: '3',
    groupName: '居宅サービス',
  },
  {
    id: '4',
    groupName: '居住系サービス',
  },
  {
    id: '5',
    groupName: '障がいサービス',
  },
  {
    id: '6',
    groupName: '自治体系',
  },
  {
    id: '7',
    groupName: 'その他',
  },
  {
    id: '8',
    groupName: 'テストサービス',
  },
];

/** StyledComponent */
const StyledSettingTemplate = Styled(SettingTemplate)({
  width: '100%',
});
const StyledAppCard = Styled(AppCard)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
// const StyledSortableItem = Styled(SortableItem)({
//   '&:nth-of-type(2n)': {
//     backgroundColor: COLOR.BACKGROUND.GRAY_10,
//   },
//   '&:nth-of-type(2n-1)': {
//     backgroundColor: COLOR.BACKGROUND.GRAY_0,
//   },
// });
const TagSortIcon = Styled(Icon)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._8} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0}`,
});
const FacilityTypeGroupTable = Styled(GridTable)({});
const FacilityTypeGroupHeaderRow = Styled(GridTableRow)({
  display: 'grid',
  gridTemplateColumns: '1fr 64px',
});
const FacilityTypeGroupRow = Styled(GridTableRow)<{ isDrag?: boolean }>(
  {
    display: 'grid',
    gridTemplateColumns: '1fr 64px',
    borderBottom: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
    ':last-of-type': {
      borderBottom: 'none',
    },
  },
  ({ isDrag }) => ({
    opacity: isDrag === true ? '0.5' : undefined,
  }),
);
const FacilityTypeGroupItem = Styled(GridTableItem)({
  borderRight: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
  cursor: 'pointer',
  ':last-of-type': {
    borderRight: 'none',
  },
});
const FacilityTypeGroupTableHeaderItem = Styled(GridTableHeaderItem)({
  outline: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
  ':last-child': {
    border: 'none',
  },
});
const FooterControl = Styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

// ソート用の要素
const SortableItem: React.FC<
  {
    id: UniqueIdentifier;
    item: GroupNameType;
    isDrag?: boolean;
    setShowFacilityTypeGroupEditModal: React.Dispatch<
      React.SetStateAction<boolean>
    >;
    setModalType: React.Dispatch<React.SetStateAction<'edit' | 'new'>>;
  } & Pick<HTMLAttributes<HTMLDivElement>, 'className'>
> = ({
  id,
  item,
  isDrag,
  className,
  setShowFacilityTypeGroupEditModal,
  setModalType,
}) => {
  const { setNodeRef, transform, transition, attributes, listeners } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <FacilityTypeGroupRow
      ref={setNodeRef}
      className={className}
      style={style}
      isDrag={isDrag}
      setStriped={false}
    >
      <FacilityTypeGroupItem
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...listeners}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes}
      >
        <TagSortIcon name="sort" setSize="_12" />
        {item.groupName}
      </FacilityTypeGroupItem>
      <FacilityTypeGroupItem setPosition="center">
        <ActionAnchor
          setFontSize="_12"
          onClick={() => {
            setModalType('edit');
            setShowFacilityTypeGroupEditModal(true);
          }}
        >
          編集
        </ActionAnchor>
      </FacilityTypeGroupItem>
    </FacilityTypeGroupRow>
  );
};

/** ReactComponent */
const FacilityTypeGroupSetting: React.FC = () => {
  const [showFacilityTypeGroupEditModal, setShowFacilityTypeGroupEditModal] =
    useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [modalType, setModalType] = useState<'new' | 'edit'>('new');

  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

  console.log('render FacilityTypeGroupSetting');

  // ソート系
  const [isDragItem, setDragItem] = useState<UniqueIdentifier | null>(null);
  const { setNodeRef } = useDroppable({ id: 'FacilityTypeGroupSettingSort' });
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const sensors = useSensors(mouseSensor, touchSensor);
  const [sortableItems, setSortableItems] = useState(
    dummyFacilityTypeGroupNameData,
  );
  function findIndexesWithId(arr: GroupNameType[], id: UniqueIdentifier) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  return (
    <StyledSettingTemplate
      activeMenu="facilityTypeGroup"
      pageTitle="事業所種別グループ管理"
      headerRight={
        <Button
          iconName="entry"
          onClick={() => {
            setModalType('new');
            setShowFacilityTypeGroupEditModal(true);
          }}
        >
          グループ追加
        </Button>
      }
    >
      <StyledAppCard
        cardTitle="事業所種別グループ一覧"
        cardTitleIcon="category"
      >
        <FacilityTypeGroupTable setBorder={false}>
          <FacilityTypeGroupHeaderRow>
            <FacilityTypeGroupTableHeaderItem>
              事業所種別グループ名
            </FacilityTypeGroupTableHeaderItem>
            <FacilityTypeGroupTableHeaderItem setPosition="center">
              編集
            </FacilityTypeGroupTableHeaderItem>
          </FacilityTypeGroupHeaderRow>
          <DndContext
            onDragStart={({ active }) => {
              setDragItem(active.id);
            }}
            onDragEnd={(e) => {
              const overId = e.over?.id;
              if (overId == null) {
                setDragItem(null);
                return;
              }

              if (e.active.id !== overId) {
                const oldIndex = findIndexesWithId(sortableItems, e.active.id);
                const newIndex = findIndexesWithId(sortableItems, overId);
                setSortableItems(arrayMove(sortableItems, oldIndex, newIndex));
              }
              setDragItem(null);
            }}
            sensors={sensors}
          >
            <div ref={setNodeRef}>
              <SortableContext
                items={sortableItems.map((item) => ({
                  id: item.id,
                }))}
                strategy={rectSortingStrategy}
              >
                {sortableItems.map((item) => (
                  <SortableItem
                    key={item.id}
                    id={item.id}
                    item={item}
                    isDrag={isDragItem === item.id}
                    setModalType={setModalType}
                    setShowFacilityTypeGroupEditModal={
                      setShowFacilityTypeGroupEditModal
                    }
                  />
                ))}
              </SortableContext>
            </div>

            <DragOverlay>
              {isDragItem ? (
                <SortableItem
                  id={isDragItem}
                  item={
                    sortableItems[findIndexesWithId(sortableItems, isDragItem)]
                  }
                  setModalType={setModalType}
                  setShowFacilityTypeGroupEditModal={
                    setShowFacilityTypeGroupEditModal
                  }
                />
              ) : null}
            </DragOverlay>
          </DndContext>
        </FacilityTypeGroupTable>
      </StyledAppCard>
      <FooterControl>
        <Button iconName="check">並び順を登録</Button>
      </FooterControl>
      <FacilityTypeGroupEditModal
        isOpen={showFacilityTypeGroupEditModal}
        onDidDismiss={() => {
          setShowFacilityTypeGroupEditModal(false);
        }}
        modalType={modalType}
        onDelete={() => {
          setShowConfirmModal(true);
        }}
      />
      <ConfirmModal
        isOpen={showConfirmModal}
        onDidDismiss={() => {
          setShowConfirmModal(false);
        }}
        modalTitle="削除の確認"
        setIcon="category"
        message="グループ内に有効の事業所種別名が存在するため削除できません。"
        modalType="dialog"
      />
      <DeleteConfirmModal
        isOpen={showDeleteConfirmModal}
        onDidDismiss={() => {
          setShowDeleteConfirmModal(false);
        }}
        message="事業所種別グループを削除します。"
        onDelete={async () => console.log('onDelete')}
      />
      <ActionAnchor onClick={() => setShowDeleteConfirmModal(true)}>
        削除確認モーダル
      </ActionAnchor>
    </StyledSettingTemplate>
  );
};

export default FacilityTypeGroupSetting;
