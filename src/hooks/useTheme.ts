import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

import { type RootState, type AppDispatch } from "../redux/store/store";

type DispatchFunction = () => AppDispatch;

export const useThemeDispatch: DispatchFunction = useDispatch;

export const useThemeSelector: TypedUseSelectorHook<RootState> = useSelector;
