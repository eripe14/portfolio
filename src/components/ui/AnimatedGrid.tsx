export default function AnimatedGrid() {
    return (
        <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(to right, rgb(99, 102, 241, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgb(99, 102, 241, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
            }}></div>
        </div>
    );
}