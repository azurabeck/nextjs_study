import styled from 'styled-components';

const size_hg = (props) => { return props.theme.space.hg }
const size_sm = (props) => { return props.theme.space.sm }
const size_md = (props) => { return props.theme.space.md }

const cl_primary = (props) => { return props.theme.colors.primary }
const cl_gray = (props) => { return props.theme.colors.light_gray }
const cl_red = (props) => { return props.theme.colors.red }

const ft_title_02 = (props) => { return props.theme.fonts.size[2] }
const font_size_md = (props) => { return props.theme.space.md }


export const NavbarWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 10vh;
    justify-content: flex-end;
    padding: 0 ${size_hg};

    nav {
      align-items: center;
      display: flex;
      justify-content: flex-end;
    }    

    @media only screen and (min-width: 450px) {
      justify-content: space-between;
    }  
`;

export const MenuWrapper = styled.section`

      align-items: center;
      display: none;
      
      div {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        
        svg {
          width: ${font_size_md};
          margin-right: ${size_md};
        }

        label {
          color: ${cl_gray};
        }

        &:hover {
          color: ${cl_red};
          cursor: pointer;
        }       
      }
      
      ul {
          align-items: center;
          display: flex;
          list-style: none;
          margin-left: ${size_sm};
          padding: 0;

          li {
            margin-right: ${size_sm};
            padding: 0;

            a {          
              color: ${cl_primary};
              text-decoration: none;

              svg {
                width: ${ft_title_02};
              }

              &:hover {
                color: ${cl_red};
              }
            }
          }
        }

    @media only screen and (min-width: 450px) {
        display: flex;
    } 
`