import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { Transactions } from './pages/Transactions';
import { GlobalStyled } from './styles/global';
import { TransactionsProvider } from './contexts/TransactionsContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
