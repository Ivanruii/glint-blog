import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
    const router = useRouter();

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            router.push('https://glint-blog.sanity.studio/');
        }, 2000);

        return () => clearTimeout(redirectTimer);
    }, []);

    return <div>Redirigiendo...</div>;
};

export default RedirectPage;