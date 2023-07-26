import { create } from "zustand";

export interface QueryParams {
  nameStartsWith?: string;
  titleStartsWith?: string;
  orderBy?: string;
  offset?: number;
}

interface QueryParamType {
  queryParams: QueryParams;
  setNameStartWith: (text: string) => void;
  setTitleStartWith: (text: string) => void;
  setOrder: (order: string) => void;
  setOffset: (page: number) => void;
}

const useQueryParams = create<QueryParamType>((set) => ({
  queryParams: {},
  setNameStartWith: (text) =>
    set(() => ({ queryParams: { nameStartsWith: text } })),
  setTitleStartWith: (text) =>
    set(() => ({ queryParams: { titleStartsWith: text } })),
  setOrder: (order) =>
    set((store) => ({ queryParams: { orderBy: order, ...store.queryParams } })),
  setOffset: (page) => {
    set((store) => ({
      queryParams: { ...store.queryParams, offset: (page - 1) * 20 },
    }));
  },
}));

export default useQueryParams;
