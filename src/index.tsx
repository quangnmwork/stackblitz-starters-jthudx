import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UIProvider } from '@yamada-ui/react';
import { App } from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <UIProvider>
      <App name="StackBlitz" />
    </UIProvider>
  </StrictMode>
);
