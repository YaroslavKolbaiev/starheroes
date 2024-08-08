import { useEffect, useRef } from 'react';

type Props = {
  doRequest: (param?: string) => void;
  page: number;
};

// observer component to trigger the next page request
export function Observer({ doRequest, page }: Props) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // create an observer to watch the observer element
    const observer = new IntersectionObserver(([entry]) => {
      // when the observer element intersects with the viewport, trigger the next page request
      if (entry && entry.isIntersecting) {
        doRequest(page.toString());
      }
    });

    // start observing the observer
    observer.observe(observerRef.current!);
    // stop observing the observer when the component is unmounted
    return () => observer.disconnect();
  }, [page]); // re-run the effect when the page changes

  // observer element to trigger the next page request
  // it sits at the bottom of the page and is not visible
  // when it intersects with the viewport, the next page request is triggered
  return <div ref={observerRef} className="h-1 w-1" />;
}
