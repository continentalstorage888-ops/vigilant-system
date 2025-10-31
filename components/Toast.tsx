import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, Info, XCircle, X } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const icons = {
  success: <CheckCircle className="text-green-500" />,
  info: <Info className="text-blue-500" />,
  error: <XCircle className="text-red-500" />,
};

const Toast: React.FC = () => {
    const { toastMessages, removeToast } = useAppContext();

    useEffect(() => {
        if (toastMessages.length > 0) {
            const timer = setTimeout(() => {
                removeToast(toastMessages[0].id);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [toastMessages, removeToast]);
    

    return (
        <div className="fixed top-5 right-5 z-[3000] flex flex-col items-end gap-2">
            <AnimatePresence>
                {toastMessages.map((toast) => (
                    <motion.div
                        key={toast.id}
                        layout
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 50, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="flex items-center gap-3 w-auto max-w-sm p-3 rounded-lg shadow-lg bg-stone-200/80 dark:bg-stone-800/80 backdrop-blur-md border border-stone-300/50 dark:border-stone-700/50"
                    >
                        {icons[toast.type]}
                        <p className="text-sm font-medium text-stone-800 dark:text-stone-200">{toast.message}</p>
                        <button onClick={() => removeToast(toast.id)} className="ml-auto p-1 rounded-full hover:bg-stone-300/50 dark:hover:bg-stone-700/50" aria-label="Dismiss notification">
                             <X size={16} className="text-stone-600 dark:text-stone-400" />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Toast;
