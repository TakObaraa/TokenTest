import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import Button from '@atoms/Button/Button';
import CheckBox from '@atoms/CheckBox/Checkbox';
import Icon from '@atoms/Icon/Icon';
import InputFile from '@atoms/Input/InputFile/InputFile';
import Paragraph from '@atoms/Paragraph/Paragraph';
// とりあえず側だけ
// Todo Storybook
import Styled from '@emotion/styled';
import { COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes, useState } from 'react';

/** ContentType
 * setExtensionFileType：添付可能ファイルの指定
 * useMovie：添付可能ファイルに動画を追加するか
 * setSimultaneous：同時投稿の設定
 * required：必須項目にするか
 */
type ContentType = {
  setExtensionFileType?: 'img' | 'familyTalks';
  useMovie?: boolean;
  setSimultaneous?: ('document' | 'album')[];
};
type AttachFilesPropsType = ContentType & HTMLAttributes<HTMLDivElement>;

const Wrapper = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});
const Titles = Styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._8}`,
});
const ExtensionList = Styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: `${SIZE.GAP._4} ${SIZE.GAP._4}`,
  alignItems: 'center',
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._12}`,
});
const ExtensionTag = Styled('label')({
  display: 'inline-block',
  fontSize: SIZE.FONT._12,
  backgroundColor: COLOR.BACKGROUND.GRAY_0,
  color: COLOR.FONT.DISABLED,
  border: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
  borderRadius: SIZE.RADIUS.DEFAULT,
  padding: `${SIZE.PADDING._4} ${SIZE.PADDING._8}`,
});

const AttachFilesList = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  borderTop: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
});
const AttachFileRow = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: `${SIZE.PADDING._12} ${SIZE.PADDING._0}`,
  borderBottom: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
  gap: SIZE.GAP._8,
});
const RegisterAttachFileItem = Styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._8,
  justifyContent: 'space-between',
});
const AttachFileClear = Styled(Button)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN.AUTO}`,
});

const SimultaneousAddItem = Styled('div')({
  width: '100%',
  display: 'flex',
  padding: `${SIZE.PADDING._8}`,
  backgroundColor: `${COLOR.BACKGROUND.GRAY_10}`,
  gap: SIZE.GAP._4,
  flexDirection: 'column',
  alignItems: 'flex-start',
});
const RegisterAddItem = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._8,
});

const AttachFiles: React.FC<AttachFilesPropsType> = ({
  setExtensionFileType,
  useMovie = false,
  setSimultaneous,
  className,
}) => {
  console.log('render AttachFiles');
  const [showFileTypes, setShowFileTypes] = useState(false);
  return (
    <Wrapper className={className}>
      <Titles>
        <ActionAnchor
          setFontSize="_12"
          onClick={() => setShowFileTypes(!showFileTypes)}
        >
          添付可能な拡張子一覧
        </ActionAnchor>
      </Titles>
      {showFileTypes && setExtensionFileType === undefined && (
        <ExtensionList>
          <ExtensionTag>jpg</ExtensionTag>
          <ExtensionTag>jpeg</ExtensionTag>
          <ExtensionTag>gif</ExtensionTag>
          <ExtensionTag>png</ExtensionTag>
          <ExtensionTag>bmp</ExtensionTag>
          <ExtensionTag>pjpeg</ExtensionTag>
          <ExtensionTag>txt</ExtensionTag>
          <ExtensionTag>pdf</ExtensionTag>
          <ExtensionTag>csv</ExtensionTag>
          <ExtensionTag>xps</ExtensionTag>
          <ExtensionTag>doc</ExtensionTag>
          <ExtensionTag>docx</ExtensionTag>
          <ExtensionTag>ppt</ExtensionTag>
          <ExtensionTag>pptx</ExtensionTag>
          <ExtensionTag>xls</ExtensionTag>
          <ExtensionTag>xlsx</ExtensionTag>
          <ExtensionTag>rtf</ExtensionTag>
          <ExtensionTag>log</ExtensionTag>
          <ExtensionTag>xdw</ExtensionTag>
          {useMovie && (
            <>
              <ExtensionTag>mp4</ExtensionTag>
              <ExtensionTag>avi</ExtensionTag>
              <ExtensionTag>mov</ExtensionTag>
            </>
          )}
        </ExtensionList>
      )}
      {showFileTypes && setExtensionFileType === 'img' && (
        <ExtensionList>
          <ExtensionTag>jpg</ExtensionTag>
          <ExtensionTag>jpeg</ExtensionTag>
          <ExtensionTag>gif</ExtensionTag>
          <ExtensionTag>png</ExtensionTag>
          <ExtensionTag>pjpeg</ExtensionTag>
        </ExtensionList>
      )}
      {showFileTypes && setExtensionFileType === 'familyTalks' && (
        <ExtensionList>
          <ExtensionTag>jpg</ExtensionTag>
          <ExtensionTag>jpeg</ExtensionTag>
          <ExtensionTag>gif</ExtensionTag>
          <ExtensionTag>png</ExtensionTag>
          <ExtensionTag>bnp</ExtensionTag>
          <ExtensionTag>pjpeg</ExtensionTag>
          <ExtensionTag>pdf</ExtensionTag>
          {useMovie && (
            // 連絡ノート投稿モーダルのみ動画投稿可能
            <>
              <ExtensionTag>mp4</ExtensionTag>
              <ExtensionTag>avi</ExtensionTag>
              <ExtensionTag>mov</ExtensionTag>
            </>
          )}
        </ExtensionList>
      )}
      <AttachFilesList>
        <AttachFileRow>
          <RegisterAttachFileItem>
            <Icon setSize="_14" name="clip" setColor="blue" />
            <InputFile />
            <AttachFileClear setType="other" setSize="small">
              クリア
            </AttachFileClear>
          </RegisterAttachFileItem>

          {setSimultaneous && (
            <SimultaneousAddItem>
              <Paragraph setBold setFontSize="_12">
                同時投稿
              </Paragraph>
              <RegisterAddItem>
                {setSimultaneous.includes('document') && (
                  <CheckBox label="関連文書" />
                )}
                {setSimultaneous.includes('album') && (
                  <CheckBox label="アルバム" />
                )}
              </RegisterAddItem>
            </SimultaneousAddItem>
          )}
        </AttachFileRow>
      </AttachFilesList>
    </Wrapper>
  );
};

export default AttachFiles;
