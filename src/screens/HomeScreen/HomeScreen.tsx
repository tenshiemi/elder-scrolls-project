import React, { useState } from 'react';
import { Container } from './HomeScreen.styles';
import CardGrid from '../../components/CardGrid/CardGrid';
import Header from '../../components/Header/Header';
import SearchField from '../../components/SearchField/SearchField';

function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  return (
      <Container>
        <Header />
        {!loading && <SearchField setSearchTerm={setSearchTerm} />}
        <CardGrid loading={loading} searchString={searchTerm} setLoading={setLoading} />
      </Container>
  );
}

export default HomeScreen;
