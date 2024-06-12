import "./App.css";
import { Header } from "./component/Header";
// import { SearchTopic } from "./component/SearchTopic";
import TopicHighlight from "./component/TopicHighlight";

function App() {
  return (
  <div className="App">
    <Header />
    {/* <SearchTopic />  สร้างแยกแล้วไม่สามารถใช้งานได้เลยไม่นำมาใช้  */}
    <TopicHighlight />
  </div>
  )
};

export default App;
