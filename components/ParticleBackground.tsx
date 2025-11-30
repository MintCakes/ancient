import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();

    // Configuration for "Qi Flow" (Smoke)
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];
    const particleCount = 40; // Fewer particles for a smoky, less cluttered look

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15, // Slow horizontal movement
        vy: (Math.random() - 0.5) * 0.15, // Slow vertical movement
        radius: Math.random() * 200 + 100, // Large radius for soft look
        alpha: Math.random() * 0.03 + 0.01, // Very low opacity
      });
    }

    const animate = () => {
      // Clear with very slight transparency to leave trails? 
      // No, for smoke we want smooth redrawing or we get mud. 
      // We clear fully but compose softly.
      ctx.clearRect(0, 0, width, height);
      
      // Global background is handled by CSS (Deep Void Cyan)
      
      // Draw "Qi" Smoke
      ctx.globalCompositeOperation = 'screen'; // Additive blending for light

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        
        // Oriental Cyber Colors: Cyan/Jade/Grey
        // Subtle gradient from center to edge
        gradient.addColorStop(0, `rgba(16, 185, 129, ${p.alpha})`); // Jade center
        gradient.addColorStop(0.5, `rgba(6, 95, 70, ${p.alpha * 0.5})`); // Darker Green
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Optional: Add a very faint, slow scanning line or flow
      // To simulate "Digital Qi"
      const time = Date.now() * 0.0005;
      const scanY = (Math.sin(time) * 0.5 + 0.5) * height;
      
      const scanGrad = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50);
      scanGrad.addColorStop(0, 'rgba(0,0,0,0)');
      scanGrad.addColorStop(0.5, 'rgba(0, 255, 204, 0.02)'); // Extremely faint cyan line
      scanGrad.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
};

export default ParticleBackground;