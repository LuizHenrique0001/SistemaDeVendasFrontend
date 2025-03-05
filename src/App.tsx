import './App.css'
import styled from 'styled-components'

const DivTeste = ({name})=> {
  return(
    <div>
      <h1>Seja bem vindo {name}</h1>
    </div>
  )
};

function App() {

  return (
    <div>
      
      <DivTeste name="luiz" />
      <DivTeste name="maria" />
      <DivTeste name="joao" />
      <h1>Ola Mundo!</h1>
    </div>
  )
}

interface PStyleLink {
  isBlue?: boolean
}

const StyledLink = styled.div<PStyleLink>`
color:${(props) => (props.isBlue ? 'red':'blue')};
font-weight: bold;
`;

export default App
