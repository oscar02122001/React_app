import styled, {
    css
} from "styled-components"

export const Container = styled.div `
/* display: flex; */
/* background-color: red; */
padding: 10px;
`

const common = css `
font-weight: 700;
line-height: 1.4;
color: red;
font-size: 30px;
`


export const Title = styled.h1 `
${common}
font-size: 40px;
`

export const Description = styled.p `
${common}
font-size: 13px;
`

const boxSize = (props) => {
    switch (props.type) {
        case 'large':
            return '200px'
        case 'medium':
            return '150px'
        case 'small':
            return '100px'
        default:
            return '50px'
    }
}

export const Box = styled.div `
display: flex;
justify-content: center;
align-items: center;
width: ${boxSize};
height:${boxSize};
border: 2px solid #222;
margin-right: 20px;
color: #fff;
background-color: ${(props)=> props.bg };
`