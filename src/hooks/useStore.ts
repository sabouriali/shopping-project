import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

import { type RootState, type AppDispatch } from "../redux/store/store";

type DispatchFunction = () => AppDispatch;

export const useStoreDispatch: DispatchFunction = useDispatch;

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
