import { AxiosHelper } from "./axios";
import { store } from "@/store";

export const api = new AxiosHelper(store);
