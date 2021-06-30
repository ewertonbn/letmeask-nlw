import copyImg from '../../assets/images/copy.svg';

import toast, { Toaster }from 'react-hot-toast';

import { ButtonRoomCode } from './styles';

type RoomCodeProps = {
  code: string,
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)

    toast.success("Código copiado!");
  }

  return (
    <>
      <Toaster />
      <ButtonRoomCode className="room-code" onClick={copyRoomCodeToClipboard}>
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala: {props.code}</span>
      </ButtonRoomCode>
    </>
  );
}