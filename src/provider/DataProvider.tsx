import { useState, useEffect, FC, PropsWithChildren, useCallback } from "react";
import DataContext, { Data } from "./DataContext";

const defaultData = [
  { key: 1, list: [], selected: false },
  { key: 2, list: [], selected: false },
  { key: 3, list: [], selected: false },
];

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<Data>(defaultData);

  const handleSelected = useCallback(
    (idx: number) =>
      setData((prev) => {
        const target = prev[idx];
        const newState = prev.toSpliced(idx, 1, {
          ...target,
          selected: !target.selected,
        });

        sessionStorage.setItem("data", JSON.stringify(newState));

        return newState;
      }),
    []
  );

  const addVote = (idx: number) =>
    setData((prev) => {
      const target = prev[idx];
      const newState = prev.toSpliced(idx, 1, {
        ...target,
        list: [...target.list, target.list.length],
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
    <DataContext.Provider value={{ data, addVote, handleSelected }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
