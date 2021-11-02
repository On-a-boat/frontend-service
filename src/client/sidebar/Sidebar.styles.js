import styled from "../../../node_modules/@emotion/styled";


// sidebar
export const SidebarContainer = styled.div`
  width: 12%;
  background-color: rgba(255,255,255,1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-right : 1px solid;
  border-color: rgba(229,232,241,0.8);
  position: relative;
  transition: 0.2s ease-in all;
`;
// width: ${(p) => (p.isSidebarOpen ? "12%" : "5%")};
export const SidebarHeader = styled.h3`
  padding: 24px 0; // top bottom 20, 0 left right
  text-align: center;
  margin-bottom: 10px;
  background-color:rgba(255,255,255,1);
  color: white;
  font-family: "Nunito Sans", sans-serif;
  font-weight: "bolder";
`;

export const MenuItemContainer = styled.div`
  margin-top: 40px;
`;





// menu
export const SidebarHeaderWrapper = styled.div`
  background-color: #63c8f4;
  margin-bottom: 48px;
`;

export const MenuItem = styled.div`
  display: flex;
  padding: 15px;
  font-family: "Nunito Sans", sans-serif;
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

export const MenuIcon = styled.div`
  padding-right: 20px;
  color: rgba(158,167,178,1);
`;

export const MenuText = styled.p`
  display: inline;
  font-size: 16px;
  margin-top: 3px;

  color: rgba(0,0,0);
`;

// export const DropdownIcon = styled.span`
//   margin-left: 3vw;
//   /* font-family: Arial, Helvetica, sans-serif; */
//   /* top: ${(p) => (p.isOpen ? "16px" : "12px")}; */
//   right: 24px;
//   /* border: solid
//     ${(p) =>
//     p.selected ? p.colorPalette.fontColorSelected : p.colorPalette.fontColor};
//   border-width: 0 1px 1px 0; */
//   padding: 3px;
//   color: rgba(158, 167, 178);

//   transform: ${(p) => (p.isOpen ? "rotate(-180deg)" : "rotate(0deg)")};
//   transition: 0.4s;
// `;





// submenu
export const SubMenuItemContainer = styled.div`
  font-size: 14px;
  ${(p) => p.isSidebarOpen && "padding-left: 15%"};
  ${(p) => !p.isSidebarOpen && "text-align: center"};
`;

export const SubMenuItem = styled.p`
  min-height: 40px;
  margin-top: 3;
  color: rgba(158,167,178);
  transition: 0.2s;
  &:hover {
    color: white;
  }
`;




