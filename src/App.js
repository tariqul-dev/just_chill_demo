import { Stack } from '@mui/material';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import RightSide from './components/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <Stack direction={'row'} spacing={2} justifyContent='space-between'>

        <Sidebar />
        <Feed />
        <RightSide />
      </Stack>

    </>
  );
}

export default App;
