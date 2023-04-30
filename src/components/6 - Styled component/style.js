import styled, {
    css,
    keyframes
} from "styled-components"

export const Container = styled.div `
/* display: flex; */
/* background-color: red; */
padding: 10px;
`

/// 🔴🔴🔴 common css

const common = css `
line-height: 1.4;
font-weight: 700;
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

// 🔴🔴🔴 function call with props

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


// 🔴🔴🔴 Inheritance 

export const Button = styled.button `
padding: 7px 15px;
border: none;
background-color: green;
color: #fff;
border-radius: 5px;
`

export const ButtonInh = styled(Button)
`
background-color: aqua;
`
export const Day = styled(Button)
`
background-color: #666;
`

//🔴🔴🔴 keyfrems

const rotate = keyframes `
from{
    transform: rotate(0deg)
}
to{
    transform: rotate(360deg)
}
`
export const Rotate = styled.div `
display: flex;
align-items: center;
justify-content: center;
font-size: 30px;
width: 200px;
height: 200px;
border: 3px solid blue;
border-radius: 50%;
animation: ${rotate} 2s linear infinite;
`