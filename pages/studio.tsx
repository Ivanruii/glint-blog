import React from 'react';
import { useRouter } from 'next/router';

const RedirectPage: React.FC = () => {
    const router = useRouter();

    React.useEffect(() => {
        const redirectTimer = setTimeout(() => {
            router.push('https://glint-blog.sanity.studio/');
        }, 2000);

        return () => clearTimeout(redirectTimer);
    }, []);

    return <div>Redirigiendo...</div>;
};

export default RedirectPage;