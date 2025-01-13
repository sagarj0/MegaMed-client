import { createSlice, Draft } from "@reduxjs/toolkit";

export interface SortOptionProps<T> {
  sortField: keyof T;
  sortOrder: "ASC" | "DESC";
}

export const createRepoReducer = <T extends { id: string }, F>(name: string, initialFilter: Partial<F> = {}) => {
  const initialState = {
    isFetched: false,
    isSelectFetched: false,
    fetch: false,
    data: [] as T[],
    pagination: { current: 1, pageSize: 20, total: 1 },
    sortOption: {} as SortOptionProps<T>,
    filterOption: initialFilter as Partial<F>,
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
      setFetch: (state, action) => {
        state.fetch = action.payload;
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
        //reset isFetched on filter change
        state.isFetched = false;

        const filterObj = action.payload as Partial<F>;

        if (Object.keys(filterObj).length === 0) return;

        state.filterOption = Object.fromEntries(
          Object.entries(filterObj).map(([key, value]) => [key, Array.isArray(value) ? value.join(",") : value]),
        ) as Draft<Partial<F>>;
      },

      updateSort: (state, action) => {
        //reset isFetched on sort change
        state.isFetched = false;

        const { field, order } = action.payload;
        state.sortOption = { sortField: field, sortOrder: order === "ascend" ? "ASC" : "DESC" };
      },
      updatePagination: (state, action) => {
        //reset isFetched on pagination change
        state.isFetched = false;

        state.pagination = action.payload;
      },
      updateSearch: (state, action) => {
        //reset isFetched on search change
        state.isFetched = false;

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
