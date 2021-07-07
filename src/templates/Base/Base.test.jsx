import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/renderTheme';

import { Base } from '.';
import mock from './mock';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
