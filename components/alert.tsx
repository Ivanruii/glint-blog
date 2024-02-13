import cn from "classnames";
import React from "react";
import { EXAMPLE_PATH } from "../lib/constants";
import { Container } from "./";
import { ModeToggle } from "./toogle-theme";

interface AlertProps {
  preview: boolean;
}

export const Alert: React.FC<AlertProps> = ({ preview }) => {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="flex items-center justify-between py-2 text-sm text-center">
          <div>
            {preview ? (
              <>
                This page is a preview.{" "}
                <a
                  href="/api/exit-preview"
                  className="underline transition-colors duration-200 hover:text-cyan"
                >
                  Click here
                </a>{" "}
                to exit preview mode.
              </>
            ) : (
              <>
                El código fuente de este blog{" "}
                <a
                  href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                  className="underline transition-colors duration-200 hover:text-success"
                >
                  esta disponible en GitHub
                </a>
                .
              </>
            )}
          </div>
          <ModeToggle />
        </div>
      </Container>
    </div>
  );
};
