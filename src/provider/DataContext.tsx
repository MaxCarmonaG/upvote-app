import { createContext } from "react";

export type Data = {
  key: number;
  list: number[];
}[];

type DataContextProps = {
  data: Data;
  addVote: (idx: number) => void;
};

const DataContext = createContext<DataContextProps>({
  data: [],
  addVote: () => {},
});

export default DataContext;
