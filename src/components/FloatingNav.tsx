import Link from 'next/link';

const FloatingNav = () => {
  return (
    <nav className="floating-nav">
      <Link href="#the-letter">The Letter</Link>
      <Link href="#technique-letter">The Technique</Link>
      <Link href="#technique-analysis">Retrograde Analysis</Link>
      <Link href="#the-plan">How We&apos;ll Get There</Link>
      <a href="https://docs.google.com/document/d/1DO2LJY-w3fO0a2QS9fVNeG_TmX8O4sWiDSGCtC2iBTM/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="external-link">View Planning Docs</a>
    </nav>
  );
};

export default FloatingNav;