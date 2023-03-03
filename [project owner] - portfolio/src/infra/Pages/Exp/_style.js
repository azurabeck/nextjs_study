import styled from 'styled-components'

const size_sm = (props) => { return props.theme.space.xs }
const size_md = (props) => { return props.theme.space.md }
const size_xxl = (props) => { return props.theme.space.xxl }
const size_hg = (props) => { return props.theme.space.hg }

const cl_light_gray = (props) => { return props.theme.colors.light_gray }
const cl_gray = (props) => { return props.theme.colors.dark_gray }
const cl_purple = (props) => { return props.theme.colors.wine }
const cl_pink = (props) => { return props.theme.colors.pink_2 }


const ft_text = (props) => { return props.theme.fonts.size[4] }
const ft_title = (props) => { return props.theme.fonts.size[3] }
const ft_period = (props) => { return props.theme.fonts.size[1] }



export const TitleWrapper = styled.div`
    .title {
        color: ${cl_gray};
        font-weight: 600;
        font-size: ${ft_title};
    }
    .period {
        color: ${cl_purple};
        font-size: ${ft_period};
        font-style: italic;
    }
`

export const Text = styled.div`
    border: 1px solid ${cl_gray};
    color: ${cl_gray};
    font-size: ${ft_text};
    margin-top: ${size_hg};
    min-height: 200px;
    padding: ${size_md};
    text-align: left;
`

export const Bullet = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    margin-bottom: 150px;
    margin-top: ${size_hg};
    padding: 0;
    
    li {
        border-radius: 50%;
        background-color: ${cl_light_gray};
        display: block;
        height: 14px;
        width: 14px;
        margin: ${size_sm};

        &.active {
            background-color: ${cl_pink};
        }
        &:hover {
            background-color: ${cl_gray};
            cursor: pointer;
        }

        @media only screen and (min-width: 450px) {          
            height: 20px;
            width: 20px;   
        }
    }
`