import { render, screen } from '@testing-library/react';

import Home from './index';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Oi' }).parentElement;
  expect(headingContainer).toHaveStyleRule('background', theme.colors.secondaryBg);
});
