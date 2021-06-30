import { useHistory, useParams } from 'react-router-dom';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import toast, { Toaster } from 'react-hot-toast';

import { Header } from '../../components/Header';
import { Avatar } from '../../components/Avatar';
import { RoomCode } from '../../components/RoomCode';
import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { MessageAlert } from '../../components/MessageAlert';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import { PageAdminRoom } from './styles';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>()

  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  async function handleEndedRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    toast.success("Sala encerrada!")

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();

      toast.success("Pergunta excluida!")
    }
  }

  async function handleCheckQuestionAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });

    toast.success("Você marcou uma pergunta como respondida.")
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });

    toast.success("Você deu destaque para uma pergunta.")
  }

  return (
    <PageAdminRoom>
      <Toaster />
      <Header>
        <img src={logoImg} alt="Letmeask" />
        <div>
          <RoomCode code={roomId} />
          <Avatar />
        </div>
      </Header>

      <main>
        <div className="room-title">
          <div>
            <h1>Sala - {title}t</h1>
            {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
          </div>
          <Button isOutlined onClick={handleEndedRoom}>Encerrar sala</Button>
        </div>
        
        { questions.length > 0 ? (
          <div className="question-list">
            {questions.map(question => {
              return (
                <Question 
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {!question.isAnswered && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleCheckQuestionAnswered(question.id)}
                      >
                        <img src={checkImg} alt="Marcar pergunta como respondida" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <img src={answerImg} alt="Dar destaque à pergunta" />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <img src={deleteImg} alt="Remover pergunta" />
                  </button>
                </Question>
              );
            })}
          </div>
        ) : (
          <MessageAlert />
        )}
      </main>
    </PageAdminRoom>
  );
}