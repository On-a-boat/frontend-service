import styled from '@emotion/styled';

export const GroupsContainer = styled.div`
    width: 80% ;

`


export const TableStyles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
        background: rgba(250,241,239);
    }
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #ededed;

      :last-child {
        
        border-right: 1px solid #ededed;

      }
      :first-child {
        border-left: 1px solid #ededed;


      }
    }
  }

  .pagination {
    padding: 0.5rem;
            background: rgba(250,241,239);

  }
`;
