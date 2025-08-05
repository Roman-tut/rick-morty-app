import React from 'react';
import { useState, useEffect } from 'react';
import { SearchInputProps } from '../../characters//model/types';
import styles from '../../../css/characters/CharacterCard.module.css';

export const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  debounce = 300,
  placeholder = 'Поиск персонажа',
}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!inputValue.trim()) return;
      onSearch(inputValue);
    }, debounce);
    return () => clearTimeout(timer);
  }, [inputValue, debounce, onSearch]);

  return (
    <div className={styles['search-container']}>
      <input
        type="text"
        placeholder="Поиск персонажа"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles['search-input']}
      />
    </div>
  );
};
