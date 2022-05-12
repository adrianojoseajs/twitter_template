import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>ModalGR</strong>
            <span>@modalgr</span>
            <Dot />
            <time>16 de março</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>#PraCima 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              25
            </Status>
            <Status>
              <RetweetIcon />
              50
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
