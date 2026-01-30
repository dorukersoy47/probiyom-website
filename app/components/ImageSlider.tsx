// app/components/ImageSlider.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type ImageSlide = {
    src: string;
    alt: string;
    title?: string;
};

type ImageSliderProps = {
    slides: ImageSlide[];
    durationMs?: number;
    aspectClassName?: string;
};

export default function ImageSlider(props: ImageSliderProps) {
    const {
        slides,
        durationMs = 2500,
        aspectClassName = "aspect-[16/7]",
    } = props;

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (slides.length <= 1) return;

        const id = window.setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, durationMs);

        return () => window.clearTimeout(id);
    }, [activeIndex, slides, durationMs]);

    if (slides.length === 0) return null;

    const activeSlide = slides[activeIndex];

    return (
        <div className="w-full">
            <div className="w-full overflow-hidden rounded-2xl border border-black/10">
                <div className={`relative w-full ${aspectClassName}`}>
                    <Image
                        src={activeSlide.src}
                        alt={activeSlide.alt}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1200px"
                    />
                </div>

                {activeSlide.title ? (
                    <div className="px-4 py-3">
                        <p className="font-semibold text-[var(--color-baltic-blue)]">
                            {activeSlide.title}
                        </p>
                    </div>
                ) : null}
            </div>

            <div className="mt-3 flex items-center gap-2">
                {slides.map((_, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <button
                            key={index}
                            type="button"
                            aria-label={`Slayt ${index + 1}`}
                            onClick={() => setActiveIndex(index)}
                            className={[
                                "h-2.5 rounded-full transition-all",
                                isActive
                                    ? "w-8 bg-[var(--color-baltic-blue)]"
                                    : "w-2.5 bg-black/20",
                            ].join(" ")}
                        />
                    );
                })}
            </div>
        </div>
    );
}
