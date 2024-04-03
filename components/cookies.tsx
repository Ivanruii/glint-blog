import { cn } from "@/lib/utils";
import { CookieIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface CookieConsentProps {
  demo?: boolean;
  onAcceptCallback?: () => void;
  onDeclineCallback?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  demo = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);

  const accept = (): void => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
    onAcceptCallback();
  };

  const decline = (): void => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
    }, 700);
    onDeclineCallback();
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true")) {
        if (!demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch (e) {
      // console.log("Error: ", e);
    }
  }, []);

  return (
    <div
      className={cn(
        "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden"
      )}
    >
      <Card className="m-3">
        <CardHeader className="flex flex-row items-end justify-between">
          <CardTitle>Usamos Cookies</CardTitle>
          <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
        </CardHeader>
        <CardContent>
          <p className="text-sm font-normal text-start">
            Utilizamos cookies para garantizarle la mejor experiencia en nuestro
            sitio web. Para obtener más información sobre cómo utilizamos las
            cookies, consulte nuestra política de cookies.
            <br />
            <span className="text-xs">
              Haciendo clic en "
              <span className="font-medium opacity-80">Aceptar</span>", aceptas
              el uso que hacemos de las cookies.
            </span>
            <br />
            <Link href={`/cookies`} className="text-xs underline">
              Ver politica de cookies.
            </Link>
          </p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button onClick={accept} className="w-full">
            Aceptar
          </Button>
          <Button onClick={decline} className="w-full" variant="secondary">
            Rechazar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
