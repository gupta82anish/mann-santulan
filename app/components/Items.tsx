interface WavyLineProps {
  className?: string;
  color?: string;
}

export function WavyLine({ 
  className = "",
  color = "#1f5071" // muted-green color by default
}: WavyLineProps) {
  return (
    <div className={`flex justify-center bg-transparent items-center my-4 ${className}`}>
      <svg 
        width="180" 
        height="12" 
        viewBox="0 0 180 12"
        className="opacity-60"
      >
        <path 
          d="M0,6 C15,2 15,10 30,6 C45,2 45,10 60,6 C75,2 75,10 90,6 C105,2 105,10 120,6 C135,2 135,10 150,6 C165,2 165,10 180,6"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}