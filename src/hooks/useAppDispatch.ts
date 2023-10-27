import { useDispatch } from 'react-redux';
import { AppDispatch, AppThunkDispatch } from '../appState/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppThunkDispatch = useDispatch;
