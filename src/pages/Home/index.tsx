import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormEvent } from 'react';

import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/Button';
import { AsideContent } from '../../components/AsideContent';

import logoImg from '../../assets/images/logo.svg'
import googleIconImage from '../../assets/images/google-icon.svg'

import { ButtonCreateRoom, FormAuth, MainContainer, PageAuth } from './styles';

export function Home() {
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.')
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed.')
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <PageAuth>
      <AsideContent />
      <MainContainer>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <ButtonCreateRoom onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImage} alt="Logo do Google" />
            Crie sua sala com o Google
          </ButtonCreateRoom>
          <div className="separator">ou entre em uma sala</div>
          <FormAuth onSubmit={handleJoinRoom}>
            <input 
              type="text"
              placeholder="Digite o código da sala" 
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </FormAuth>
        </div>
      </MainContainer>
    </PageAuth>
  );
}