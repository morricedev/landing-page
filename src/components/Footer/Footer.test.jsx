import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

import { Footer } from '.';

describe('<Footer />', () => {
  it('should render footer', () => {
    const { container } = renderTheme(<Footer html="<h1>Teste</h1>" />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
