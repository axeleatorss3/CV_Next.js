import styled from 'styled-components'
export default function Body(){
    return(
      <MainContainer>
            <ImageContainer>          
                <Title>Hola, Mi nombre es Mario Tejada</Title>
            <ImageMe src="/me.jpg"></ImageMe>
            </ImageContainer>
      </MainContainer>
            
            
    )
}
const ImageContainer = styled.div`
padding: 5vh;
display: flex;
flex-direction: column ;
flex: 1;
backdrop-filter: blur(3px);
background-size: cover;
background-repeat: no-repeat;
border-width: 1px;
border-style: solid;
height: 60vh;
`
const MainContainer = styled.div`
flex-direction: column ;
flex: 1;
background-image: url("/lactoc2.jpg");
background-size: cover;
background-repeat: no-repeat;
border-width: 1px;
border-style: solid;
height: 60vh;
`
const ImageMe = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
  border-color: #000;
  border-width: 100px;
  border-radius: 50%;
  height: 40vh
`
const Title = styled.h1`
font-family:  Arial, Helvetica, sans-serif;
font-size: 30pt;
flex: 1;
justify-content: center;
font-weight:  bold;
color: white;
margin-left: auto;
margin-right: auto;
`