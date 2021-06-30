import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormEvent } from 'react';

import toast, { Toaster } from 'react-hot-toast';

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
      toast.error("Esta sala não existe, tente outra.")
      return;
    }

    if (roomRef.val().endedAt) {
      toast.error("Esta sala foi fechada, não é possível entrar.")
      return;
    }

    toast(`Seja bem-vindo ${user?.name}`, {
      icon: '👋',
    })
    
    history.push(`/rooms/${roomCode}`);
  }

  return (
    <PageAuth>
      <AsideContent />
      <MainContainer>
        <div className="main-content">
          <Toaster />
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