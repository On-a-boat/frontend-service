import styled from '../../../node_modules/@emotion/styled';

export const SideBarContainer = styled.div`
    width: 15% ;
    // responsive , max width and min width of the sidebar
    max-width: 280px;
    min-width: 80px;
    color: black;
    // gradation // angle, proportion, proportion
    // weey colour #df9080 rgb: 223,144,128
    background-image: linear-gradient(
        315deg,
        rgba(252,82,150,0.8) 0%,
        rgba(223,144,128,0.8) 74%), // weey colour with 74% clarity 
        url(${props => props.backgroundImage});
    // center and render the image 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    
`

export const SidebarHeader = styled.h3`
    padding :20px 0; // top bottom 20, 0 left right 
    text-align: center;
    margin-bottom: 10px;
    /* letter-spacing: 6px; // spaces btw each letters  */
    color: white;
    font-family: 'Nunito Sans';
    font-style: italic;
    
`

export const MenuItemContainer = styled.div`

`

export const MenuItem = styled.div`
padding: 6px 20px;
font-weight: 1000;
color: ${p => p.selected ? 'rgba(255,255,255)' : 'white'};
font-family: 'Nunito Sans';
//pseudo element
&:hover{
    color:rgba(223,144,128) ;
    transition: .1s ease-in all;
}
&:after {
    content: '';

    // make a line of 1px (default inline), display: block put it underneath
    border: 1px outset ${p => p.selected ? 'rgba(223,144,128)' : 'white'};
    display: block;
    margin: 8px 0 4px;
    
}
/* ${p => !p.selected && `
    &:hover {
      &:after {
        border: 1px solid rgba(223,144,128, 0.2);
        transition: .1s ease-in all;
      }
    }
  `} */
`;

export const Icon = styled.img`
height: 16px;
width: 16px;
padding-right: 20px;

`

export const Text = styled.p`
    display: inline; //put icon and the text on same line
    font-size: 18px;
    font-family: 'Nunito Sans';
    font-style: italic;
`