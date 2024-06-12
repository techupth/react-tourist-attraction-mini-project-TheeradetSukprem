import "./App.css";
import { Header } from "./component/Header";
import { SearchTopic } from "./component/SearchTopic";
import { TopicCard } from "./component/TopicCard";
import TopicHighlight from "./component/TopicHighlight";

function App() {
  return (
  <div className="App">
    <Header />
    <SearchTopic />
    <TopicHighlight />
  </div>
  )
};

export default App;
