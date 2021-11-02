import styled from "@emotion/styled";

export const CRMTableContainer = styled.div`

`;
export const CRMTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  table-layout: fixed;
  width: 85%;
  border-spacing: 0;

  tr {
    word-break: break-word;
    
    
  }

  th {

    background: rgba(255,127,80,0.3);
  }
  td {
    margin: 0;
    word-break: break-word;
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

// create new group modal
export const DropDownButton = styled.button`
  background-color: transparent;
  border: none;
  color: black;

`;



// pagination
export const Pagination = styled.div`
  width:85%;
  padding-top : 0.5rem;
  padding-bottom : 0.5rem;
  background: rgba(255,127,80,0.3);
  margin-left: auto;
  margin-right: auto;

`;

export const PaginationArrowContainer = styled.div`
display: flex; 
justify-content: flex-end;
padding-right: 2.5rem;
`;
export const PaginationArrowButton = styled.button`
    
`;

export const CurrPage = styled.span``;


// create new group modal
export const CreateGroupModalButton = styled.button`


`;
