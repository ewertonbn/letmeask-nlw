import { useAuth } from "../../hooks/useAuth";

import { AvatarContainer } from './styles'

export function Avatar() {
  const { user } = useAuth();

  return (
    <>
      { user && (
        <AvatarContainer>
          <img src={user?.avatar} alt={ user?.name} />
          <span>{user?.name}</span>
        </AvatarContainer>
      ) }
    </>
  );
}