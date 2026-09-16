function Toggle({ label1, active, onChange }) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-3">
      <span className="text-text-secondary text-sm font-bold select-none">
        {label1}
      </span>

      <input
        type="checkbox"
        checked={active}
        onChange={onChange}
        className="peer sr-only"
      />

      <div className="bg-toggle after:bg-background relative h-6 w-12 rounded-full transition-all after:absolute after:top-1 after:left-1 after:h-4 after:w-4 after:rounded-full after:transition-transform after:content-[''] peer-checked:after:translate-x-6" />
    </label>
  );
}

export default Toggle;
