import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
import ContractInformationRegisterCard from '@organisms/Contract/ContractRegister/ContractInformationRegisterCard/ContractInformationRegisterCard';
import ErFacilityRegisterCard from '@organisms/Contract/ContractRegister/ErFacilityRegisterCard/ErFacilityRegisterCard';
import IntroductionFeatureRegisterCard from '@organisms/Contract/ContractRegister/IntroductionFeatureRegisterCard/IntroductionFeatureRegisterCard';
import RvFacilityRegisterCard from '@organisms/Contract/ContractRegister/RvFacilityRegisterCard/RvFacilityRegisterCard';
import SeFacilityRegisterCard from '@organisms/Contract/ContractRegister/SeComFacilityRegisterCard/SeComFacilityRegisterCard';
import ContractRegisterErrorModal from '@organisms/Contract/ContractRegisterErrorModal/ContractRegisterErrorModal';
import ErFacilityEditModal from '@organisms/Contract/ErFacilityEditModal/ErFacilityEditModal';
import RvFacilityEditModal from '@organisms/Contract/RvFacilityEditModal/RvFacilityEditModal';
import SeComFacilityEditModal from '@organisms/Contract/SeComFacilityEditModal/SeComFacilityEditModal';
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

// sample
const FooterControl = Styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

/** ReactComponent */
const Contract: React.FC = () => {
  console.log('render Contract');
  const [useSystem, setUseSystem] = useState<'pro' | 'com'>('pro');
  const [proFamilySetting, setProFamilySetting] = useState(false);
  const [comFamilySetting, setComFamilySetting] = useState<
    'none' | 'double' | 'single'
  >('none');
  const [showErFacilityEditModal, setShowErFacilityEditModal] = useState(false);
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
  const [useFacilityInput, setUseFacilityInput] = useState(false);

  const [showSeFacilityEditModal, setShowSeFacilityEditModal] = useState(false);

  const [erFacilityModalType, setErFacilityModalType] = useState<
    'new' | 'edit'
  >('new');
  const [seComFacilityModalType, setSeComFacilityModalType] = useState<
    'new' | 'edit'
  >('new');
  const [rvFacilityType, setRvFacilityType] = useState<
    'representativeFacility' | 'facility'
  >('representativeFacility');
  const [rvFacilityModalType, setRvFacilityModalType] = useState<
    'edit' | 'new'
  >('edit');
  const [showContractRegisterErrorModal, setShowContractRegisterErrorModal] =
    useState(false);

  // 事業所編集モーダルで削除ボタンの表示有無
  const [useDelete, setUseDelete] = useState(false);

  return (
    <StyledMainTemplate>
      <>
        <ContentHeader>
          <ContentTitle>
            <Icon name="entry" setSize="_24" />
            <Paragraph setFontSize="_24">
              {useSystem === 'pro' && '法人契約追加'}
              {useSystem === 'com' && '地域契約追加'}
            </Paragraph>
          </ContentTitle>
        </ContentHeader>
        <ContractInformationRegisterCard
          useSystem={useSystem}
          proFamilySetting={setProFamilySetting}
          setComFamilySetting={setComFamilySetting}
        />
        <IntroductionFeatureRegisterCard useSystem={useSystem} />
        <ErFacilityRegisterCard
          onEdit={() => {
            setShowErFacilityEditModal(true);
            setErFacilityModalType('edit');
            setUseDelete(true);
          }}
          onAdd={() => {
            setShowErFacilityEditModal(true);
            setErFacilityModalType('new');
            setUseDelete(false);
          }}
          useSystem={useSystem}
        />
        <RvFacilityRegisterCard
          onRvFacilityMenu={() => setShowRvFacilityMenu(true)}
          openToolTip={showRvFacilityMenu}
          onRepresentativeFacilityAdd={() => {
            setShowRvFacilityEditModal(true);
            setRvFacilityType('representativeFacility');
            setRvFacilityModalType('new');
            setUseFacilityInput(true);
            setUseDelete(false);
          }}
          onRepresentativeFacilityEdit={() => {
            setShowRvFacilityEditModal(true);
            setRvFacilityType('representativeFacility');
            setRvFacilityModalType('edit');
            setUseFacilityInput(false);
            setUseDelete(true);
          }}
          onFacilityAdd={() => {
            setShowRvFacilityEditModal(true);
            setRvFacilityType('facility');
            setRvFacilityModalType('new');
            setUseFacilityInput(true);
            setUseDelete(false);
          }}
          onFacilityEdit={() => {
            setShowRvFacilityEditModal(true);
            setRvFacilityType('facility');
            setRvFacilityModalType('edit');
            setUseFacilityInput(true);
            setUseDelete(true);
          }}
          useSystem={useSystem}
        />
        <SeFacilityRegisterCard
          useSystem={useSystem}
          onAdd={() => {
            setShowSeFacilityEditModal(true);
            setSeComFacilityModalType('new');
            setUseSystem(useSystem);
            setUseDelete(false);
          }}
          onEdit={() => {
            setShowSeFacilityEditModal(true);
            setSeComFacilityModalType('edit');
            setUseSystem(useSystem);
            setUseDelete(true);
          }}
        />

        <FooterControl>
          <Button
            onClick={() => setShowContractRegisterErrorModal(true)}
            iconName="check"
          >
            登録
          </Button>
        </FooterControl>

        {useSystem === 'com' && 'ま'}
        {/* 開発切り替え */}
        <ActionAnchor onClick={() => setUseSystem('pro')}>
          Proの場合
        </ActionAnchor>
        <ActionAnchor onClick={() => setUseSystem('com')}>
          Comの場合
        </ActionAnchor>
      </>
      <ErFacilityEditModal
        isOpen={showErFacilityEditModal}
        onDidDismiss={() => setShowErFacilityEditModal(false)}
        useSystem={useSystem}
        useStaffInput
        erFacilityModalType={erFacilityModalType}
        useDelete={useDelete}
        proFamilySetting={proFamilySetting}
        comFamilySetting={comFamilySetting}
      />
      <RvFacilityEditModal
        isOpen={showRvFacilityEditModal}
        onDidDismiss={() => setShowRvFacilityEditModal(false)}
        useSystem={useSystem}
        rvFacilityModalType={rvFacilityModalType}
        rvFacilityType={rvFacilityType}
        useStaffInput
        useFacilityInput={useFacilityInput}
        useDelete={useDelete}
        proFamilySetting={proFamilySetting}
        comFamilySetting={comFamilySetting}
      />
      <SeComFacilityEditModal
        isOpen={showSeFacilityEditModal}
        onDidDismiss={() => setShowSeFacilityEditModal(false)}
        useSystem={useSystem}
        seComFacilityModalType={seComFacilityModalType}
        useStaffInput
        useDelete={useDelete}
        proFamilySetting={proFamilySetting}
        comFamilySetting={comFamilySetting}
        useFacilityTypeSetting={false}
      />
      <ContractRegisterErrorModal
        isOpen={showContractRegisterErrorModal}
        onDidDismiss={() => setShowContractRegisterErrorModal(false)}
      />
    </StyledMainTemplate>
  );
};

export default Contract;
