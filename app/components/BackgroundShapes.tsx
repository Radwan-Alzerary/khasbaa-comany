import type React from "react"

interface BackgroundShapesProps {
  className?: string
  color?: string
}

const generateRandomShape = () => {
  const shapeTypes = ["polygon", "path"]
  const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)]

  if (type === "polygon") {
    const points = Array.from({ length: 6 }, () => `${Math.random() * 100},${Math.random() * 100}`).join(" ")
    return <polygon points={points} />
  } else {
    const d = `M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`
    return <path d={d} />
  }
}

export const BackgroundShapes: React.FC<BackgroundShapesProps> = ({ className = "", color = "#3B82F6" }) => {
  const shapes = Array.from({ length: 5 }, (_, i) => (
    <g key={i} opacity={0.1 + i * 0.02}>
      {generateRandomShape()}
    </g>
  ))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.05" />
            <stop offset="100%" stopColor={color} stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#grad)" />
        {shapes.map((shape, index) => (
          <g
            key={index}
            fill={color}
            transform={`translate(${Math.random() * 100}, ${Math.random() * 100}) scale(${0.2 + Math.random() * 0.8})`}
          >
            {shape}
          </g>
        ))}
      </svg>
    </div>
  )
}

