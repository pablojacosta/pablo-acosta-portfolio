"use client";
import { useRouter } from "next/navigation";

export interface IExtendedDocument extends Document {
  startViewTransition?: any;
}

export default function useAnimatedRouter() {
  const router = useRouter();

  const animatedRoute = (url: string) => {
    const extendedDocument = document as IExtendedDocument;
    if (!extendedDocument.startViewTransition) {
      return router.push(url);
    } else {
      extendedDocument.startViewTransition(() => {
        router.push(url);
      });
    }
  };

  return { animatedRoute };
}
