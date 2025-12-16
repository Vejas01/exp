import { useEffect, useRef } from 'react';

export default function SakuraRain() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // Guard clause
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let isRaining = true;
        const leaves = [];
        const leafCount = 60; // Fewer, larger leaves

        // Stop rain after 8 seconds
        setTimeout(() => {
            isRaining = false;
        }, 8000);

        class Leaf {
            constructor() {
                this.reset();
                this.y = Math.random() * height - height; // Start widely distributed
            }

            reset() {
                this.x = Math.random() * width;
                this.y = -50;
                this.size = Math.random() * 8 + 8; // Larger than petals
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 1.5 + 1;
                // Autumn Colors: Orange, Gold, Burnt Sienna
                const colors = ['255, 94, 0', '255, 140, 0', '210, 105, 30'];
                const selectedColor = colors[Math.floor(Math.random() * colors.length)];
                this.color = `rgba(${selectedColor}, ${Math.random() * 0.4 + 0.6})`;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 3 - 1.5;
                this.wobble = Math.random() * Math.PI * 2;
            }

            update() {
                this.y += this.speedY;
                this.wobble += 0.05;
                this.x += Math.sin(this.wobble) * 1.5 + this.speedX;
                this.rotation += this.rotationSpeed;

                // Reset if off screen AND still raining
                if (this.y > height + 50) {
                    if (isRaining) {
                        this.reset();
                    }
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);

                // Draw Leaf Shape
                ctx.beginPath();
                ctx.moveTo(0, -this.size);
                ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size / 2, this.size / 2, 0, this.size);
                ctx.bezierCurveTo(-this.size / 2, this.size / 2, -this.size / 2, -this.size / 2, 0, -this.size);

                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.restore();
            }
        }

        // Initialize leaves
        for (let i = 0; i < leafCount; i++) {
            leaves.push(new Leaf());
        }

        let animationId;
        function animate() {
            ctx.clearRect(0, 0, width, height);

            let activeLeaves = 0;
            leaves.forEach(leaf => {
                // Optimization: Only update/draw if on screen
                if (leaf.y <= height + 60) {
                    leaf.update();
                    leaf.draw();
                    activeLeaves++;
                }
            });

            if (activeLeaves > 0 || isRaining) {
                animationId = requestAnimationFrame(animate);
            }
        }

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };

    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1
            }}
        />
    );
}
