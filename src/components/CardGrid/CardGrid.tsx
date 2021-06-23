import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card, { CardData } from '../Card/Card';
import { Container, Loader, LoaderFooter } from './CardGrid.styles';

interface CardGridProps {
  loading: boolean;
  searchString: string;
  setLoading: (loading: boolean) => void;
}

function renderCards(cards: CardData[], searchString: string) {
  const filteredCards =
    searchString.length < 3
      ? cards
      : cards.filter((cards) => cards.name.toLowerCase().includes(searchString));
  return filteredCards.map((card: CardData) => <Card item={card} key={card.name} />);
}

function CardGrid({ loading, searchString, setLoading }: CardGridProps) {
  const [cards, setCards] = useState<CardData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setLoading(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const cardResponse = await axios.get(
        'https://api.elderscrollslegends.io/v1/cards',
        {
          params: {
            page: currentIndex,
            pageSize: 20,
          },
        },
      );

      setCurrentIndex((prevState) => prevState + 1);
      setCards((prevState) => [...prevState, ...cardResponse.data.cards]);
      setLoading(false);
    };

    loading && getCards();
  }, [loading]);

  return (
    <Container>
      {loading && cards.length === 0 ? (
        <Loader />
      ) : (
        renderCards(cards, searchString)
      )}
      {loading && cards.length > 0 && <LoaderFooter><Loader /></LoaderFooter>}
    </Container>
  );
}

export default CardGrid;
