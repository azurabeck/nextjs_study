import styled from 'styled-components';

const size_xs = (props) => { return props.theme.space.xs }
const size_md = (props) => { return props.theme.space.md }

const cl_primary = (props) => { return props.theme.colors.primary }
const cl_red = (props) => { return props.theme.colors.red }
const cl_orange= (props) => { return props.theme.colors.orange }

export const LangWrapper = styled.nav`
ul {
  align-items: center;
  display: flex;
  list-style: none;
  margin-left: ${size_md};
  padding: 0;

  li {
    color: ${cl_primary};

    a {
      color: ${cl_primary};
      padding: 0 ${size_xs};
      text-decoration: none;
        &:hover {
          color: ${cl_red};
          cursor: pointer;
        }           
    }  
    
    &.active {
      a {
        color: ${cl_orange};
      }
    }
  }
}     
`