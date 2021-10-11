import styled from "../../../node_modules/@emotion/styled";
// require("typeface-nunito-sans");

export const SideBarContainer = styled.div`
  width: 15%;
  // responsive , max width and min width of the sidebar
  max-width: 280px;
  min-width: 80px;
  background-color: #24303f;
`;

export const SidebarHeader = styled.h3`
  padding: 24px 0; // top bottom 20, 0 left right
  text-align: center;
  margin-bottom: 10px;
  /* letter-spacing: 6px; // spaces btw each letters  */
  color: white;
  font-family: "Nunito Sans", sans-serif;
  font-weight: "bolder";
`;

export const SidebarHeaderWrapper = styled.div`
  background-color: #131a28;
  margin-bottom: 48px;
`;

export const MenuItemContainer = styled.div``;

export const SidebarFooterWrapper = styled.div`
  background-color: #131a28;
  /* width: 15%; */
  position: fixed;
  bottom: 0;
  left: 0;
`;
export const SidebarFooter = styled.div`
  display: flex;
  padding: 24px; // top bottom 20, 0 left right
  text-align: center;
  /* letter-spacing: 6px; // spaces btw each letters  */
  color: white;
  font-family: "Nunito Sans", sans-serif;
`;

export const MenuItem = styled.div`
  display: flex;
  padding: 15px;
  /* background-color: #fff; */
  /* color: ${(p) => (p.selected ? "rgba(255,255,255)" : "white")}; */
  font-family: "Nunito Sans", sans-serif;
  font-size: 10px;
  background-color: ${(props) => props.selected && "#161E2E"};
  box-shadow: ${(props) => props.selected && "inset 0px 3px 3px 2px #000"};
  border-radius: 10px;
  //pseudo element
  &:hover {
    background-color: ${(props) => !props.selected && "#161E2E"};
    box-shadow: ${(props) => !props.selected && "inset 0px 3px 3px 2px #000"};
  }
  &:after {
    content: "";
    display: block;
    margin: 8px 0 4px;
  }
`;

export const Icon = styled.div`
  padding-left: 10px;
  padding-right: 20px;
`;

export const Name = styled.p`
  font-size: 14px;
  font-style: italic;
  font-weight: lighter;
  text-align: center;
`;

export const Text = styled.p`
  display: inline; //put icon and the text on same line
  font-size: 14px;
  margin-top: 3px;
  color: #9ea7b2;
  font-family: "Nunito Sans", sans-serif;
`;
