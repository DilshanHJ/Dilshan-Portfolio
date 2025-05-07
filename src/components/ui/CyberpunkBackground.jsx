import { useEffect, useRef, useState } from "react";

const CyberpunkBackground = () => {
  const canvasRef = useRef(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const thunderSoundsRef = useRef([]);
  const electricSoundsRef = useRef([]);
  const audioInitializedRef = useRef(false);

  // Initialize audio elements
  useEffect(() => {
    // Create thunder sounds
    thunderSoundsRef.current = [
      new Audio("/sounds/thunder1.mp3"),
      new Audio("/sounds/thunder2.mp3"),
      new Audio("/sounds/thunder3.mp3"),
    ];

    // Create electric sounds
    electricSoundsRef.current = [
      new Audio("/sounds/electric1.mp3"),
      new Audio("/sounds/electric2.mp3"),
    ];

    // Set volume for all sounds
    [...thunderSoundsRef.current, ...electricSoundsRef.current].forEach(
      (sound) => {
        sound.volume = 0.3;
      }
    );

    // Add audio toggle button
    const toggleButton = document.createElement("button");
    toggleButton.innerHTML = "🔊";
    toggleButton.className =
      "fixed bottom-4 right-4 z-50 bg-gray-800 text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors";
    toggleButton.title = "Toggle sound effects";
    toggleButton.onclick = () => {
      setAudioEnabled((prev) => !prev);
      toggleButton.innerHTML = audioEnabled ? "🔊" : "🔇";
    };
    document.body.appendChild(toggleButton);

    return () => {
      document.body.removeChild(toggleButton);
    };
  }, [audioEnabled]);

  // Initialize audio context on first user interaction
  useEffect(() => {
    const initializeAudio = () => {
      if (!audioInitializedRef.current) {
        // Play and immediately pause all sounds to initialize them
        [...thunderSoundsRef.current, ...electricSoundsRef.current].forEach(
          (sound) => {
            sound.play().catch(() => {});
            sound.pause();
            sound.currentTime = 0;
          }
        );
        audioInitializedRef.current = true;
      }

      // Remove the event listeners once initialized
      document.removeEventListener("click", initializeAudio);
      document.removeEventListener("keydown", initializeAudio);
    };

    document.addEventListener("click", initializeAudio);
    document.addEventListener("keydown", initializeAudio);

    return () => {
      document.removeEventListener("click", initializeAudio);
      document.removeEventListener("keydown", initializeAudio);
    };
  }, []);

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

    // Lightning parameters
    const lightnings = [];
    const maxLightnings = 5;
    const lightningColors = ["#0ff", "#f0f", "#00f", "#0f0"];

    // Electric shock parameters
    const shockPoints = [];
    const maxShockPoints = 20;

    // Thunder flash parameters
    let flashOpacity = 0;
    let isFlashing = false;
    let flashDecay = 0.05;

    // Play a random thunder sound
    const playThunderSound = () => {
      if (!audioEnabled) return;

      const sounds = thunderSoundsRef.current;
      const sound = sounds[Math.floor(Math.random() * sounds.length)];

      // Reset the sound if it's already playing
      sound.currentTime = 0;

      // Play with a slight delay to match the visual
      setTimeout(() => {
        sound
          .play()
          .catch((err) => console.error("Error playing thunder sound:", err));
      }, Math.random() * 300);
    };

    // Play a random electric sound
    const playElectricSound = () => {
      if (!audioEnabled) return;

      const sounds = electricSoundsRef.current;
      const sound = sounds[Math.floor(Math.random() * sounds.length)];

      // Reset the sound if it's already playing
      sound.currentTime = 0;

      sound
        .play()
        .catch((err) => console.error("Error playing electric sound:", err));
    };

    // Create a new lightning bolt
    const createLightning = () => {
      // Only create new lightning if we're under the max
      if (lightnings.length < maxLightnings && Math.random() < 0.03) {
        const startX = Math.random() * canvas.width;
        const segments = 10 + Math.floor(Math.random() * 10);
        const color =
          lightningColors[Math.floor(Math.random() * lightningColors.length)];
        const width = 2 + Math.random() * 3;
        const lifespan = 10 + Math.random() * 10;

        lightnings.push({
          startX,
          startY: 0,
          endX: startX + (Math.random() * 400 - 200),
          endY: canvas.height,
          segments,
          color,
          width,
          lifespan,
          age: 0,
          branches: Math.random() < 0.7 ? Math.floor(Math.random() * 3) + 1 : 0,
          offsets: Array(segments)
            .fill()
            .map(() => Math.random() * 100 - 50),
        });

        // Create a flash effect when lightning appears
        if (Math.random() < 0.3) {
          isFlashing = true;
          flashOpacity = 0.2 + Math.random() * 0.2;

          // Play thunder sound
          playThunderSound();
        }
      }
    };

    // Create electric shock points
    const createShockPoint = () => {
      if (shockPoints.length < maxShockPoints && Math.random() < 0.1) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 1 + Math.random() * 3;
        const color =
          lightningColors[Math.floor(Math.random() * lightningColors.length)];
        const lifespan = 20 + Math.random() * 30;

        shockPoints.push({
          x,
          y,
          radius,
          color,
          lifespan,
          age: 0,
          pulseSpeed: 0.1 + Math.random() * 0.2,
          pulse: 0,
        });

        // Play electric sound occasionally
        if (Math.random() < 0.2) {
          playElectricSound();
        }
      }
    };

    // Draw a lightning bolt
    const drawLightning = (lightning) => {
      const {
        startX,
        startY,
        endX,
        endY,
        segments,
        color,
        width,
        offsets,
        age,
        lifespan,
        branches,
      } = lightning;

      // Calculate opacity based on age
      const opacity = 1 - age / lifespan;

      // Draw main lightning bolt
      ctx.strokeStyle = color;
      ctx.lineWidth = width * opacity;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();
      ctx.moveTo(startX, startY);

      // Create jagged lightning path
      const segmentLength = (endY - startY) / segments;

      for (let i = 1; i <= segments; i++) {
        const y = startY + segmentLength * i;
        const xProgress = i / segments;
        const xPos = startX + (endX - startX) * xProgress;

        // Add randomness to the path
        const offset = offsets[i - 1] * (1 - age / lifespan); // Reduce offset as lightning ages
        ctx.lineTo(xPos + offset, y);
      }

      ctx.stroke();

      // Add glow effect
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = 20 * opacity;
      ctx.stroke();
      ctx.restore();

      // Draw branches if any
      if (branches > 0) {
        for (let i = 0; i < branches; i++) {
          const branchStartSegment =
            Math.floor(segments * 0.3) +
            Math.floor(Math.random() * (segments * 0.4));
          const branchStartY = startY + segmentLength * branchStartSegment;
          const branchStartX =
            startX +
            (endX - startX) * (branchStartSegment / segments) +
            offsets[branchStartSegment - 1];

          const branchEndX = branchStartX + (Math.random() * 200 - 100);
          const branchEndY = branchStartY + Math.random() * canvas.height * 0.3;

          ctx.beginPath();
          ctx.moveTo(branchStartX, branchStartY);

          const branchSegments = 3 + Math.floor(Math.random() * 3);
          const branchSegmentLength =
            (branchEndY - branchStartY) / branchSegments;

          for (let j = 1; j <= branchSegments; j++) {
            const y = branchStartY + branchSegmentLength * j;
            const xProgress = j / branchSegments;
            const xPos = branchStartX + (branchEndX - branchStartX) * xProgress;

            // Add randomness to the branch path
            const offset = (Math.random() * 40 - 20) * (1 - age / lifespan);
            ctx.lineTo(xPos + offset, y);
          }

          ctx.strokeStyle = color;
          ctx.lineWidth = width * 0.6 * opacity;
          ctx.stroke();

          // Add glow effect to branches
          ctx.save();
          ctx.shadowColor = color;
          ctx.shadowBlur = 15 * opacity;
          ctx.stroke();
          ctx.restore();
        }
      }
    };

    // Draw electric shock points
    const drawShockPoint = (point) => {
      //eslint-disable-next-line
      const { x, y, radius, color, age, lifespan, pulse, pulseSpeed } = point;

      // Calculate opacity based on age
      const opacity = 1 - age / lifespan;

      // Calculate pulse effect
      const pulseFactor = 0.5 + 0.5 * Math.sin(pulse);

      // Draw the shock point
      ctx.beginPath();
      ctx.arc(x, y, radius * (1 + pulseFactor), 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.fill();

      // Draw glow
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = 15 * pulseFactor * opacity;
      ctx.fill();
      ctx.restore();

      // Draw electric arcs from the point
      if (Math.random() < 0.3) {
        const arcCount = Math.floor(Math.random() * 3) + 1;

        for (let i = 0; i < arcCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const length = radius * (3 + Math.random() * 5);

          ctx.beginPath();
          ctx.moveTo(x, y);

          // Create a jagged arc
          const segments = 3;
          for (let j = 1; j <= segments; j++) {
            const segmentLength = length / segments;
            const segmentX = x + Math.cos(angle) * segmentLength * j;
            const segmentY = y + Math.sin(angle) * segmentLength * j;
            const offset = Math.random() * 5 - 2.5;

            ctx.lineTo(
              segmentX + Math.cos(angle + Math.PI / 2) * offset,
              segmentY + Math.sin(angle + Math.PI / 2) * offset
            );
          }

          ctx.strokeStyle = color;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = opacity * 0.7;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent black for trail effect
      ctx.fillStyle = "rgba(10, 15, 30, 0.2)";
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

      // Handle thunder flash effect
      if (isFlashing) {
        ctx.fillStyle = `rgba(200, 230, 255, ${flashOpacity})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        flashOpacity -= flashDecay;

        if (flashOpacity <= 0) {
          isFlashing = false;
          flashOpacity = 0;
        }
      }

      // Create new lightning bolts
      createLightning();

      // Create new electric shock points
      createShockPoint();

      // Update and draw lightning bolts
      for (let i = lightnings.length - 1; i >= 0; i--) {
        const lightning = lightnings[i];

        // Update lightning age
        lightning.age++;

        // Draw the lightning
        drawLightning(lightning);

        // Remove old lightning
        if (lightning.age >= lightning.lifespan) {
          lightnings.splice(i, 1);
        }
      }

      // Update and draw shock points
      for (let i = shockPoints.length - 1; i >= 0; i--) {
        const point = shockPoints[i];

        // Update point age and pulse
        point.age++;
        point.pulse += point.pulseSpeed;

        // Draw the shock point
        drawShockPoint(point);

        // Remove old points
        if (point.age >= point.lifespan) {
          shockPoints.splice(i, 1);
        }
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasDimensions);

      // Clean up audio elements
      [...thunderSoundsRef.current, ...electricSoundsRef.current].forEach(
        (sound) => {
          sound.pause();
          sound.src = "";
        }
      );
    };
  }, [audioEnabled]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      />
    </>
  );
};

export default CyberpunkBackground;
