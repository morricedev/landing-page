import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Dignissimos,molestias ut aperiam incidunt minus velit nisi iusto quaerat
    eligendi quos laborum nam ratione quas aut? Repellendus, earum hic? Autem, ut.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
