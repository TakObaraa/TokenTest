import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import InputText from '@atoms/Input/InputText/InputText';
import TextArea from '@atoms/Input/TextArea/TextArea';
import LabelBox from '@atoms/LabelBox/LabelBox';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
import Radios from '@molecules/Radios/Radios';
import AppCard from '@organisms/App/AppCard/AppCard';
import { SIZE } from '@styles/constant';
import MainTemplate from '@templates/MainTemplate/MainTemplate';
import React from 'react';

/** StyledComponent */
const StyledMainTemplate = Styled(MainTemplate)({
  width: '100%',
});
const ContentHeader = Styled('div')({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
  display: 'flex',
  justifyContent: 'flex-start',
});
const ContentTitle = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._4,
});
const Contents = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._16,
});
const CardContents = Styled('div')({
  margin: SIZE.MARGIN._16,
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._8,
});
const FormItem = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._4,
});
const ContentItemTitle = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});
/** ReactComponent */
const PopupNewsSetting: React.FC = () => {
  console.log('render PopupNewsSetting');
  return (
    <StyledMainTemplate>
      <ContentHeader>
        <ContentTitle>
          <Icon name="alert" setSize="_24" />
          <Paragraph setFontSize="_24">ポップアップ通知設定</Paragraph>
        </ContentTitle>
      </ContentHeader>
      <Contents>
        <AppCard cardTitle="通知の有効/無効" cardTitleIcon="alert">
          <CardContents>
            <Paragraph>
              通知が無効の場合は全スタッフに対して通知を表示しません。
            </Paragraph>
            <ContentItemTitle>
              <ModalContentItemLabel label="状態" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <Radios
              radios={[
                { label: '有効', value: '0', defaultChecked: true },
                { label: '無効', value: '1' },
              ]}
              refs={{
                name: 'popupNewsSetting',
                onChange: async () => {
                  console.log('onChange');
                },
                onBlur: async () => {
                  console.log('onBlur');
                },
                ref: () => {
                  console.log('ref');
                },
              }}
            />
            <Button iconName="check">更新</Button>
          </CardContents>
        </AppCard>
        <AppCard cardTitle="再通知設定" cardTitleIcon="alert">
          <CardContents>
            <Paragraph>
              通知を確認済みのスタッフに対して再通知を行います。
            </Paragraph>
            <Button iconName="check">再通知を行う</Button>
          </CardContents>
        </AppCard>
        <AppCard cardTitle="通知文言の設定" cardTitleIcon="alert">
          <CardContents>
            <FormItem>
              <Paragraph>文字数制限はありません。</Paragraph>
              <Paragraph>本文は改行も反映されます。</Paragraph>
            </FormItem>
            <FormItem>
              <ContentItemTitle>
                <ModalContentItemLabel label="タイトル" />
                <LabelBox setLabelColor="warning" setSize="small">
                  必須
                </LabelBox>
              </ContentItemTitle>
              <InputText placeholder="タイトル" />
            </FormItem>
            <FormItem>
              <ContentItemTitle>
                <ModalContentItemLabel label="本文" />
                <LabelBox setLabelColor="warning" setSize="small">
                  必須
                </LabelBox>
              </ContentItemTitle>
              <TextArea rows={8} placeholder="本文" />
            </FormItem>
            <FormItem>
              <ContentItemTitle>
                <ModalContentItemLabel label="遷移先URL" />
                <LabelBox setLabelColor="warning" setSize="small">
                  必須
                </LabelBox>
              </ContentItemTitle>
              <InputText placeholder="遷移先URL" />
            </FormItem>
            <Button iconName="check">更新</Button>
          </CardContents>
        </AppCard>
      </Contents>
    </StyledMainTemplate>
  );
};

export default PopupNewsSetting;
