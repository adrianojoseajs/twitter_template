import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Adriano José</h1>
        <h2>@adrianojoseajs</h2>

        <p>
          Estágiario em desenvolvimento Front end | React | React Native | <a href="https://rocketseat.com.br">@ModalGR</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Vicente, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 19 de Maio de 2003
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>195</strong>
          </span>
          <span>
            <strong>1.000.001 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
