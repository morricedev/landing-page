import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/renderTheme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render a paragraph ', () => {
    const { container } = renderTheme(<TextComponent>{'<p>Texto</p>'}</TextComponent>);

    const p = container.querySelector('p');
    expect(p.tagName.toLowerCase()).toBe('p');
    expect(screen.getByText('Texto')).toBeInTheDocument();
  });
  it('should render a text ', () => {
    renderTheme(<TextComponent>{'<p>Texto</p>'}</TextComponent>);

    expect(screen.getByText('Texto')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Texto</TextComponent>);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div>
        <div
          class="c0"
        >
          Texto
        </div>
      </div>
    `);
  });
});
