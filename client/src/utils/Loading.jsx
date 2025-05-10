import React from 'react'
import useAppStore from '../store/AppStore'


const MIN_LOADING_TIME = 500; // 0.25 วินาที

const Loading = () => {
    const loading = useAppStore((state) => state.loading);

    const [show, setShow] = React.useState(false);
    const timerRef = React.useRef();

    React.useEffect(() => {
        if (loading) {
            setShow(true);
        } else {
            timerRef.current = setTimeout(() => setShow(false), MIN_LOADING_TIME);
        }
        return () => clearTimeout(timerRef.current);
    }, [loading]);

    if (!show) return null;
    return (
      <div className="fixed inset-0 bg-white/30 flex items-center justify-center z-[40]">
        <span className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-500"></span>
      </div>
    );
};

export default Loading