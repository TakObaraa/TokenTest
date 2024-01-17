import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import InputText from '@atoms/Input/InputText/InputText';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
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
const ContentsMessage = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._4,
});
const FormItem = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._4,
});
const MemoryInput = Styled(InputText)({
  width: '150px',
});
const Inputs = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});
/** ReactComponent */
const Setting: React.FC = () => {
  console.log('render Setting');
  return (
    <StyledMainTemplate>
      <ContentHeader>
        <ContentTitle>
          <Icon name="setting" setSize="_24" />
          <Paragraph setFontSize="_24">MeLL+Management設定</Paragraph>
        </ContentTitle>
      </ContentHeader>
      <Contents>
        <ContentsMessage>
          <Paragraph>
            サーバのリソースはZabbixが監視していますが、php-fpmに割り当てられているメモリサイズまでは監視できません。
            <br />
            そのため、fpmのメモリ使用量をMeLL+が監視しています。
          </Paragraph>
          <Paragraph setColor="ash">
            閾値は70%固定としています(ここからでは変更できません)
          </Paragraph>
        </ContentsMessage>
        <FormItem>
          <Paragraph setBold>通知の宛先</Paragraph>
          <Inputs>
            <InputText placeholder="通知先のアドレスを入力" />
            <Button>更新</Button>
          </Inputs>
        </FormItem>
        <FormItem>
          <Paragraph setBold>メールのタイトル</Paragraph>
          <Inputs>
            <InputText placeholder="通知メールのタイトルを入力" />
            <Button>更新</Button>
          </Inputs>
        </FormItem>
        <FormItem>
          <Paragraph setBold>Webサーバーのメモリサイズ</Paragraph>
          <Paragraph>15745 MB</Paragraph>
        </FormItem>
        <FormItem>
          <Paragraph setBold>設定されているサイズ</Paragraph>
          <Paragraph>php.ini：14MB</Paragraph>
        </FormItem>
        <FormItem>
          <Paragraph setBold>最大メモリサイズ(MB)</Paragraph>
          <Inputs>
            <MemoryInput placeholder="単位はMBで入力" />
            <Button>更新</Button>
          </Inputs>
        </FormItem>
      </Contents>
    </StyledMainTemplate>
  );
};

export default Setting;
