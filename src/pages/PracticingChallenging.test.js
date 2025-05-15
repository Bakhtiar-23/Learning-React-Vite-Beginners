import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PracticingChallenging, { Step } from './PracticingChallenging';

// Mock child components and assets
jest.mock('../components/learning/LiveCodeEditor', () => () => <div>LiveCodeEditor</div>);
jest.mock('../assets/practice.jpg', () => 'test-file-stub');

describe('PracticingChallenging Component', () => {
  const mockStepProps = {
    number: 1,
    title: 'Test Step',
    html: '<div>Test HTML</div>',
    css: 'body { color: red; }',
    js: 'console.log("test");',
    explanation: 'Test explanation'
  };

  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
    });
  });

  test('renders main title and guidelines', () => {
    render(<PracticingChallenging />);
    expect(screen.getByText('Step-by-Step Practice: HTML/CSS/JS Basics')).toBeInTheDocument();
  });

  test('renders LiveCodeEditor component', () => {
    render(<PracticingChallenging />);
    expect(screen.getByText('LiveCodeEditor')).toBeInTheDocument();
  });

  test('Step copy button copies HTML text', async () => {
    render(<Step {...mockStepProps} />);
    fireEvent.click(screen.getByText('Copy HTML'));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockStepProps.html);
    expect(await screen.findByText('Copied!')).toBeInTheDocument();
  });
});
