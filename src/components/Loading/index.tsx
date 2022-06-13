import {Container, SpinnerContainer} from './styles';

function Loading() {
  return (
    <Container>
 <SpinnerContainer>
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </SpinnerContainer>
    </Container>

  )
}

export default Loading