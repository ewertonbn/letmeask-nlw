import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { AsideContent } from '../../components/AsideContent';

import logoImg from '../../assets/images/logo.svg'

import { PageNewRoom, FormCreateNewRoom, MainContainer } from './styles';

export function NewRoom() {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');
  const history= useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <PageNewRoom>
      <AsideContent />
      <MainContainer>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <FormCreateNewRoom onSubmit={handleCreateRoom}>
            <input 
              type="text"
              placeholder="Nome da sala" 
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </FormCreateNewRoom>
          <p>
            Quer entrar em uma sala existende? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </MainContainer>
    </PageNewRoom>
  );
}