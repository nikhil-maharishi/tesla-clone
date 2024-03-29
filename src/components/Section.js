
import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section({title,description,backgroundImg,leftBtnText,rightBtnText,}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
        <Buttons>
        <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                    {leftBtnText} 
                    </LeftButton>
                    { rightBtnText &&
                        <RightButton>
                        {rightBtnText}
                        </RightButton>
                    }
                    
                </ButtonGroup>
            </Fade>
            <DownArrow src='\images\down-arrow.svg' />
        </Buttons>

    </Wrap>
  )
}

export default Section
const Wrap = styled.div`

width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/images/model-s.jpg');
display: flex;
flex-direction: column;
justify-content: space-between;
align-item: center;
background-image: ${props => `url("/src/images/${props.bgImage}")`};
scroll-snap-align: start;
`
const ItemText = styled.div`
padding-top: 15vh;
font-size:22px;
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-button: 30px;
    @media (max-width: 768px){
        flex-direction: column;

    }
` 
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-item: center;
    border-radius:100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size:12px;
    cursor- pointer;
    margin: 8px;
    padding:12px;
    @media (max-width: 768px){
        flex-direction: column;
        width: 500px;
        margin-left:40px;
    }
`
const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color: black;
`
const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`

`