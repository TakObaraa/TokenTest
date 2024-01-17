// 後で消すPage

import Styled from '@emotion/styled';
import { SIZE } from '@styles/constant';
import { getRoutePath } from '@utils/routes/routes';
import React from 'react';
import { Link } from 'react-router-dom';

const Wrapper = Styled('div')({
  padding: '16px',
});

const Title = Styled('h1')({
  marginBottom: `${SIZE.MARGIN._24}`,
});

const SystemList = Styled('ul')({
  margin: '0 0 16px',
});
const Li = Styled('li')({
  lineHeight: '1.42',
});

const SettingCategory = Styled('p')({
  margin: '0 0 4px 16px',
});

const SiteMap: React.FC = () => (
  <Wrapper>
    <Title>サイトマップ</Title>

    <SystemList>
      <Li>
        <Link to={getRoutePath('Root')}>ホーム</Link>
      </Li>
      <Li>
        <Link to={getRoutePath('SiteMap')}>サイトマップ</Link>
      </Li>
    </SystemList>

    <SettingCategory>契約管理</SettingCategory>
    <SystemList>
      <Li>
        <Link to={getRoutePath('ContractsList')}>ダッシュボード</Link>
      </Li>
      <Li>
        <Link to={getRoutePath('Contract')}>契約詳細</Link>
      </Li>
      <Li>
        <Link to={getRoutePath('ContractRegister')}>法人契約追加</Link>
      </Li>
      <Li>
        <Link to={getRoutePath('StaffManager')}>スタッフ管理</Link>
      </Li>
      <Li>
        <Link to={getRoutePath('OtherDataImport')}>他社データ取込</Link>
      </Li>
    </SystemList>

    <SettingCategory>集計</SettingCategory>
    <SystemList>
      <Li>
        <Link to={getRoutePath('AccessTotalling')}>アクセス集計</Link>
      </Li>
      <Li>
        <Link to={getRoutePath('AccessTotallingDetail')}>
          アクセス集計 内訳
        </Link>
      </Li>
    </SystemList>

    <SettingCategory>マスター管理</SettingCategory>
    <SystemList>
      <Li>
        <Link to={getRoutePath('ContractTypeSetting')}>法人種別管理</Link>
      </Li>
      <Li>
        <Link to={getRoutePath('FacilityTypeGroupSetting')}>
          事業所種別グループ管理
        </Link>
      </Li>
      <Li>
        <Link to={getRoutePath('FacilityTypeSetting')}>事業所種別管理</Link>
      </Li>
      <Li>
        <Link to={getRoutePath('FeeStructureSetting')}>料金体系管理</Link>
      </Li>
    </SystemList>
    <SettingCategory>各種設定</SettingCategory>
    <SystemList>
      <Li>
        <Link to={getRoutePath('PopupNewsSetting')}>ポップアップ通知設定</Link>
      </Li>
    </SystemList>
  </Wrapper>
);

export default SiteMap;
