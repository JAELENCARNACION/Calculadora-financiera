import { DollarSign } from 'react-feather';

export default function Header() {
  return (
    <header className="header">
      <div className="shell header-inner">
        <span className="logo" aria-hidden="true">
        <DollarSign size={24} />
        </span>
        <span className="brand">FinanCalc</span>
      </div>
    </header>
  );
}