import * as Style from './styles'

const Main = ({
  title = 'Boilerplate React',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <Style.Wrapper>
      <Style.Title>{title}</Style.Title>
      <Style.Descripition>{description}</Style.Descripition>
      <Style.Illustration
        src="/img/code.svg"
        alt="Desenvolvedor em de frente para uma tela com código"
      />
    </Style.Wrapper>
  )
}

export default Main
