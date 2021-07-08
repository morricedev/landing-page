import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/renderTheme';

import { Base } from '.';
import mock from './mock';

describe('<Base />', () => {
  it('should render Base template', () => {
    const { container } = renderTheme(<Base {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
