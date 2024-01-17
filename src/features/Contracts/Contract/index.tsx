import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
import ComFacilityUsingSettingModal from '@organisms/Contract/ComFacilityUsingSettingModel/ComFacilityUsingSettingModel';
import ContractInformationCard from '@organisms/Contract/Contract/ContractInformationCard/ContractInformationCard';
import ErFacilityCard from '@organisms/Contract/Contract/ErFacilityCard/ErFacilityCard';
import IntroductionFeatureCard from '@organisms/Contract/Contract/IntroductionFeatureCard/IntroductionFeatureCard';
import OtherDataImportFacilityCard from '@organisms/Contract/Contract/OtherDataImportFacilityCard/OtherDataImportFacilityCard';
import PatientsAggregateCard from '@organisms/Contract/Contract/PatientsAggregateCard/PatientsAggregateCard';
import RvBonFacilityCard from '@organisms/Contract/Contract/RvBonFacilityCard/RvBonFacilityCard';
import RvFacilityCard from '@organisms/Contract/Contract/RvFacilityCard/RvFacilityCard';
import SeComFacilityCard from '@organisms/Contract/Contract/SeComFacilityCard/SeComFacilityCard';
import VideoStorageCard from '@organisms/Contract/Contract/VideoStorageCard/VideoStorageCard';
import ContractCsvModal from '@organisms/Contract/ContractCsvModal/ContractCsvModal';
import ContractDeleteModal from '@organisms/Contract/ContractDeleteModal/ContractDeleteModal';
import ContractInformationEditModal from '@organisms/Contract/ContractInformationEditModal/ContractInformationEditModal';
import ErFacilityEditModal from '@organisms/Contract/ErFacilityEditModal/ErFacilityEditModal';
import ErFacilityUsingSettingModal from '@organisms/Contract/ErFacilityUsingSettingModel/ErFacilityUsingSettingModal';
import FacilityDetailModal from '@organisms/Contract/FacilityDetailModal/FacilityDetailModal';
import IntroductionFeatureEditModal from '@organisms/Contract/IntroductionFeatureEditModal/IntroductionFeatureEditModal';
import OtherDataImportFacilityModal from '@organisms/Contract/OtherDataImportFacilityModal/OtherDataImportFacilityModal';
import OtherDataImportFacilityUsingSettingModal from '@organisms/Contract/OtherDataImportFacilityUsingSettingModel/OtherDataImportFacilityUsingSettingModel';
import RvFacilityEditModal from '@organisms/Contract/RvFacilityEditModal/RvFacilityEditModal';
import RvFacilityUsingSettingModal from '@organisms/Contract/RvFacilityUsingSettingModal/RvFacilityUsingSettingModal';
import SeComFacilityEditModal from '@organisms/Contract/SeComFacilityEditModal/SeComFacilityEditModal';
import SeFacilityUsingSettingModal from '@organisms/Contract/SeFacilityUsingSettingModel/SeFacilityUsingSettingModel';
import ExecuteConfirmModal from '@organisms/ExecuteConfirmModal/ExecuteConfirmModal';
import { SIZE } from '@styles/constant';
import MainTemplate from '@templates/MainTemplate/MainTemplate';
import eventFactory from '@utils/eventFactory';
import React, { useEffect, useState } from 'react';

