import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/renderTheme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://example.com">Text</MenuLink>);
    expect(screen.getByRole('link', { name: 'Text' })).toBeInTheDocument();
  });

  it('should render a link with default values', () => {
    renderTheme(<MenuLink link="https://example.com">Text</MenuLink>);
    expect(screen.getByRole('link', { name: 'Text' })).toHaveAttribute('target', '_self');
  });

  it('should open in a new tab', () => {
    renderTheme(
      <MenuLink link="https://example.com" newTab>
        Text
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Text' })).toHaveAttribute('target', '_blank');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="https://example.com" newTab>
        Text
      </MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.75rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="https://example.com"
        target="_blank"
      >
        Text
      </a>
    `);
  });
});
