import { render, screen } from '@testing-library/react';

import Home from './index';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
