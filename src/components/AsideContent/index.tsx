import { AsideContainer } from './styles';

import illustrationImage from '../../assets/images/illustration.svg'

export function AsideContent() {
  return (
    <AsideContainer>
      <img src={illustrationImage} alt="Ilustração simbolizando perguntas e respostas" />
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo-real</p>
    </AsideContainer>
  );
}