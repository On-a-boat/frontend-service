import styled from "@emotion/styled";

export const popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 50vh;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const popup_inside = styled.div`
  position: reletive;
  padding: 16px;
  width: 100%;
  max-width: 320px;
  background-color: white;
`;
