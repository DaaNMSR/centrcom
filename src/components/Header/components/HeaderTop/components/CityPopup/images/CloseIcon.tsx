const CloseIcon = ({ color = 'currentColor', width = '24', height = '24' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path d="M6 18L18 6M6 6l12 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default CloseIcon;
