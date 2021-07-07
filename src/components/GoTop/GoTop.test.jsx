import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/renderTheme';
import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render a go to top button', () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute('href', '#');
    expect(container).toMatchSnapshot();
  });
});
