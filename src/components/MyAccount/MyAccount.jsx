import { getClients } from '../../api/clients-api';
import useDataAPI from '../../hooks/UseDataAPI';
import { myAccountColumns } from '../../helpers/utils/table/columns';
import { Table } from '../shared/ui/Table/Table';
import { WrapperBar } from '../shared/ui/WrapperBar/WrapperBar';
import { accountRenderMap } from '../../helpers/utils/table/columnRenderers';
import * as SC from './MyAccount.styled';
import { useState } from 'react';

export const MyAccount = () => {
  const { data, isLoading } = useDataAPI(getClients);
  const [search, setSearch] = useState('');

  const btnData = ['Filter', 'Sort', 'Group', '+ New'];
  const sliceData = data.slice(0, 4);

  const filteredData = sliceData.filter((item) =>
    item.company?.name?.toLowerCase().includes(search.toLowerCase()),
  );

  if (isLoading) return <p>Loading.....</p>;

  return (
    <WrapperBar title={'MyAccount'}>
      <SC.ActionWrapper>
        <SC.SearchInput
          type="text"
          placeholder="Search by account"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {btnData.map((name) => (
          <SC.ActionBtn key={name} type="button">
            {name}
          </SC.ActionBtn>
        ))}
      </SC.ActionWrapper>

      {filteredData.length === 0 ? (
        <SC.EmptyState>Nothing found</SC.EmptyState>
      ) : (
        <Table
          columns={myAccountColumns}
          data={filteredData}
          renderMap={accountRenderMap}
          style={{ flexGrow: 1 }}
        />
      )}
    </WrapperBar>
  );
};
