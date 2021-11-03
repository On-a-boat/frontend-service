import styled from "@emotion/styled";


// the universal wrapper, wraps table and other buttons outside the table 
export const CRMContainer = styled.div`
  width: 88%;
  background-color: rgba(251,252,255,1);

`;

// wraps table & pagination
export const TableContainer = styled.div`

`;

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  table-layout: fixed;
  border-spacing: 0;
  width: 85%;
  tr {
    
    
  }

  th {

    background: rgba(255,127,80,0.3);
  }
  td {
    margin: 0;
    font-size: 13px;
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

// drop down button for filter and sorter
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
  background: rgba(255,127,80,0.2);
  border: none;
  border-radius: 2px;
  padding: 10px;
  margin: 10px;

  font-size: 13px;
  font-weight: bold;
  color: rgba(238,61,13,1);

`;
