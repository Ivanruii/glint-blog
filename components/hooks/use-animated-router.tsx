import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useAnimatedRouter() {
    const router = useRouter();
    const [supportsViewTransitions, setSupportsViewTransitions] = useState<boolean>(false);

    useEffect(() => {
        setSupportsViewTransitions(!!document?.startViewTransition);
    }, []);

    const animatedRoute = (url: string) => {
        if (!supportsViewTransitions) {
            router.push(url);
        } else {
            document!.startViewTransition(() => {
                router.push(url);
            });
        }
    };

    return { animatedRoute, supportsViewTransitions };
}
