import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Redux case study/i);
  expect(linkElement).toBeInTheDocument();
});
