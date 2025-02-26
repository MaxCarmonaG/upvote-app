import { useContext } from "react";
import "./App.css";
import UpvoteList from "./components/UpvoteList";
import { DataContext } from "./provider";

function App() {
  const { data } = useContext(DataContext);

  return (
    <section className="section">
      <div className="container">
        {data.map(({ key, list, selected }, idx) => (
          <UpvoteList key={key} list={list} idx={idx} selected={selected} />
        ))}
      </div>
    </section>
  );
}

export default App;
