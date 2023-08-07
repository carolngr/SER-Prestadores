import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes } from "./routes";
import { ToastProvider } from "./stores/useToast";
import { AuthProvider } from "./stores/useAuth";
import { ThemeProvider } from "styled-components";
import theme from "./global/styles/theme";

const queryClient = new QueryClient()

function App() {
  return( 
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ToastProvider>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </ToastProvider>
      </ThemeProvider>
       
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
