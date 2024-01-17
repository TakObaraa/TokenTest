import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import Paragraph from '@atoms/Paragraph/Paragraph';
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
import AppCard, { AppCardMessage } from '@organisms/App/AppCard/AppCard';
import GridTable, {
  GridTableHeaderItem,
  GridTableItem,
  GridTableRow,
} from '@organisms/GridTable/GridTable';
import { COLOR, SIZE } from '@styles/constant';
import SettingTemplate from '@templates/SettingTemplate/SettingTemplate';
import React, { HTMLAttributes, useState } from 'react';
import DeleteConfirmModal from '../shared/DeleteConfirmModal';
import RegisterConfirmModal from '../shared/RegisterConfirmModal';
import ContractTypeEditModal from './ContractTypeEditModal';

type ContractSettingType = {
  id: string;
  contractType: string;
  status: boolean;
};
const dummyContractTypeSettingData: ContractSettingType[] = [
  {
    id: '1',
    contractType: '社会福祉法人',
    status: true,
  },
  {
    id: '2',
    contractType: '医療法人',
    status: true,
  },
  {
    id: '3',
    contractType: '株式会社',
    status: true,
  },
  {
    id: '4',
    contractType: '特定非営利活動法人',
    status: true,
  },
  {
    id: '5',
    contractType: '生活共同組合',
    status: true,
  },
  {
    id: '6',
    contractType: '農業共同組合',
    status: true,
  },
  {
    id: '7',
    contractType: '自治体',
    status: true,
  },
  {
    id: '8',
    contractType: '社会医療法人',
    status: true,
  },
  {
    id: '9',
    contractType: '一般社団法人',
    status: true,
  },
  {
    id: '10',
    contractType: '一般財団法人',
    status: false,
  },
  {
    id: '11',
    contractType: '合同会社',
    status: false,
  },
  {
    id: '12',
    contractType: '学校法人',
    status: false,
  },
  {
    id: '13',
    contractType: 'その他',
    status: false,
  },
];

