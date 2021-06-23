import React, { useState } from 'react';
import { Container } from './HomeScreen.styles';
import CardGrid from '../../components/CardGrid/CardGrid';
import SearchField from '../../components/SearchField/SearchField';

function HomeScreen() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
      <Container>
        <SearchField setSearchTerm={setSearchTerm} />
        <CardGrid searchString={searchTerm} />
      </Container>
  );
}

export default HomeScreen;
