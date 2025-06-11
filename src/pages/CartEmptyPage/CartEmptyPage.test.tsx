import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { CartEmptyPage } from './CartEmptyPage';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('CartEmptyPage', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('рендерит заголовок "Корзина"', () => {
    render(<CartEmptyPage />);
    expect(screen.getByText('Корзина')).toBeInTheDocument();
  });

  it('рендерит кнопки с правильным текстом', () => {
    render(<CartEmptyPage />);
    expect(screen.getByText('Очистить корзину')).toBeInTheDocument();
    expect(screen.getByText('На главную')).toBeInTheDocument();
    expect(screen.getByText('В каталог')).toBeInTheDocument();
  });

  it('кнопка "На главную" вызывает navigate с "/"', () => {
    render(<CartEmptyPage />);
    fireEvent.click(screen.getByText('На главную'));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('кнопка "В каталог" вызывает navigate с "/catalog"', () => {
    render(<CartEmptyPage />);
    fireEvent.click(screen.getByText('В каталог'));
    expect(mockNavigate).toHaveBeenCalledWith('/catalog');
  });
});
