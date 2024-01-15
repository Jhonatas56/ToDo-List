import { Header } from "./components/Header";
import { TasksArea } from "./containers/TasksArea";

import { Content } from "./styles";

function App() {
  return (
    <Content>
      <Header />
      <TasksArea />
    </Content>
  );
}

export default App;
