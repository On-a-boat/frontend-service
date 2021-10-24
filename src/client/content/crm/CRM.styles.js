import styled from "@emotion/styled";


export const CRMTableContainer = styled.div`
`;

export const CRMTable = styled.table`
  border-spacing: 0;
  padding-top: 1rem;
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th {
    background: rgba(255,127,80,0.3);
  }
  td {
    margin: 0;
    padding: 0.5rem;
    background-color: white;
    border-bottom: 1px solid #ededed;

    :last-child {
      border-right: 1px solid #ededed;
    }
    :first-child {
      border-left: 1px solid #ededed;
    }
  }
`;
export const CRMHeadFilter = styled.div`
  list-style: none;
  background-color: transparent;
  display: "block";
`;



// pagination
export const Pagination = styled.div`
  padding: 0.5rem;
  background: rgba(255,127,80,0.3);
`;
export const PaginationArrowButton = styled.button``;
export const CurrPage = styled.span``;



// create new group modal
export const CreateGroupModalButton = styled.button``;


export const CreateButton = styled.button``;
export const CancelButton = styled.button``;
export const GroupNameInput = styled.input``;

