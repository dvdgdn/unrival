import Link from 'next/link';

const FloatingNav = () => {
  return (
    <nav className="floating-nav">
      <Link href="#the-letter">The Letter</Link>
      <Link href="#converging-futures">Converging Futures</Link>
      <Link href="#technique-analysis">Retrograde Analysis</Link>
      <Link href="#the-plan">How We&apos;ll Get There</Link>

      {/* Quick access: Add a Letter / Make a Promise */}
      <a
        href="https://unrival.link/letter"
        target="_blank"
        rel="noopener noreferrer"
        className="external-link"
      >
        Add Letter
      </a>
      <a
        href="https://unrival.link/promise"
        target="_blank"
        rel="noopener noreferrer"
        className="external-link"
      >
        Make Promise
      </a>

      <a
        href="https://docs.google.com/document/d/1DO2LJY-w3fO0a2QS9fVNeG_TmX8O4sWiDSGCtC2iBTM/edit?tab=t.0"
        target="_blank"
        rel="noopener noreferrer"
        className="external-link"
      >
        View Prompts
      </a>
      <Link href="/promise-protocol" className="external-link">
        Technical Spec
      </Link>
    </nav>
  );
};

export default FloatingNav;
