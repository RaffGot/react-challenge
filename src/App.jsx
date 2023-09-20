
import RouterMain from "./utils/routes/RouterMain";
import { ROUTES } from "./utils/routes/routes";

function App() {
  return (
    <>
      <RouterMain routes={ROUTES} />
    </>
  );
}

export default App;
