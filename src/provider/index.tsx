import { useState, useEffect, FC, PropsWithChildren } from "react";
import DataContext, { Data } from "./DataContext";

const defaultData = [
  { key: 1, list: [0, 1, 2] },
  { key: 2, list: [] },
  { key: 3, list: [] },
];

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<Data>(defaultData);
  const addVote = (idx: number) =>
    setData((prev) => {
      const newState = prev.toSpliced(idx, 1, {
        ...prev[idx],
        list: [...prev[idx].list, prev[idx].list.length],
      });

      sessionStorage.setItem("data", JSON.stringify(newState));

      return newState;
    });

  useEffect(() => {
    const storage = sessionStorage.getItem("data");

    if (storage) {
      setData(JSON.parse(storage));
    }
  }, []);

  return (
    <DataContext.Provider value={{ data, addVote }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
