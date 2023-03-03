import styled from 'styled-components';

const size_sm = (props) => { return props.theme.space.sm }

const cl_primary = (props) => { return props.theme.colors.primary }
const cl_red = (props) => { return props.theme.colors.red }
const cl_pink = (props) => { return props.theme.colors.pink }

const ft_title_0 = (props) => { return props.theme.fonts.size[0] }
const ft_title_02 = (props) => { return props.theme.fonts.size[2] }


export const MenuMobileWrapper = styled.section`

      align-items: center;
      display: flex;
      
      div {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        
        svg {
          margin-left: 10px;
          margin-top: 1px;
          width: ${ft_title_02};
        }

        &:hover {
          color: ${cl_red};
          cursor: pointer;
        }       
      }
      
      ul {
          align-items: center;
          background: linear-gradient(90deg, #ffffffeb, #fff);
          bottom: 0;
          display: flex;
          flex-direction: column;
          list-style: none;
          margin-left: ${size_sm};
          padding: 0;
          position: absolute;
          right: 0;
          top: 0px;
          width: 100%;
          z-index: 999;

          li {
            margin-right: ${size_sm};
            padding: 15px;
            text-align: right;
            width: calc(100% - 30px);

            svg {
              width: ${ft_title_0};
            }

            a {   
              align-items: center;    
              color: ${cl_primary};
              display: flex;
              justify-content: space-between;   
              text-decoration: none;

              &:hover {
                color: ${cl_red};
              }
            }
            
            &.active {
                a {                    
                    color: ${cl_pink};
                }
            }

            &:first-child {
                margin-right: 4px;
                padding-top: 30px;

                svg {
                    width: ${ft_title_02};

                    &:hover {
                      color: ${cl_red};
                      cursor: pointer;
                    }
                }
            }
          }
        }

    @media only screen and (min-width: 450px) {
        display: none;
    } 
`