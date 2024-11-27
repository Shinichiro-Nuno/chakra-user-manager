import { Box } from '@chakra-ui/react';
import { Router } from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";

function App() {

  return (
    <Box bg="gray.100" color="gray.800" height="100vh">
      <BrowserRouter>
        <Toaster />
        <Router />
      </BrowserRouter>
    </Box>
  )
}

export default App
