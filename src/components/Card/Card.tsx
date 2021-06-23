import React from 'react';
import { Container, Image, ImageContainer, Text, TextContainer } from './Card.styles';

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
        <Text>Name: {item.name}</Text>
        <Text>Text: {item.text}</Text>
        <Text>Set Name: {item.set.name}</Text>
        <Text>Type: {item.type}</Text>
      </TextContainer>
    </Container>
  );
}

export default Card;
