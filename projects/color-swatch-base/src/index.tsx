import { render } from 'react-dom';
import Application from './Application';
import './style.scss';
import { ThemeProvider } from './theme-context';
import { RGBContextProvider } from './context';

const rootElement = document.getElementById('root');
render(

    <ThemeProvider>
        <RGBContextProvider>
            <Application />
        </RGBContextProvider>
    </ThemeProvider>
