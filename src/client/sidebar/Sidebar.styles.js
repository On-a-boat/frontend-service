import styled from "../../../node_modules/@emotion/styled";
// require("typeface-nunito-sans");

export const SideBarContainer = styled.div`
  width: 15%;
  // responsive , max width and min width of the sidebar
  background-color: #24303f;
`;

export const SidebarHeader = styled.h3`
  padding: 24px 0; // top bottom 20, 0 left right
  text-align: center;
  margin-bottom: 10px;
  background-color: rgba(19, 26, 40);
  /* letter-spacing: 6px; // spaces btw each letters  */
  color: white;
  font-family: "Nunito Sans", sans-serif;
  font-weight: "bolder";
`;

export const SidebarHeaderWrapper = styled.div`
  background-color: #131a28;x 
  margin-bottom: 48px;
`;

export const MenuItemContainer = styled.div`
  margin-top: 40px;
`;

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
  font-size: 30px;
  background-color: ${(props) => props.selected && "#161E2E"};
  box-shadow: ${(props) => props.selected && "inset 0px 3px 3px 2px #000"};
  border-radius: 7px;
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
  font-size: 16px;
  margin-top: 3px;
  color: rgba(158, 167, 178);
`;

///////////////////

export const DropdownIcon = styled.span`
  margin-left: 3vw;
  /* font-family: Arial, Helvetica, sans-serif; */
  /* top: ${(p) => (p.isOpen ? "16px" : "12px")}; */
  right: 24px;
  /* border: solid
    ${(p) =>
    p.selected ? p.colorPalette.fontColorSelected : p.colorPalette.fontColor};
  border-width: 0 1px 1px 0; */
  padding: 3px;
  color: rgba(158, 167, 178);

  transform: ${(p) => (p.isOpen ? "rotate(-180deg)" : "rotate(0deg)")};
  transition: 0.4s;
`;

export const ItemContainer = styled.div``;

export const SubMenuItemContainer = styled.div`
  font-size: 14px;
  ${(p) => p.isSidebarOpen && "padding-left: 15%"};
  ${(p) => !p.isSidebarOpen && "text-align: center"};
`;

export const SidebarContainer = styled.div`
  width: ${(p) => (p.isSidebarOpen ? "15%" : "5%")};
  max-width: 280px;
  min-width: 80px;
  background-image: linear-gradient(
      315deg,
      ${(p) => p.colorPalette.bgColor1} 0%,
      ${(p) => p.colorPalette.bgColor2} 74%
    ),
    url(${(p) => p.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: ${(p) => p.colorPalette.fontColorSelected};
  position: relative; // Toggler
  transition: 0.2s ease-in all;
`;

export const SubMenuItem = styled.p`
  color: ${(p) =>
    p.selected ? p.colorPalette.fontColorSelected : p.colorPalette.fontColor};
  ${(p) => p.selected && "font-weight: bold; letter-spacing: 2px;"};
  transition: 0.2s;
  &:hover {
    color: ${(p) => p.colorPalette.fontColorSelected};
  }
`;
