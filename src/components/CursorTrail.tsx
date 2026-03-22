import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  alpha: number;
  size: number;
  vx: number;
  vy: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to window
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Track mouse
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Spawn 2–3 particles per mouse move
      const count = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.5;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          alpha: 1,
          size: Math.random() * 4 + 2,
          vx: Math.cos(angle) * speed * 0.5,
          vy: Math.sin(angle) * speed * 0.5 - 0.5,
        });
      }

      // Cap particles for performance
      if (particlesRef.current.length > 40) {
        particlesRef.current = particlesRef.current.slice(-40);
      }
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(p => p.alpha > 0.02);

      particlesRef.current.forEach(p => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        // Gradient fill: red core → orange edge
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grad.addColorStop(0, `rgba(236, 29, 36, ${p.alpha})`);
        grad.addColorStop(1, `rgba(251, 146, 60, 0)`);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();

        // Update
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.05; // increased alpha decay for performance
        p.size *= 0.95; // increased size decay
        p.vy -= 0.02; // slight upward drift
      });

      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;
