import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';
import { ColorSliders } from './ColorSliders';

import { toRGB } from './utilities';
import { reducer } from './reducer';
import { ThemeContext } from './theme-context';
import {ColorAdjustment} from './ColorAdjustment'

const Application = () => {
  const themes = React.useContext(ThemeContext)
  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0
  });

  return (
    <main style={{ borderColor: toRGB(rgb) ...themes.dark}}>
      {/* <ColorSwatch {...rgb} /> */}
      <ColorAdjustment Adjustment={ColorSliders} />
      <ColorAdjustment Adjustment={ColorInputs} />

    </main>
  );
};

export default Application;
