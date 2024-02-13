import Layout from './layout';
import AppRoutes from 'routes/AppRoutes';
import { AppDataProvider } from 'providers/AppDataProvider';

function App() {
  return (
    <div>
      <AppDataProvider>
        {/* <Layout /> */}
        <AppRoutes />
      </AppDataProvider>
    </div>
  );
}

export default App;
