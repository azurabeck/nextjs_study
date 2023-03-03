import styled from 'styled-components'

const cl_gray = (props) => { return props.theme.colors.dark_gray }
const cl_pink = (props) => { return props.theme.colors.pink }

export const Text = styled.p`
    color: ${cl_gray};
    text-align: center;

    span {
        color: ${cl_pink};
    }
`