
import ContextProvider from "./context/context"
import ReactRoute from './routes/routes'
function App() {
  return (
    <div>
      <ContextProvider>

      <ReactRoute/>
      </ContextProvider>

      {/* <SignUp/>
      <SignIn/> */}
    </div>
  );
}

export default App;
