import { Base } from '.';

import gridMock from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: gridMock,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
