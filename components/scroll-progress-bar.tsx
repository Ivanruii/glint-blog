import React from 'react';

export const ScrollProgressBar: React.FC = () => {
    const [scrollProgress, setScrollProgress] = React.useState(0);

    React.useEffect(() => {
        const onScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

            const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div className={`fixed left-0 w-full h-1 bg-blue-500 top-14 filter backdrop-blur-md rounded-r-full w-[${scrollProgress}%] `} style={{ width: `${scrollProgress}%` }} />
    );
};
