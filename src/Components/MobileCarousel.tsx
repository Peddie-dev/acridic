"use client";

import {
  Children,
  useCallback,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

export default function MobileCarousel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const slides = Children.toArray(children);

  const slideWidth = () => {
    const el = scrollerRef.current;
    const slide = el?.firstElementChild as HTMLElement | undefined;
    if (!el || !slide) return 0;
    const styles = getComputedStyle(el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 16;
    return slide.offsetWidth + gap;
  };

  const onScroll = useCallback(() => {
    const el = scrollerRef.current;
    const width = slideWidth();
    if (!el || !width) return;
    const next = Math.round(el.scrollLeft / width);
    setIndex(Math.max(0, Math.min(slides.length - 1, next)));
  }, [slides.length]);

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    const width = slideWidth();
    if (!el || !width) return;
    el.scrollTo({ left: i * width, behavior: "smooth" });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(Math.min(slides.length - 1, index + 1));
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(Math.max(0, index - 1));
    }
  };

  return (
    <div className={className}>
      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        tabIndex={0}
        onScroll={onScroll}
        onKeyDown={onKeyDown}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-1"
      >
        {slides.map((child, i) => (
          <div
            key={i}
            className="w-[min(360px,calc(100%-40px))] shrink-0 snap-start [&>*]:h-full"
          >
            {child}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Slides">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={
              i === index
                ? "h-2 w-5 rounded-full bg-[#16A34A]"
                : "h-2 w-2 rounded-full bg-[#D4D4D8]"
            }
          />
        ))}
      </div>
    </div>
  );
}
