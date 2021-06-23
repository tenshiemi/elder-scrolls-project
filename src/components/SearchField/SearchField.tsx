import React from 'react';
import { InputField } from './SearchField.styles';

export interface SearchFieldProps {
  setSearchTerm: (searchTerm: string) => void;
}
function SearchField({ setSearchTerm }: SearchFieldProps) {
  return (
    <InputField
      name="search"
      onChange={(event) => setSearchTerm(event?.target.value)}
      placeholder="Enter search term here..."
      type="text"
    />
  );
}

export default SearchField;
