import * as SC from './Table.styled';

export const Table = ({ columns, data, renderMap }) => {
  return (
    <SC.TableContainer>
      <SC.Table>
        <thead>
          <SC.TrTitle>
            {columns.map((title) => (
              <SC.Th key={title}>{title}</SC.Th>
            ))}
          </SC.TrTitle>
        </thead>
        <tbody>
          {data.map((row) => (
            <SC.Tr key={row.id}>
              {columns.map((title) => (
                <SC.Td key={title}>
                  {renderMap[title] ? renderMap[title](row) : null}
                </SC.Td>
              ))}
            </SC.Tr>
          ))}
        </tbody>
      </SC.Table>
    </SC.TableContainer>
  );
};
