import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: '<p><a href="https://github.com/morricedev">Feito com ❤ por Morrice</a></p>',
  },
  argTypes: {
    html: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
