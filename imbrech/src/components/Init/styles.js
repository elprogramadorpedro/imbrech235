import styled from 'styled-components'
import fondoinit from '../Images/fondoinit.svg'

export const Contenedor = styled.div`
display:flex;

max-width:100%;
margin: 0 auto;
border:0;
padding:0;
`

export const DivHeader = styled.div`

  width: 100%;
  display:flex;
  justify-content:center;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-image: url(${fondoinit});
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;

`;

export const SubHeader = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;

width: 100%;
height: 250px;


background: #C4C4C4;

`;

export const TextImbrech = styled.div`
display:flex;
justify-content:center;
width: 1230px;
height: 293px;


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 250px;
line-height: 293px;
/* identical to box height */

letter-spacing: 0.1em;

color: #000000;
margin:-50px;
padding:0
`;

export const ButtonEntrar = styled.div`
display:flex;
justify-content:center;
width: 135px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.1em;

color: #000000;

`;