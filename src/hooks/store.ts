import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useModalDispatch: () => AppDispatch = useDispatch;
export const useModalSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useMenuTagSelector: TypedUseSelectorHook<RootState> = useSelector;
