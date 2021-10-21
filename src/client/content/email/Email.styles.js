import styled from "@emotion/styled";

export const CRMContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  flex: 0 0 85%;
`;

// CRM table

export const CRMTable = styled.table`
  border-spacing: 0;

  border-spacing: 0;

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th {
    background: rgba(250, 241, 239);
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
`;

export const CRMTableHead = styled.thead`
  background: rgba(250, 241, 239);
`;

export const CRMHeadFilter = styled.ul`
  list-style: none;
  background-color: transparent;
`;

export const CRMTableBody = styled.tbody``;

export const DropDownButton = styled.button``;

export const DropDown = styled.div``;

// pagination
export const Pagination = styled.div`
  padding: 0.5rem;
  background: rgba(250, 241, 239);
`;

export const PaginationArrowButton = styled.button``;
export const CurrPage = styled.span``;

// groups
export const CreateGroupModalButton = styled.button``;

export const CreateGroupButton = styled.button``;

export const CancelGroupButton = styled.button``;
export const GroupNameInput = styled.input``;

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
      background: rgba(250, 241, 239);
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
`;
