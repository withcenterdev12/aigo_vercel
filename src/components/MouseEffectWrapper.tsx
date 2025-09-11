import { useEffect, useState, useRef } from "react";
import type { ReactNode } from "react";

interface MouseEffectWrapperProps {
  children: ReactNode;
}

export default function MouseEffectWrapper({ children }: MouseEffectWrapperProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInWrapper, setIsMouseInWrapper] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseEnter = () => {
      setIsMouseInWrapper(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInWrapper(false);
    };

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("mousemove", handleMouseMove);
      wrapper.addEventListener("mouseenter", handleMouseEnter);
      wrapper.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        wrapper.removeEventListener("mousemove", handleMouseMove);
        wrapper.removeEventListener("mouseenter", handleMouseEnter);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {/* Blob hover effect */}
      {isMouseInWrapper && (
        <div
          className="pointer-events-none fixed z-[1] h-[200px] w-[200px] rounded-full opacity-0 blur-2xl transition-all duration-300 ease-out sm:opacity-60"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            background: `radial-gradient(circle, rgba(151, 168, 255, 0.8) 0%, rgba(115, 147, 255, 0.6) 40%, rgba(26, 31, 255, 0.4) 100%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}