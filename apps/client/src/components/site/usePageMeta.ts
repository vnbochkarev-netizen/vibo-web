import { useEffect } from "react";

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const descriptionMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const ogTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]',
    );
    const ogDescription = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    );
    if (descriptionMeta) descriptionMeta.content = description;
    if (ogTitle) ogTitle.content = title;
    if (ogDescription) ogDescription.content = description;
  }, [title, description]);
}
