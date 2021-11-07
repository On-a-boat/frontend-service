import styled from "@emotion/styled";

export const CRMContainer = styled.div`
  width: 88%;
  flex: 0 0 88%;
  background-color: #fbfcfd;
`;

export const MainContainer = styled.div`
  height: 80%;
  width: 81%;
  flex: 0 0 81%;
  margin-left: auto;
  margin-right: auto;
`;
// CRM table
export const Table = styled.table`
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

export const TableHead = styled.thead`
  background: rgba(250, 241, 239);
`;

export const HeadFilter = styled.ul`
  list-style: none;
  background-color: transparent;
`;

export const TableBody = styled.tbody``;

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
export const CreateGroupModalButton = styled.button`
  background: rgba(255, 127, 80, 0.2);
  cursor: pointer;
  border-radius: 3px;
  border: none;
  padding: 12px;
  margin: 10px;
  margin-left: -0.5px;
  margin-top: 30px;
  margin-bottom: -3px;
  font-size: 13px;
  font-weight: bold;
  color: rgba(238, 61, 13, 1);
`;

export const CancelGroupButton = styled.button``;
export const GroupNameInput = styled.input``;
