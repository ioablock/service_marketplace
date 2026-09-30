export default function ScoreRing({ score = 0, size = 100 }) {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  // Top two bands use brand gradient; lower bands stay semantic
  const useGradient = score >= 75;
  const solidColor =
    score >= 55 ? '#2563eb' :
    score >= 35 ? '#ca8a04' :
    '#dc2626';

  const gradientId = `ring-grad-${size}`;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#F97316" />
            <stop offset="100%" stopColor="#FB923C" />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e7e5e4" strokeWidth="4" />
        {/* Fill */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={useGradient ? `url(#${gradientId})` : solidColor}
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span
        className="absolute font-black"
        style={{
          color: useGradient ? '#F97316' : solidColor,
          fontSize: size < 56 ? '0.65rem' : size < 80 ? '1rem' : '1.25rem',
        }}
      >
        {score}
      </span>
    </div>
  );
}
