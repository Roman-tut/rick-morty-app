//умное поле для поиска с дебоунсе оптимизацией, он предотващает частые вывзовы поиска при вводе
//текста, что особенно полезнно для работа с апи

import React from 'react';
import { useState, useEffect } from 'react';
import { SearchInputProps } from '../../../shared/lib/interface/types';
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
