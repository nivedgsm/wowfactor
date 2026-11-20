export default function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 16L16 4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        <path
          d="M8 4H16V12"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}