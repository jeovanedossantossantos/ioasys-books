import React from 'react';
import Rotas from './routes/Routes';
import AuthContext from './hooks/auth';
function App() {
  return (
    < >
      <AuthContext>
        <Rotas />
      </AuthContext>


    </>
  );
}

export default App;
