import { useEffect, useRef, useState } from 'react';

export default function ProjectDropdown({ label, value, options, onChange, icon, widthOptions = options }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    const closeOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) ref.current.open = false;
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, []);

  const close = () => {
    ref.current.open = false;
    ref.current.querySelector('summary').focus();
  };

  return (
    <div className="relative inline-grid h-[42px] max-w-full shrink-0 text-sm">
      {widthOptions.map((option) => <span key={option.value} aria-hidden="true" className={`invisible pointer-events-none col-start-1 row-start-1 whitespace-nowrap pl-3 ${icon ? 'pr-16' : 'pr-10'}`}>{option.label}</span>)}
      <details ref={ref} onToggle={(event) => setOpen(event.currentTarget.open)} onKeyDown={(event) => { if (event.key === 'Escape') close(); }} className="absolute inset-0">
        <summary aria-label={label} className="flex h-full cursor-pointer list-none items-center gap-2 rounded-md border border-dbl bg-dbl px-3 text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">
          {icon?.(open)}
          <span className="min-w-0 flex-1 truncate">{selected?.label}</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`size-4 shrink-0 ${open ? 'rotate-180' : ''}`}><path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" /></svg>
        </summary>
        <div className="absolute left-0 top-full z-30 mt-1 w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-xl">
          <div className="max-h-72 overflow-y-auto py-1" role="group" aria-label={label}>
            {options.map((option) => <button key={option.value} type="button" aria-pressed={value === option.value} onClick={() => { onChange(option.value); close(); }} className={`block w-full px-3 py-2 text-left break-words ${value === option.value ? 'bg-dbl text-white' : 'text-dbl hover:bg-gray-100'}`}>{option.label}</button>)}
          </div>
        </div>
      </details>
    </div>
  );
}
