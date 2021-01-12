import React from 'react';
import { PageContainer } from 'src/components';
import BlocksTable from './components/Table';

const UncleBlocks = () => {
  return (
    <PageContainer heading="Uncles">
      <BlocksTable />
    </PageContainer>
  );
};

export default UncleBlocks;
