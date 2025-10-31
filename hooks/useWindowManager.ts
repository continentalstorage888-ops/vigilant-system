import { useAppContext } from '../contexts/AppContext';

export const useWindowManager = () => {
    const { windows, openWindow, closeWindow, toggleMinimize, focusWindow } = useAppContext();
    return { windows, openWindow, closeWindow, toggleMinimize, focusWindow };
};