import { useEffect, useRef } from "react";

const CyberpunkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Grid parameters
    const gridSize = 40;
    const gridLineWidth = 0.5;
    const gridColor = "rgba(0, 255, 255, 0.15)";

    // Particles parameters
    const particles = [];
    const particleCount = 100;
    const particleBaseSize = 2;
    const particleAddedSize = 1;
    const particleBaseSpeed = 0.2;
    const particleVariance = 0.5;
    const particleColors = ["#0ff", "#f0f", "#00f", "#0f0"];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: particleBaseSize + Math.random() * particleAddedSize,
        speedX: (Math.random() - 0.5) * particleVariance,
        speedY: (Math.random() - 0.5) * particleVariance,
        baseSpeed: particleBaseSpeed,
        color:
          particleColors[Math.floor(Math.random() * particleColors.length)],
        pulse: Math.random() * 2 * Math.PI, // Random start phase
        pulseSpeed: 0.05 + Math.random() * 0.05,
      });
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent black for trail effect
      ctx.fillStyle = "rgba(10, 15, 30, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = gridLineWidth;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x +=
          particle.speedX + Math.sin(Date.now() * 0.001) * particle.baseSpeed;
        particle.y +=
          particle.speedY + Math.cos(Date.now() * 0.001) * particle.baseSpeed;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Pulsating size
        const pulseFactor = 0.5 + 0.5 * Math.sin(particle.pulse);
        particle.pulse += particle.pulseSpeed;

        // Draw particle
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size * pulseFactor,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw glow
        const glow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3 * pulseFactor
        );
        glow.addColorStop(0, particle.color);
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size * 3 * pulseFactor,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = glow;
        ctx.fill();
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default CyberpunkBackground;
