import { createSlice, Draft } from "@reduxjs/toolkit";
import { FilterValue } from "antd/es/table/interface";

export interface SortOptionProps<T> {
  sortField: keyof T;
  sortOrder: "ASC" | "DESC";
}

export const createRepoReducer = <T extends { id: string }, F>(name: string) => {
  const initialState = {
    isFetched: false,
    isSelectFetched: false,
    data: [] as T[],
    pagination: { current: 1, pageSize: 10, total: 1 },
    sortOption: {} as SortOptionProps<T>,
    filterOption: {} as Partial<Record<keyof F, any>>,
    search: undefined,
  };

  const slice = createSlice({
    name,
    initialState,
    reducers: {
      setIsFetched: (state, action) => {
        state.isFetched = action.payload;
      },
      setIsSelectFetched: (state, action) => {
        state.isSelectFetched = action.payload;
      },

      setData: (state, action) => {
        const { data = [], pagination } = action.payload;
        state.data = data;
        if (pagination) state.pagination = pagination;
      },
      updateSingleData: (state, action) => {
        state.data = state.data.map((item) => (item.id === action.payload.id ? action.payload : item));
      },
      addData: (state, action) => {
        if (state.isFetched) state.data.unshift(action.payload);
      },
      pushData: (state, action) => {
        if (state.isFetched) state.data.push(action.payload);
      },
      addDataList: (state, action) => {
        if (state.isFetched) {
          state.data.push(...action.payload.data);
          state.pagination = action.payload.pagination || state.pagination;
        }
      },

      updateFilter: (state, action) => {
        const filterObj = action.payload as Partial<Record<keyof F, FilterValue | FilterValue[0]>>;

        state.filterOption = Object.fromEntries(
          Object.entries(filterObj).map(([key, value]) => [key, Array.isArray(value) ? value.join(",") : value]),
        ) as Draft<Partial<Record<keyof F, string>>>;
      },

      updateSort: (state, action) => {
        const { field, order } = action.payload;
        state.sortOption = { sortField: field, sortOrder: order === "ascend" ? "ASC" : "DESC" };
      },
      updatePagination: (state, action) => {
        state.pagination = action.payload;
      },
      updateSearch: (state, action) => {
        state.search = action.payload;
      },
      removeData: (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
      },
      resetRepoState: (state) => {
        Object.assign(state, initialState);
      },
    },
  });

  return slice;
};
