import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SearchInput } from './SearchInput'; // путь до компонента
import { describe, it, vi, expect } from 'vitest';

describe('SearchInput', () => {
  it('вызывает onSearch с задержкой после ввода текста', async () => {
    const mockOnSearch = vi.fn();

    render(<SearchInput onSearch={mockOnSearch} debounce={300} />);

    const input = screen.getByPlaceholderText('Поиск персонажа');

    // Вводим текст
    fireEvent.change(input, { target: { value: 'Rick' } });

    // Ждём чуть больше, чем debounce
    await waitFor(
      () => {
        expect(mockOnSearch).toHaveBeenCalledWith('Rick');
      },
      { timeout: 500 },
    ); // запас времени
  });

  it('не вызывает onSearch, если значение пустое', async () => {
    const mockOnSearch = vi.fn();

    render(<SearchInput onSearch={mockOnSearch} debounce={300} />);

    const input = screen.getByPlaceholderText('Поиск персонажа');

    // Вводим пробелы
    fireEvent.change(input, { target: { value: '   ' } });

    await new Promise((r) => setTimeout(r, 400)); // подождем > debounce

    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});
