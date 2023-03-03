import styled from 'styled-components';

const size_sm = (props) => { return props.theme.space.sm }
const size_xs = (props) => { return props.theme.space.xs }
const size_xl = (props) => { return props.theme.space.xl }
const size_xxl = (props) => { return props.theme.space.xxl }

const cl_primary = (props) => { return props.theme.colors.primary }
const cl_gray = (props) => { return props.theme.colors.gray }
const cl_red = (props) => { return props.theme.colors.red }
const cl_pink = (props) => { return props.theme.colors.pink }


const ft_menu = (props) => { return props.theme.fonts.size[4] }
const ft_title_01 = (props) => { return props.theme.fonts.size[4] }
const ft_title_02 = (props) => { return props.theme.fonts.size[8] }
const ft_title_03 = (props) => { return props.theme.fonts.size[1] }
const ft_title_04 = (props) => { return props.theme.fonts.size[6] }

const ft_title_mb_01 = (props) => { return props.theme.fonts.size[3] }
const ft_title_mb_02 = (props) => { return props.theme.fonts.size[7] }
const ft_title_mb_03 = (props) => { return props.theme.fonts.size[0] }
const ft_title_mb_04 = (props) => { return props.theme.fonts.size[5] }

export const MenuWrapper = styled.section`
   align-items: center;
   display: none;
   justify-content: center;
   margin: 0 auto;
   margin-top: 30px;
   max-width: 1050px;

   ul {
        align-items: center;
        display: flex;
        list-style: none;
        margin-left: ${size_sm};
        padding: 0;

        li {
        font-size: ${ft_menu};
        margin-right: ${size_sm};
        padding: 0;

            a {          
                color: ${cl_primary};
                text-decoration: none;

                &:hover {
                    color: ${cl_red};
                }
            }

            &.active {
                a {          
                    color: ${cl_red};
                    text-decoration: none;
                }
            }
        }
    }

    @media only screen and (min-width: 450px) {
        display: flex;
    }  

    @media only screen and (min-width: 750px) {
        margin-top: -40px;
    }        
`

export const Decoration = styled.div`
    background-color: ${cl_gray};
    height: ${size_xs};
    width: ${ (size) => { return size.decor_size }};
`

export const Title = styled.p`
    margin-left: ${size_xxl};
`

export const Title_Var01 = styled.span`
    color: ${cl_gray};
    font-size: ${ft_title_mb_01};

    @media only screen and (min-width: 450px) {
        font-size: ${ft_title_01};
    }  
`
export const Title_Var02 = styled.span`
    color: ${cl_pink};
    font-size: ${ft_title_mb_02};
    letter-spacing: -0.05em;
    margin-right: ${size_xs};
    text-transform: uppercase;

    @media only screen and (min-width: 450px) {
        font-size: ${ft_title_02};
    }  
`
export const Title_Var03 = styled.span`
    color: ${cl_pink};
    font-size: ${ft_title_mb_03};

    @media only screen and (min-width: 450px) {
        font-size: ${ft_title_03};
    }  
`
export const Title_Var04 = styled.span`
    align-items: center;
    color: ${cl_gray};
    display: flex;
    font-size: ${ft_title_mb_04};
    justify-content: flex-end;

    @media only screen and (min-width: 450px) {
        font-size: ${ft_title_04};
    }  
`


export const TopWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-top: ${size_xl};
    width: calc(100% - 20px);    
`

export const Wallpaper = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    margin-top: ${size_xxl};


    img {
        transform: rotate(270deg);
        object-fit: contain;
        width: 60% !important;
    }

    
    @media only screen and (min-width: 450px) {
        flex-direction: row;

        
        img {
            transform: unset;
            object-fit: unset;
            width: unset !important;
        }
    }  
`