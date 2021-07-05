import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/renderTheme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render a paragraph with text', () => {
    const { container } = renderTheme(<TextComponent>Texto</TextComponent>);
    const p = container.querySelector('p');

    expect(p.tagName.toLowerCase()).toBe('p');
    expect(screen.getByText('Texto')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Texto</TextComponent>);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div>
        <p
          class="c0"
        >
          Texto
        </p>
      </div>
    `);
  });
});
