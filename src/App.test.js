// App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renderiza campos de e-mail e senha', () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
});

test('exibe erro se senha não tiver caractere especial', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/e-mail/i), { target: { value: 'daniele.gomes@pucpr.br' } });
  fireEvent.change(screen.getByPlaceholderText(/senha/i), { target: { value: '1234567890' } }); // sem caractere especial
  fireEvent.click(screen.getByText(/acessar/i));
  expect(screen.getByText(/caractere especial/i)).toBeInTheDocument();
});

test('exibe erro se senha tiver menos de 10 caracteres', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/e-mail/i), { target: { value: 'daniele.gomes@pucpr.br' } });
  fireEvent.change(screen.getByPlaceholderText(/senha/i), { target: { value: '123!@#' } }); // menos de 10 caracteres
  fireEvent.click(screen.getByText(/acessar/i));
  expect(screen.getByText(/at least 10 characters/i)).toBeInTheDocument();
});

test('exibe mensagem de sucesso com credenciais corretas', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/e-mail/i), { target: { value: 'daniele.gomes@pucpr.br' } });
  fireEvent.change(screen.getByPlaceholderText(/senha/i), { target: { value: '9876543210!' } });
  fireEvent.click(screen.getByText(/acessar/i));
  expect(screen.getByText(/acessado com sucesso/i)).toBeInTheDocument();
});

test('exibe erro para usuário ou senha incorretos', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/e-mail/i), { target: { value: 'outro@exemplo.com' } });
  fireEvent.change(screen.getByPlaceholderText(/senha/i), { target: { value: '9876543210!' } });
  fireEvent.click(screen.getByText(/acessar/i));
  expect(screen.getByText(/usuário ou senha incorretos/i)).toBeInTheDocument();
});
