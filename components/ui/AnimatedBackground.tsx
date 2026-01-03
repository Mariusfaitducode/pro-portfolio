import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: { 
      x: number; 
      y: number; 
      baseAlpha: number; 
      phase: number; 
      speed: number;
      blueInfluence: number; // Track blue influence with decay
    }[] = [];

    const spacing = 25; // Slightly denser
    const interactionRadius = 150; // Radius around cursor where dots turn blue
    const fadeOutSpeed = 0.05; // How fast blue influence fades (0-1 per frame)
    
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
            speed: 0.01 + Math.random() * 0.02,
            blueInfluence: 0 // Start with no blue influence
          });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      particles.forEach(p => {
        p.phase += p.speed;
        // Oscillate alpha between 0.15 and 0.45 for better visibility
        const alpha = p.baseAlpha + Math.sin(p.phase) * 0.2;
        const finalAlpha = Math.max(0.1, Math.min(0.5, alpha));

        // Calculate distance from particle to mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Calculate current influence (0 to 1)
        let currentInfluence = 0;
        if (distance < interactionRadius) {
          currentInfluence = 1 - (distance / interactionRadius); // 0 to 1
        }
        
        // Update blue influence: increase if in range, decay if not
        if (currentInfluence > p.blueInfluence) {
          // Quickly respond when entering range
          p.blueInfluence = currentInfluence;
        } else {
          // Slowly fade out when leaving range
          p.blueInfluence = Math.max(0, p.blueInfluence - fadeOutSpeed);
        }
        
        // Use the blue influence (with delay) for rendering
        const influence = p.blueInfluence;
        
        if (influence > 0.01) {
          // Make blue dots much more visible - stronger color and higher alpha
          const blueAlpha = Math.min(1, finalAlpha * (1.5 + influence * 1.0));
          
          // Blend between dark gray (17, 17, 17) and accent blue (0, 71, 255)
          // Use stronger influence for more vibrant blue
          const r = Math.round(17 + (0 - 17) * influence);
          const g = Math.round(17 + (71 - 17) * influence);
          const b = Math.round(17 + (255 - 17) * influence);
          
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${blueAlpha})`;
        } else {
          // Use a dark color for visibility on light bg
          ctx.fillStyle = `rgba(17, 17, 17, ${finalAlpha})`;
        }
        
        ctx.beginPath();
        // Make blue dots larger for better visibility
        const dotSize = influence > 0.01 ? 2.5 : 1.5;
        ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-[-1] pointer-events-none opacity-60"
    />
  );
};