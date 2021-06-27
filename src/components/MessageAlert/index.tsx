import messageImg from '../../assets/images/message.svg';

import { MessageContent } from './styles';

export function MessageAlert() {
  return (
    <MessageContent>
      <img src={messageImg} alt="Nenhuma mensagem por aqui" />
      <h3>Nenhuma mensagem por aqui...</h3>
      <p>Envie o código desta sala para seus amigos e comece a responder perguntas!</p>
    </MessageContent>
  );
}