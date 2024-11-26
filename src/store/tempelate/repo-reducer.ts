import { createSlice, Draft } from "@reduxjs/toolkit";

export interface SortOptionProps<T> {
  sortField: keyof T;
  sortOrder: "ASC" | "DESC";
}

export interface FilterOptionProps {
  filterBy: string;
  filterValue: string;
}

export const createRepoReducer = <T extends { id: string }, K = FilterOptionProps>(name: string) => {
  const initialState = {
    isFetched: false,
    isSelectFetched: false,
    data: [] as T[],
    pagination: { current: 1, pageSize: 10, total: 1 },
    sortOption: {} as SortOptionProps<T>,
    filterOption: [] as K,
    search: undefined,
  };

  const slice = createSlice({
    name: name,
    initialState,
    reducers: {
      setIsFetched(state, action) {
        state.isFetched = action.payload;
      },
      setIsSelectFetched(state, action) {
        state.isSelectFetched = action.payload;
      },
      setData(state, action) {
        state.data = action.payload.data ?? [];
        if (action.payload.pagination) state.pagination = action.payload.pagination;
      },
      updateSingleData(state, action) {
        state.data = state.data.map((d) => (d.id === action.payload.id ? action.payload : d));
      },

      addData(state, action) {
        if (state.isFetched) {
          state.data = [action.payload, ...state.data];
        }
      },
      pushData(state, action) {
        if (state.isFetched) {
          state.data = [...state.data, action.payload];
        }
      },
      addDataList(state, action) {
        if (state.isFetched) {
          state.data = [...state.data, ...action.payload.data];
          state.pagination = action.payload.pagination ?? state.pagination;
        }
      },
      updateFilter(state, action) {
        state.filterOption = action.payload;
      },
      updateSort(state, action) {
        state.sortOption = {
          sortField: action.payload.columnKey,
          sortOrder: action.payload.order === "ascend" ? "ASC" : "DESC",
        };
      },
      updatePagination(state, action) {
        state.pagination = action.payload;
      },
      updateSearch(state, action) {
        state.search = action.payload;
      },
      removeData(state, action) {
        state.data = state.data.filter((data) => data.id !== action.payload);
      },
      resetRepoState(state) {
        state.data = [];
        state.isFetched = false;
        state.filterOption = typeof state.filterOption === "object" ? ({} as Draft<K>) : ([] as Draft<K>);
        state.search = undefined;
        state.pagination = { current: 1, pageSize: 10, total: 1 };
      },
    },
  });

  return slice;
};
