import dayjs from 'dayjs';
import React from 'react';
import { User } from '../../../../types/user';
import ImageLoader from '../Loaders/ImageLoader';
import InfoLoader from '../Loaders/InfoLoader';
import './styles.css';

type Props = {
  user: User;
  isLoading: boolean;
}

function UserInfo({ user, isLoading }: Props) {
  return (
    <div className="user-info-container">
      <div className="user-info">
        <div className="user-info-avatar-content">
          {isLoading ? (
            <ImageLoader />
          ) : (
              <>
                <img
                  className="user-info-avatar"
                  src={user.avatar_url}
                  alt="Avatar do usuário"
                />
                <a
                  href={`https://github.com/${user.login}`}
                  className="btn btn-primary"
                  target="_new"
                >
                  Ver perfil
                </a>
              </>
            )}
        </div>
        <div className="user-info-details">
          {isLoading ? (
            <InfoLoader />
          ) : (
              <>
                <div className="badges-content">
                  <span className="badge-item user-info-item">
                    Repositórios públicos: {user.public_repos}
                  </span>
                  <span className="badge-item user-info-item">
                    Seguidores: {user.followers}
                  </span>
                  <span className="badge-item user-info-item">
                    Seguindo: {user.following}
                  </span>
                </div>
                <div className="user-info-content user-info-item">
                  <h3 className="user-info-title">Informações</h3>
                  <div className="user-info-details-item user-info-item">
                    <strong>Empresa:</strong> {user.company}
                  </div>
                  <div className="user-info-details-item user-info-item">
                    <strong>Website/Blog:</strong> {user.blog}
                  </div>
                  <div className="user-info-details-item user-info-item">
                    <strong>Localidade:</strong> {user.location}
                  </div>
                  <div className="user-info-details-item user-info-item">
                    <strong>Membro desde:</strong> {dayjs(user.created_at).format('DD/MM/YYYY HH:mm:ss')}
                  </div>
                </div>
              </>
            )}
        </div>
      </div>
    </div >
  );
}

export default UserInfo;