interface WavyLinesProps {
  className?: string;
  opacity?: number;
  strokeWidth?: number;
}

export default function WavyLines({ 
  className = "",
  opacity = 0.2,
  strokeWidth = 1.5
}: WavyLinesProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg 
        width="100%" 
        height="24" 
        viewBox="0 0 1200 24" 
        preserveAspectRatio="none"
        className="opacity-20"
      >
        {/* First wavy line */}
        <path 
          d="M0,12 Q75,6 150,12 T300,12 T450,12 T600,12 T750,12 T900,12 T1050,12 T1200,12"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted-green"
          style={{ opacity: opacity }}
        />
        {/* Second wavy line (slightly offset) */}
        <path 
          d="M0,12 Q75,18 150,12 T300,12 T450,12 T600,12 T750,12 T900,12 T1050,12 T1200,12"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted-green"
          style={{ opacity: opacity }}
        />
        {/* Third wavy line (more offset) */}
        <path 
          d="M0,8 Q75,14 150,8 T300,8 T450,8 T600,8 T750,8 T900,8 T1050,8 T1200,8"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted-green"
          style={{ opacity: opacity }}
        />
        {/* Fourth wavy line (more offset) */}
        <path 
          d="M0,16 Q75,10 150,16 T300,16 T450,16 T600,16 T750,16 T900,16 T1050,16 T1200,16"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted-green"
          style={{ opacity: opacity }}
        />
      </svg>
    </div>
  )
} 