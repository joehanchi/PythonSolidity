// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PythonSoliditySdk title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PythonSoliditySdk/i);
    expect(titleElement).toBeInTheDocument();
});
