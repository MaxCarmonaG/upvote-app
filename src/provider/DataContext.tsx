import { createContext } from "react";

export type Data = {
  key: number;
  list: number[];
  selected: boolean;
}[];

type DataContextProps = {
  data: Data;
  addVote: (idx: number) => void;
  handleSelected: (idx: number) => void;
};

const DataContext = createContext<DataContextProps>({
  data: [],
  addVote: () => {},
  handleSelected: () => {},
});

export default DataContext;
