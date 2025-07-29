import React from 'react';
import { useState, useEffect } from 'react';

export const SearchInput: React.FC<{ onSearch: (query: string) => void; debounce?: number }> = ({
  onSearch,
  debounce = 500,
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
    <input
      type="text"
      placeholder="Search characters..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="search-input"
    />
  );
};
