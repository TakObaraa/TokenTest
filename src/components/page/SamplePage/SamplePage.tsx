import MainTemplate from '@templates/MainTemplate/MainTemplate';
import React from 'react';

/** ReactComponent */
const SamplePage: React.FC = () => {
  console.log('render samplePage');
  return <MainTemplate>さんぷるぺーじ</MainTemplate>;
};

export default SamplePage;
