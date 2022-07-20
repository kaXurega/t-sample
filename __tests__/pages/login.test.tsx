import '@testing-library/jest-dom/extend-expect';
import Home from 'pages/index';
import client, { Session } from 'next-auth/client';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('should render signin view', async () => {
    client['useSession'] = jest.fn().mockReturnValueOnce([null, false]);
    render(<Home />);

    expect(screen.getByText(/not signed in/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('should render login view', async () => {
    const testName = 'testName';
    const mockSession: Session = {
      expires: null,
      user: { name: testName },
    };
    expect(screen.getByText(new RegExp(testName))).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /sign out/i,
      }),
    ).toBeInTheDocument();
  });
});
