import { getClients } from '../../../api/clients-api';
import useDataAPI from '../../../hooks/UseDataAPI';
import * as SC from './TableWork.styled';
import { useMemo, useState } from 'react';
import { WrapperBar } from '../../shared/ui/WrapperBar/WrapperBar';
import { Table } from '../../shared/ui/Table/Table';
import { workColumns } from '../../../helpers/utils/table/columns';
import { workRenderMap } from '../../../helpers/utils/table/columnRenderers';

export const TableWork = () => {
  const { data, isLoading } = useDataAPI(getClients);
  const [filter, setFilter] = useState('all');

  const counts = useMemo(() => {
    return data.reduce(
      (acc, item) => {
        acc[item.statusQueue] = (acc[item.statusQueue] || 0) + 1;
        return acc;
      },
      { New: 0, 'Pending Rewiew': 0, Completed: 0 },
    );
  }, [data]);

  const filters = [
    { key: 'all', label: `All (${data.length || '0'})` },
    { key: 'New', label: `Assigned to me (${counts['New'] || '0'})` },
    {
      key: 'Pending Rewiew',
      label: `Pending Review (${counts['Pending Rewiew'] || '0'})`,
    },
    { key: 'Completed', label: `Completed (${counts['Completed'] || '0'})` },
  ];

  const filteredData = useMemo(() => {
    return filter === 'all'
      ? data
      : data.filter((i) => i.statusQueue === filter);
  }, [data, filter]);

  if (isLoading) return <p>Loading.....</p>;

  return (
    <WrapperBar title={'Work Queue'}>
      <SC.Actions>
        {filters.map((f) => (
          <SC.SortButton
            key={f.key}
            $active={filter === f.key}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </SC.SortButton>
        ))}
      </SC.Actions>
      <Table
        columns={workColumns}
        data={filteredData}
        renderMap={workRenderMap}
      />
    </WrapperBar>
  );
};
