import { create } from "zustand";

export interface QueryParams {
  nameStartsWith?: string;
  titleStartsWith?: string;
  orderBy: string;
  offset?: number;
  sharedAppearances?: string;
  collaborators?: string;
}

interface QueryParamType {
  queryParams: QueryParams;
  setNameStartWith: (text: string) => void;
  setTitleStartWith: (text: string) => void;
  setOrder: (order: string) => void;
  setOffset: (page: number) => void;
  setCharacters: (ids: number[]) => void;
  setCreators: (ids: number[]) => void;
}

const useQueryParams = create<QueryParamType>((set) => ({
  queryParams: { orderBy: "-modified" },
  setNameStartWith: (text) =>
    set((store) => ({
      queryParams: { ...store.queryParams, nameStartsWith: text, offset: 0 },
    })),
  setTitleStartWith: (text) =>
    set((store) => ({
      queryParams: { ...store.queryParams, titleStartsWith: text, offset: 0 },
    })),
  setOrder: (order) =>
    set((store) => ({ queryParams: { ...store.queryParams, orderBy: order } })),
  setOffset: (page) => {
    set((store) => ({
      queryParams: { ...store.queryParams, offset: (page - 1) * 20 },
    }));
  },
  setCharacters: (ids) => {
    set((store) => ({
      queryParams: { ...store.queryParams, sharedAppearances: ids.join(",") },
    }));
  },
  setCreators: (ids) => {
    set((store) => ({
      queryParams: { ...store.queryParams, collaborators: ids.join(",") },
    }));
  },
}));

export default useQueryParams;
