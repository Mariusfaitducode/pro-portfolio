import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: { x: number; y: number; baseAlpha: number; phase: number; speed: number }[] = [];

    const spacing = 25; // Slightly denser
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          particles.push({
            x: i * spacing,
            y: j * spacing,
            baseAlpha: 0.15, // Increased base opacity
            phase: Math.random() * Math.PI * 2,
            speed: 0.01 + Math.random() * 0.02
          });
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.phase += p.speed;
        // Oscillate alpha between 0.15 and 0.45 for better visibility
        const alpha = p.baseAlpha + Math.sin(p.phase) * 0.2;
        const finalAlpha = Math.max(0.1, Math.min(0.5, alpha));

        // Use a dark color for visibility on light bg
        ctx.fillStyle = `rgba(17, 17, 17, ${finalAlpha})`; 
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2); // Slightly larger dots
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-[-1] pointer-events-none opacity-60"
    />
  );
};