import { render, screen } from './utils/test-utils';
import App from './App';

describe('Basic tests', () => {
  it('should display Hello World text', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /hello world/i
    );
  });
});