/** StyledComponent */
const StyledSettingTemplate = Styled(SettingTemplate)({
  width: '100%',
});
const StyledAppCard = Styled(AppCard)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
});
const ContractTypeHeaderRow = Styled(GridTableRow)({
  display: 'grid',
  gridTemplateColumns: '1fr 80px 60px',
});
const ContractTypeGridTableHeaderItem = Styled(GridTableHeaderItem)({
  outline: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
});
const ContractTypeRow = Styled(GridTableRow)<{ isDrag?: boolean }>(
  {
    display: 'grid',
    cursor: 'pointer',
    gridTemplateColumns: '1fr 80px 60px',
    borderBottom: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
    ':last-child': {
      border: 'none',
    },
  },
  ({ isDrag }) => ({
    opacity: isDrag ? '0.5' : undefined,
  }),
);
const ContractTypeItem = Styled(GridTableItem)({
  borderRight: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
  ':last-of-type': {
    borderRight: 'none',
  },
});
const TagSortIcon = Styled(Icon)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._8} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0}`,
});
const FooterControl = Styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

// ソート用の要素
const SortableItem: React.FC<
  {
    id: UniqueIdentifier;
    item: ContractSettingType;
    isDrag?: boolean;
    setModalType: React.Dispatch<React.SetStateAction<'edit' | 'new'>>;
    setShowContractTypeEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    setContractTypeStatus: React.Dispatch<React.SetStateAction<boolean>>;
  } & Pick<HTMLAttributes<HTMLDivElement>, 'className'>
> = ({
  id,
  item,
  isDrag,
  className,
  setModalType,
  setShowContractTypeEditModal,
  setContractTypeStatus,
}) => {
  const { setNodeRef, transform, transition, attributes, listeners } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <ContractTypeRow
      ref={setNodeRef}
      className={className}
      style={style}
      isDrag={isDrag}
      setStriped={false}
    >
      <ContractTypeItem
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...listeners}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes}
      >
        <TagSortIcon name="sort" setSize="_12" />
        {item.contractType}
      </ContractTypeItem>
      <ContractTypeItem
        setPosition="center"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...listeners}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes}
      >
        <Icon
          name={item.status ? 'check' : 'cancel'}
          setColor={item.status ? 'green' : 'red'}
          setSize="_12"
        />
      </ContractTypeItem>
      <ContractTypeItem setPosition="center">
        <ActionAnchor
          onClick={() => {
            setModalType('edit');
            setShowContractTypeEditModal(true);
            setContractTypeStatus(item.status);
          }}
          setFontSize="_12"
        >
          編集
        </ActionAnchor>
      </ContractTypeItem>
    </ContractTypeRow>
  );
};

/** ReactComponent */
const ContractTypeSetting: React.FC = () => {
  const [showContractTypeEditModal, setShowContractTypeEditModal] =
    useState(false);

  const [
    showContractTypeRegisterConfirmModal,
    setShowContractTypeRegisterConfirmModal,
  ] = useState(false);

  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

  const [modalType, setModalType] = useState<'new' | 'edit'>('new');
  const [contractTypeStatus, setContractTypeStatus] = useState(false);

  console.log('render ContractTypeSetting');

  // ソート系
  const [isDragItem, setDragItem] = useState<UniqueIdentifier | null>(null);
  const { setNodeRef } = useDroppable({ id: 'ContractTypeSettingSort' });
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const sensors = useSensors(mouseSensor, touchSensor);
  const [sortableItems, setSortableItems] = useState(
    dummyContractTypeSettingData,
  );
  function findIndexesWithId(arr: ContractSettingType[], id: UniqueIdentifier) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  return (
    <StyledSettingTemplate
      activeMenu="contractType"
      pageTitle="法人種別管理"
      headerRight={
        <Button
          iconName="entry"
          onClick={() => {
            setModalType('new');
            setShowContractTypeEditModal(true);
          }}
        >
          法人種別追加
        </Button>
      }
    >
      <StyledAppCard cardTitle="法人種別一覧" cardTitleIcon="category">
        <AppCardMessage>
          <Paragraph setFontSize="_12">
            追加・編集・削除・並び順変更等を行うと、変更内容がユーザーの画面に反映されます。
          </Paragraph>
        </AppCardMessage>
        <GridTable setBorder={false}>
          <ContractTypeHeaderRow>
            <ContractTypeGridTableHeaderItem>
              法人種別名
            </ContractTypeGridTableHeaderItem>
            <ContractTypeGridTableHeaderItem setPosition="center">
              状態
            </ContractTypeGridTableHeaderItem>
            <ContractTypeGridTableHeaderItem setPosition="center">
              編集
            </ContractTypeGridTableHeaderItem>
          </ContractTypeHeaderRow>

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
                    setShowContractTypeEditModal={setShowContractTypeEditModal}
                    setContractTypeStatus={setContractTypeStatus}
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
                  setShowContractTypeEditModal={setShowContractTypeEditModal}
                  setContractTypeStatus={setContractTypeStatus}
                />
              ) : null}
            </DragOverlay>
          </DndContext>
        </GridTable>
      </StyledAppCard>
      <FooterControl>
        <Button iconName="check">並び順を登録</Button>
      </FooterControl>
      <ContractTypeEditModal
        isOpen={showContractTypeEditModal}
        onDidDismiss={() => setShowContractTypeEditModal(false)}
        modalType={modalType}
        onRegister={() => {
          setShowContractTypeRegisterConfirmModal(true);
        }}
        onDelete={() => {
          setShowDeleteConfirmModal(true);
        }}
        contractTypeStatus={contractTypeStatus}
      />
      <DeleteConfirmModal
        isOpen={showDeleteConfirmModal}
        onDidDismiss={() => {
          setShowDeleteConfirmModal(false);
        }}
        message="法人種別名を削除します。"
        onDelete={async () => console.log('onDelete')}
      />
      <RegisterConfirmModal
        isOpen={showContractTypeRegisterConfirmModal}
        onDidDismiss={() => setShowContractTypeRegisterConfirmModal(false)}
        message="状態を「有効」にして登録すると、ユーザーの環境に反映されます。登録してよろしいですか？"
        onRegister={async () => console.log('onRegister')}
        modalTitleIcon="category"
      />
    </StyledSettingTemplate>
  );
};

export default ContractTypeSetting;
