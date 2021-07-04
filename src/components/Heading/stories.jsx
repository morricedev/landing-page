import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Teste',
    light: false,
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args}></Heading>;
export const Dark = (args) => <Heading {...args} light={true}></Heading>;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};
