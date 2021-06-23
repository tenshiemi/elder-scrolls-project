import React from 'react';
import { Container, Image, ImageContainer, Text, TextContainer, Title } from './Card.styles';

export interface CardData {
  imageUrl: string;
  name: string;
  set: {
    name: string;
  };
  text: string;
  type: string;
}

interface CardProps {
  item: CardData;
}

function Card({ item }: CardProps) {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.imageUrl} />
      </ImageContainer>
      <TextContainer>
        <Text><Title>Name:</Title>{item.name}</Text>
        <Text><Title>Text:</Title>{item.text}</Text>
        <Text><Title>Set Name:</Title>{item.set.name}</Text>
        <Text><Title>Type:</Title>{item.type}</Text>
      </TextContainer>
    </Container>
  );
}

export default Card;
