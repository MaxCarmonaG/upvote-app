import { useContext } from "react";
import "./App.css";
import UpvoteList from "./components/UpvoteList";
import DataContext from "./provider/DataContext";

function App() {
  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <section className="section">
      <div className="container">
        {data.map(({ key, list }, idx) => (
          <UpvoteList key={key} list={list} idx={idx} />
        ))}
      </div>
    </section>
  );
}

export default App;
