import React from 'react';
import { storiesOf } from '@storybook/react';

import { CardRow } from '../src';

storiesOf('CardRow', module)
  .add('Default', () => {
    return(
      <div style={{width: "300px"}}>
        <CardRow
          title="My Title"
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequuntur corrupti veniam maiores illum, quod vel aspernatur placeat et necessitatibus commodi voluptatem praesentium hic? Autem illo ut natus nostrum minima.</p>
        </CardRow>
      </div>
    )
  })