/** StyledComponent */
const StyledMainTemplate = Styled(MainTemplate)({
  overflowX: 'scroll',
});
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
const InformationCardContainer = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._16,
});
/** ReactComponent */
const Contract: React.FC = () => {
  console.log('render Contract');
  const [useSystem, setUseSystem] = useState<'pro' | 'com'>('pro');

  // 契約情報
  const [showContractInformationMenu, setShowContractInformationMenu] =
    useState(false);
  function ContractInformationMenuEventRemove() {
    setShowContractInformationMenu(false);
    eventFactory(
      'remove',
      document.getElementById('root'),
      'click',
      ContractInformationMenuEventRemove,
    );
  }
  useEffect(() => {
    if (showContractInformationMenu === true) {
      eventFactory(
        'add',
        document.getElementById('root'),
        'click',
        ContractInformationMenuEventRemove,
      );
    }
  }, [showContractInformationMenu]);
  const [
    showContractInformationEditModal,
    setShowContractInformationEditModal,
  ] = useState(false);

  // 契約情報CSV出力モーダル
  const [showContractCsvModal, setShowContractCsvModal] = useState(false);

  // 導入機能管理
  const [showIntroductionFeatureMenu, setShowIntroductionFeatureMenu] =
    useState(false);
  function ErIntroductionFeatureMenuEventRemove() {
    setShowIntroductionFeatureMenu(false);
    eventFactory(
      'remove',
      document.getElementById('root'),
      'click',
      ErIntroductionFeatureMenuEventRemove,
    );
  }
  useEffect(() => {
    if (showIntroductionFeatureMenu === true) {
      eventFactory(
        'add',
        document.getElementById('root'),
        'click',
        ErIntroductionFeatureMenuEventRemove,
      );
    }
  }, [showIntroductionFeatureMenu]);
  const [
    showIntroductionFeatureEditModal,
    setShowIntroductionFeatureEditModal,
  ] = useState(false);

  // ER事業所
  const [erFacilityStatus, setErFacilityStatus] = useState(false);
  const [showErFacilityMenu, setShowErFacilityMenu] = useState(false);
  function ErFacilityMenuEventRemove() {
    setShowErFacilityMenu(false);
    eventFactory(
      'remove',
      document.getElementById('root'),
      'click',
      ErFacilityMenuEventRemove,
    );
  }
  useEffect(() => {
    if (showErFacilityMenu === true) {
      eventFactory(
        'add',
        document.getElementById('root'),
        'click',
        ErFacilityMenuEventRemove,
      );
    }
  }, [showErFacilityMenu]);
  const [showErFacilityEditModal, setShowErFacilityEditModal] = useState(false);

  const [showFacilityDetailModal, setShowFacilityDetailModal] = useState(false);

  // RV事業所
  const [showRvFacilityMenu, setShowRvFacilityMenu] = useState(false);
  function RvFacilityMenuEventRemove() {
    setShowRvFacilityMenu(false);
    eventFactory(
      'remove',
      document.getElementById('root'),
      'click',
      RvFacilityMenuEventRemove,
    );
  }
  useEffect(() => {
    if (showRvFacilityMenu === true) {
      eventFactory(
        'add',
        document.getElementById('root'),
        'click',
        RvFacilityMenuEventRemove,
      );
    }
  }, [showRvFacilityMenu]);
  const [showRvFacilityEditModal, setShowRvFacilityEditModal] = useState(false);

  const [rvFacilityType, setRvFacilityType] = useState<
    'representativeFacility' | 'facility'
  >('representativeFacility');
  const [rvFacilityModalType, setRvFacilityModalType] = useState<
    'edit' | 'new'
  >('edit');

  // 他社データ取込
  const [showOtherDataImportFacilityMenu, setShowOtherDataImportFacilityMenu] =
    useState(false);
  function OtherDataImportFacilityMenuEventRemove() {
    setShowOtherDataImportFacilityMenu(false);
    eventFactory(
      'remove',
      document.getElementById('root'),
      'click',
      OtherDataImportFacilityMenuEventRemove,
    );
  }
  useEffect(() => {
    if (showOtherDataImportFacilityMenu === true) {
      eventFactory(
        'add',
        document.getElementById('root'),
        'click',
        OtherDataImportFacilityMenuEventRemove,
      );
    }
  }, [showOtherDataImportFacilityMenu]);
  const [
    showOtherDataImportFacilityModal,
    setShowOtherDataImportFacilityModal,
  ] = useState(false);

  // Com事業所
  const [seComFacilityStatus, setSeComFacilityStatus] = useState(false);
  const [showComFacilityMenu, setShowComFacilityMenu] = useState(false);
  function ComFacilityMenuEventRemove() {
    setShowComFacilityMenu(false);
    eventFactory(
      'remove',
      document.getElementById('root'),
      'click',
      ComFacilityMenuEventRemove,
    );
  }
  useEffect(() => {
    if (showComFacilityMenu === true) {
      eventFactory(
        'add',
        document.getElementById('root'),
        'click',
        ComFacilityMenuEventRemove,
      );
    }
  }, [showComFacilityMenu]);
  // SE事業所
  const [showSeFacilityMenu, setShowSeFacilityMenu] = useState(false);
  function SeFacilityMenuEventRemove() {
    setShowSeFacilityMenu(false);
    eventFactory(
      'remove',
      document.getElementById('root'),
      'click',
      SeFacilityMenuEventRemove,
    );
  }
  useEffect(() => {
    if (showSeFacilityMenu === true) {
      eventFactory(
        'add',
        document.getElementById('root'),
        'click',
        SeFacilityMenuEventRemove,
      );
    }
  }, [showSeFacilityMenu]);
  const [showSeFacilityEditModal, setShowSeFacilityEditModal] = useState(false);

  const [seComFacilityModalType, setSeComFacilityModalType] = useState<
    'new' | 'edit'
  >('new');

  const [erFacilityModalType, setErFacilityModalType] = useState<
    'new' | 'edit'
  >('new');

  // 契約利用停止モーダル
  const [showContractDeleteModal, setShowContractDeleteModal] = useState(false);

  // ER事業所停止・開始モーダル
  const [showErFacilityUsingSettingModal, setShowErFacilityUsingSettingModal] =
    useState(false);

  // RV事業所利用停止モーダル
  const [showRvFacilityUsingSettingModal, setShowRvFacilityUsingSettingModal] =
    useState(false);
  const [useFacilityInput, setUseFacilityInput] = useState(false);
  // SE事業所停止・開始モーダル
  const [showSeFacilityUsingSettingModal, setShowSeFacilityUsingSettingModal] =
    useState(false);
  // Com事業所停止・開始モーダル
  const [
    showComFacilityUsingSettingModal,
    setShowComFacilityUsingSettingModal,
  ] = useState(false);

  const [facilityType, setFacilityType] = useState<
    'er' | 'rv' | 'seCom' | 'other'
  >('er');
  // ER事業所停止・開始モーダル
  const [
    showOtherDataImportFacilityUsingSettingModal,
    setShowOtherDataImportFacilityUsingSettingModal,
  ] = useState(false);

  // 他社データ取込み用事業所
  const [
    otherDataImportFacilityModalType,
    setOtherDataImportFacilityModalType,
  ] = useState<'new' | 'edit'>('new');

  // SE事業所編集モーダル 事業所タイプタイプ変更の表示有無
  const [useFacilityTypeSetting, setUseFacilityTypeSetting] = useState(false);
  const [showExecuteConfirmModal, setShowExecuteConfirmModal] = useState(false);
  return (
    <StyledMainTemplate>
      <>
        <ContentHeader>
          <ContentTitle>
            <Icon name="facility" setSize="_24" />
            <Paragraph setFontSize="_24">契約詳細</Paragraph>
          </ContentTitle>
          <Button
            iconName="download"
            onClick={() => setShowContractCsvModal(true)}
          >
            CSV出力
          </Button>
        </ContentHeader>
        <InformationCardContainer>
          <ContractInformationCard
            onContractInformationMenu={() =>
              setShowContractInformationMenu(true)
            }
            openToolTip={showContractInformationMenu}
            onEdit={() => {
              setShowContractInformationEditModal(true);
            }}
            contractDelete={() => {
              setShowContractDeleteModal(true);
            }}
            useSystem={useSystem}
          />
          <IntroductionFeatureCard
            useSystem={useSystem}
            onEdit={() => {
              setShowIntroductionFeatureEditModal(true);
            }}
          />
          <ErFacilityCard
            onErFacilityMenu={() => setShowErFacilityMenu(true)}
            openToolTip={showErFacilityMenu}
            onDetailModal={() => {
              setShowFacilityDetailModal(true);
              setFacilityType('er');
            }}
            onAdd={() => setShowErFacilityEditModal(true)}
            onUsingSetting={() => {
              setShowErFacilityUsingSettingModal(true);
            }}
            erFacilityRadioSelect={setErFacilityStatus}
            useSystem={useSystem}
          />
          <RvFacilityCard
            onRvFacilityMenu={() => setShowRvFacilityMenu(true)}
            openToolTip={showRvFacilityMenu}
            onRepresentativeFacilityAdd={() => {
              setShowRvFacilityEditModal(true);
              setRvFacilityType('representativeFacility');
              setRvFacilityModalType('new');
              setUseFacilityInput(true);
            }}
            onRepresentativeFacilityEdit={() => {
              setShowRvFacilityEditModal(true);
              setRvFacilityType('representativeFacility');
              setRvFacilityModalType('edit');
              setUseFacilityInput(false);
            }}
            onFacilityAdd={() => {
              setShowRvFacilityEditModal(true);
              setRvFacilityType('facility');
              setRvFacilityModalType('new');
              setUseFacilityInput(true);
            }}
            onRvUsingSetting={() => {
              setShowRvFacilityUsingSettingModal(true);
            }}
            onDetailModal={() => {
              setShowFacilityDetailModal(true);
              setFacilityType('rv');
              console.log('kita');
            }}
            useSystem={useSystem}
          />
          <RvBonFacilityCard />
          <SeComFacilityCard
            onAdd={() => {
              setShowSeFacilityEditModal(true);
              setSeComFacilityModalType('new');
              setUseFacilityTypeSetting(false);
            }}
            useSystem={useSystem}
            onSeComFacilityMenu={() => setShowSeFacilityMenu(true)}
            openToolTip={showSeFacilityMenu}
            onDetailModal={() => {
              setShowFacilityDetailModal(true);
              setFacilityType('seCom');
            }}
            onSeUsingSetting={() => {
              setShowSeFacilityUsingSettingModal(true);
            }}
            onComUsingSetting={() => {
              setShowComFacilityUsingSettingModal(true);
            }}
            seComFacilityRadioSelect={setSeComFacilityStatus}
          />
          <VideoStorageCard />
          <OtherDataImportFacilityCard
            onAdd={() => {
              setShowOtherDataImportFacilityModal(true);
              setOtherDataImportFacilityModalType('new');
            }}
            onOtherDataImportFacilityMenu={() =>
              setShowOtherDataImportFacilityMenu(true)
            }
            openToolTip={showOtherDataImportFacilityMenu}
            useSystem={useSystem}
            onDetailModal={() => {
              setShowFacilityDetailModal(true);
              setFacilityType('other');
            }}
            onUsingSetting={() => {
              setShowOtherDataImportFacilityUsingSettingModal(true);
            }}
            otherDataImportFacilityRadioSelect={setErFacilityStatus}
          />
          <PatientsAggregateCard />
        </InformationCardContainer>
        {/* モーダル */}
        <ContractInformationEditModal
          isOpen={showContractInformationEditModal}
          onDidDismiss={() => setShowContractInformationEditModal(false)}
          useSystem={useSystem}
          onClick={() => setShowExecuteConfirmModal(true)}
        />
        <ContractCsvModal
          isOpen={showContractCsvModal}
          onDidDismiss={() => setShowContractCsvModal(false)}
          useSystem={useSystem}
        />
        <IntroductionFeatureEditModal
          isOpen={showIntroductionFeatureEditModal}
          onDidDismiss={() => setShowIntroductionFeatureEditModal(false)}
          useSystem={useSystem}
        />
        {/* 事業所詳細モーダル */}
        <FacilityDetailModal
          facilityType={facilityType}
          onEdit={() => {
            switch (facilityType) {
              case 'er':
                setShowErFacilityEditModal(true);
                setErFacilityModalType('edit');
                break;
              case 'rv':
                setShowRvFacilityEditModal(true);
                setRvFacilityType('facility');
                setRvFacilityModalType('edit');
                setUseFacilityInput(true);
                break;
              case 'seCom':
                setShowSeFacilityEditModal(true);
                setSeComFacilityModalType('edit');
                setUseFacilityTypeSetting(true);
                break;
              case 'other':
                setShowOtherDataImportFacilityModal(true);
                setOtherDataImportFacilityModalType('edit');
                break;
              default:
                console.log(' FacilityDetailModal edit');
            }
          }}
          isOpen={showFacilityDetailModal}
          onDidDismiss={() => setShowFacilityDetailModal(false)}
          useSystem={useSystem}
        />
        {/* 事業所Editモーダル */}
        <ErFacilityEditModal
          isOpen={showErFacilityEditModal}
          onDidDismiss={() => setShowErFacilityEditModal(false)}
          useSystem={useSystem}
          useStaffInput={false}
          erFacilityModalType={erFacilityModalType}
          proFamilySetting
          comFamilySetting="single"
        />
        <RvFacilityEditModal
          isOpen={showRvFacilityEditModal}
          onDidDismiss={() => setShowRvFacilityEditModal(false)}
          useSystem={useSystem}
          rvFacilityModalType={rvFacilityModalType}
          rvFacilityType={rvFacilityType}
          useFacilityInput={useFacilityInput}
          proFamilySetting
          comFamilySetting="single"
        />
        <OtherDataImportFacilityModal
          isOpen={showOtherDataImportFacilityModal}
          onDidDismiss={() => setShowOtherDataImportFacilityModal(false)}
          useSystem={useSystem}
          modalType={otherDataImportFacilityModalType}
        />
        <SeComFacilityEditModal
          isOpen={showSeFacilityEditModal}
          onDidDismiss={() => setShowSeFacilityEditModal(false)}
          useSystem={useSystem}
          seComFacilityModalType={seComFacilityModalType}
          proFamilySetting
          comFamilySetting="single"
          useFacilityTypeSetting={useFacilityTypeSetting}
        />
        {/* 契約停止(全利用停止)モーダル */}
        <ContractDeleteModal
          isOpen={showContractDeleteModal}
          onDidDismiss={() => setShowContractDeleteModal(false)}
        />
        {/* ER事業所利用・停止モーダル */}
        <ErFacilityUsingSettingModal
          isOpen={showErFacilityUsingSettingModal}
          onDidDismiss={() => setShowErFacilityUsingSettingModal(false)}
          facilityStatus={erFacilityStatus}
        />
        {/* RV事業所利用・停止モーダル */}
        <RvFacilityUsingSettingModal
          isOpen={showRvFacilityUsingSettingModal}
          onDidDismiss={() => setShowRvFacilityUsingSettingModal(false)}
        />
        {/* SE事業所利用・停止モーダル */}
        <SeFacilityUsingSettingModal
          isOpen={showSeFacilityUsingSettingModal}
          onDidDismiss={() => setShowSeFacilityUsingSettingModal(false)}
          facilityStatus={seComFacilityStatus}
        />
        {/* Com事業所利用・停止モーダル */}
        <ComFacilityUsingSettingModal
          isOpen={showComFacilityUsingSettingModal}
          onDidDismiss={() => setShowComFacilityUsingSettingModal(false)}
          facilityStatus={seComFacilityStatus}
        />
        {/* 他社データ取込事業所利用・停止モーダル */}
        <OtherDataImportFacilityUsingSettingModal
          isOpen={showOtherDataImportFacilityUsingSettingModal}
          onDidDismiss={() =>
            setShowOtherDataImportFacilityUsingSettingModal(false)
          }
          facilityStatus={erFacilityStatus}
        />
        {/* 開発切り替え */}
        <ActionAnchor onClick={() => setUseSystem('pro')}>
          Proの場合
        </ActionAnchor>
        <ActionAnchor onClick={() => setUseSystem('com')}>
          Comの場合
        </ActionAnchor>
        {/* ロゴ画像 削除の確認モーダル */}
        <ExecuteConfirmModal
          isOpen={showExecuteConfirmModal}
          onDidDismiss={() => {
            setShowExecuteConfirmModal(false);
          }}
          modalTitleIcon="clip"
          message="添付済みのロゴ画像を削除します。登録を押すと現在の変更内容が反映されます。"
        />
      </>
    </StyledMainTemplate>
  );
};

export default Contract;
