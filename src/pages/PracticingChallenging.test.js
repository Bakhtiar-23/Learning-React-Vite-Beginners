import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import '@testing-library/jest-dom';
import PracticingChallenging, { Step } from './PracticingChallenging';

expect.extend(toHaveNoViolations);

// Mock child components and assets
jest.mock('../components/learning/LiveCodeEditor', () => () => (
  <div>LiveCodeEditor</div>
));
jest.mock('../assets/practice.jpg', () => {
    return jest.requireActual('../../__mocks__/fileMock.js');
  });
  

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

  describe('Step Component', () => {
    test('renders step content correctly', () => {
      render(<Step {...mockStepProps} />);
      
      expect(screen.getByText('Step 1: Test Step')).toBeInTheDocument();
      expect(screen.getByText('HTML')).toBeInTheDocument();
      expect(screen.getByText('CSS')).toBeInTheDocument();
      expect(screen.getByText('JavaScript')).toBeInTheDocument();
      expect(screen.getByText('Test explanation')).toBeInTheDocument();
    });

    test('copy buttons work correctly', async () => {
      render(<Step {...mockStepProps} />);
      
      const htmlCopyButton = screen.getByText('Copy HTML');
      fireEvent.click(htmlCopyButton);
      
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockStepProps.html);
      expect(await screen.findByText('Copied!')).toBeInTheDocument();
    });
  });

  test('renders LiveCodeEditor component', () => {
    render(<PracticingChallenging />);
    expect(screen.getByText('LiveCodeEditor')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<PracticingChallenging />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('has no accessibility violations', async () => {
    const { container } = render(<PracticingChallenging />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('handles clipboard errors', async () => {
    navigator.clipboard.writeText.mockRejectedValue(new Error('Clipboard error'));
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(<Step {...mockStepProps} />);
    fireEvent.click(screen.getByText('Copy HTML'));
    
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(consoleSpy).toHaveBeenCalledWith('Failed to copy:', expect.any(Error));
    
    consoleSpy.mockRestore();
  });
});