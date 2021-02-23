import React, { useContext } from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { Typography, Container } from '@material-ui/core';
import { DropdownContext } from '../../Context/Dropdown';

const DataTable = ({ columns }) => {
  const { selectedData, selectedIndex } = useContext(DropdownContext);
  const datas = [];
  selectedData.filter((data, index) => {
    return datas.push({
      ...data,
      id: index + 1,
      date: new Date(data.date),
    });
  });

  const name = selectedIndex >= 2 ? 'Stats' : 'Events';

  return (
    <>
      {selectedData.length === 0 ? (
        ''
      ) : (
        <>
          <Typography
            variant="h6"
            style={{ textAlign: 'center', marginTop: 30 }}
          >
            {`${name} Table Data`}
          </Typography>
          <Container maxWidth="md">
            <div
              style={{
                display: 'flex',
                marginTop: 10,
                height: 500,
              }}
            >
              <DataGrid
                rows={datas}
                columns={
                  selectedIndex >= 2
                    ? selectedIndex === 2
                      ? columns[1][0]
                      : columns[1][1]
                    : selectedIndex === 0
                    ? columns[0][0]
                    : columns[0][1]
                }
                components={{
                  Toolbar: GridToolbar,
                }}
                pageSize={10}
                disableColumnMenu
              />
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default DataTable;
