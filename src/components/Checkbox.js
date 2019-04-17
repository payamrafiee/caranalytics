import React from 'react';
import {Checkbox} from 'semantic-ui-react';

export default ({checked, label, onChange}) => (
    <Checkbox
      checked={checked}
      label={label}
      style={{paddingRight: '2rem', paddingTop: '1rem'}}
      onChange={onChange}
    />
)
