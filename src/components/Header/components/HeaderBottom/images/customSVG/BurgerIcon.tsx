const BurgerIcon = ({ color = 'currentColor' }) => {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill={color}>
      <rect width="18" height="2" x="3" y="6" rx="2" />
      <rect width="18" height="2" x="3" y="12" rx="2" />
      <rect width="18" height="2" x="3" y="18" rx="2" />
    </svg>
  );
};

export default BurgerIcon;
