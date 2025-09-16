const PromiseLifecycle = () => {
  return (
    <div className="promise-lifecycle">
      <div className="stage">Intention</div>
      <div className="arrow">→</div>
      <div className="stage">Declared <span className="hint">(scoped)</span></div>
      <div className="arrow">→</div>
      <div className="stage">Evidence Linked</div>
      <div className="arrow">→</div>
      <div className="stage">Assessed <span className="hint">(any observer)</span></div>
      <div className="arrow">→</div>
      <div className="stage kept">Status: Kept / Not Kept</div>
    </div>
  );
};

export default PromiseLifecycle;
