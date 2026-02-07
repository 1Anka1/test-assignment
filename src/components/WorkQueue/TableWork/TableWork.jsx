import { CgMoreVerticalO } from 'react-icons/cg';
import { getClients } from '../../../api/clients-api';
import useDataAPI from '../../../hooks/UseDataAPI';
import { Avatar } from '../../shared/ui/Avatar/Avatar';
import * as SC from './TableWork.styled';
import { WrapperBar } from '../../shared/WrapperBar/WrapperBar';
import { useState } from 'react';

export const TableWork = () => {
  const { data, isLoading } = useDataAPI(getClients);
  const [filter, setFilter] = useState('all');

  if (isLoading) return <p>Loading.....</p>;

  const counts = data.reduce(
    (acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    },
    { New: 0, 'Pending Rewiew': 0, Completed: 0 },
  );

  const filteredData =
    filter === 'all' ? data : data.filter((i) => i.status === filter);

  return (
    <WrapperBar title={'Work Queue'}>
      <SC.Actions>
        <SC.SortButton
          $active={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          All ({data.length})
        </SC.SortButton>

        <SC.SortButton
          $active={filter === 'New'}
          onClick={() => setFilter('New')}
        >
          Assigned to me ({counts['New']})
        </SC.SortButton>

        <SC.SortButton
          $active={filter === 'Pending Rewiew'}
          onClick={() => setFilter('Pending Rewiew')}
        >
          Pending Review ({counts['Pending Rewiew']})
        </SC.SortButton>

        <SC.SortButton
          $active={filter === 'Completed'}
          onClick={() => setFilter('Completed')}
        >
          Completed ({counts['Completed']})
        </SC.SortButton>
      </SC.Actions>

      <SC.Table>
        <thead>
          <tr>
            <SC.Th>ORIGINATOR</SC.Th>
            <SC.Th>CLIENT/LINE</SC.Th>
            <SC.Th>TYPE</SC.Th>
            <SC.Th>STATUS</SC.Th>
            <SC.Th>CREATED</SC.Th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(
            ({ id, firstName, lastName, crypto, company, status }) => (
              <tr key={id}>
                <SC.Td>
                  <SC.TdWrapper>
                    <Avatar name={`${firstName} ${lastName}`} />
                    {firstName} {lastName}
                  </SC.TdWrapper>
                </SC.Td>
                <SC.Td>
                  {company.name}
                  <br />
                  <SC.Span>{company.department}</SC.Span>
                </SC.Td>
                <SC.Td>{crypto.coin}</SC.Td>
                <SC.Td>
                  <SC.Flex>
                    <SC.ColorPoint $status={status}></SC.ColorPoint>
                    <span>{status}</span>
                  </SC.Flex>
                </SC.Td>
                <SC.Td>
                  <SC.TdWrapper>
                    04/02/2026
                    <CgMoreVerticalO size={16} />
                  </SC.TdWrapper>
                </SC.Td>
              </tr>
            ),
          )}
        </tbody>
      </SC.Table>
    </WrapperBar>
  );
};
