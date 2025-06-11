import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CreditPage } from './CreditPage';
import { creditList } from './const';

describe('CreditPage', () => {
  it('заголовок', () => {
    render(<CreditPage />);
    expect(screen.getByRole('heading', { level: 2, name: /Рассрочка через ОТП банк/i })).toBeInTheDocument();
  });

  it('описание и содержимое компонента ListDescription', () => {
    render(<CreditPage />);
    expect(screen.getByText(/Условия 0-0-6 на пол года/i)).toBeInTheDocument();
  });
  it('содержимое компонента ListDescription', () => {
    render(<CreditPage />);
    creditList[0].lists.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
