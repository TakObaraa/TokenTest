import ColorIcon, { ColorIconNameType } from '@atoms/ColorIcon/ColorIcon';
import { IconNameType } from '@atoms/Icon/Icon';
import Paragraph from '@atoms/Paragraph/Paragraph';
// Todo create StoryBooks & Test
import Styled from '@emotion/styled';
import IconText from '@molecules/IconText/IconText';
import { BREAKPOINT, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

type Contents = {
  colorIconName?: ColorIconNameType;
  title?: string;
  subTitle?: string;
  subTitleIcon?: IconNameType;
  headerRightContents?: React.ReactNode;
};

type ContentHeaderProps = Contents & HTMLAttributes<HTMLDivElement>;

const Wrapper = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: `${SIZE.GAP._8}`,
  [BREAKPOINT.MOBILE]: {
    flexWrap: 'wrap',
  },
});

const ContentTitle = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._8,
});
const SubTitle = Styled(Paragraph)({
  alignSelf: 'flex-end',
});
const IconSubTitle = Styled(IconText)({
  alignSelf: 'flex-end',
});
const HeaderRight = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._8,
  [BREAKPOINT.MOBILE]: {
    margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN.AUTO}`,
  },
});

const ContentHeader: React.FC<ContentHeaderProps> = ({
  colorIconName,
  title,
  subTitle,
  subTitleIcon,
  headerRightContents,
  className,
}) => {
  console.log('render ContentHeader');
  return (
    <Wrapper className={className}>
      <ContentTitle>
        {colorIconName && <ColorIcon name={colorIconName} setSize="_20" />}
        {title && (
          <Paragraph setFontSize="_24" resetLineHeight>
            {title}
          </Paragraph>
        )}
        {subTitle && !subTitleIcon && (
          <SubTitle resetLineHeight>{subTitle}</SubTitle>
        )}
        {subTitle && subTitleIcon && (
          <IconSubTitle iconName={subTitleIcon} resetLineHeight>
            {subTitle}
          </IconSubTitle>
        )}
      </ContentTitle>
      {headerRightContents && <HeaderRight>{headerRightContents}</HeaderRight>}
    </Wrapper>
  );
};

ContentHeader.defaultProps = {
  colorIconName: undefined,
  title: undefined,
  subTitle: undefined,
  subTitleIcon: undefined,
  headerRightContents: undefined,
};

export default ContentHeader;
