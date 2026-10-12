export const EditorToolbar = ({
  activeStates = {},
  onBold,
  onItalic,
  onUnderline,
  onBullet,
  onNumbered,
  onAlign,
  onLink,
  onImage,
}) => {
  return (
    <div className="flex items-center gap-1 sm:gap-1.5 px-3.5 py-2.5 bg-[#fbf7ee] border-b border-[#f0e6d6] text-slate-700">
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={onBold}
        className={`w-7 h-7 rounded-lg active:scale-95 flex items-center justify-center font-black text-xs transition-colors cursor-pointer ${
          activeStates.bold
            ? 'bg-orange-200/80 text-orange-700 shadow-2xs'
            : 'text-slate-800 hover:bg-black/5'
        }`}
        title="Bold"
      >
        B
      </button>

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={onItalic}
        className={`w-7 h-7 rounded-lg active:scale-95 flex items-center justify-center italic font-bold text-xs transition-colors cursor-pointer ${
          activeStates.italic
            ? 'bg-orange-200/80 text-orange-700 shadow-2xs'
            : 'text-slate-800 hover:bg-black/5'
        }`}
        title="Italic"
      >
        /
      </button>

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={onUnderline}
        className={`w-7 h-7 rounded-lg active:scale-95 flex items-center justify-center underline font-bold text-xs transition-colors cursor-pointer ${
          activeStates.underline
            ? 'bg-orange-200/80 text-orange-700 shadow-2xs'
            : 'text-slate-800 hover:bg-black/5'
        }`}
        title="Underline"
      >
        U
      </button>

      <div className="w-px h-4 bg-slate-300 mx-1" />

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={onBullet}
        className={`w-7 h-7 rounded-lg active:scale-95 flex items-center justify-center transition-colors cursor-pointer ${
          activeStates.bullet
            ? 'bg-orange-200/80 text-orange-700 shadow-2xs'
            : 'text-slate-800 hover:bg-black/5'
        }`}
        title="Bullet List"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="9" y1="6" x2="21" y2="6"/>
          <line x1="9" y1="12" x2="21" y2="12"/>
          <line x1="9" y1="18" x2="21" y2="18"/>
          <circle cx="4" cy="6" r="1.5" fill="currentColor"/>
          <circle cx="4" cy="12" r="1.5" fill="currentColor"/>
          <circle cx="4" cy="18" r="1.5" fill="currentColor"/>
        </svg>
      </button>

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={onNumbered}
        className={`w-7 h-7 rounded-lg active:scale-95 flex items-center justify-center transition-colors cursor-pointer ${
          activeStates.numbered
            ? 'bg-orange-200/80 text-orange-700 shadow-2xs'
            : 'text-slate-800 hover:bg-black/5'
        }`}
        title="Numbered List"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="6" x2="21" y2="6"/>
          <line x1="10" y1="12" x2="21" y2="12"/>
          <line x1="10" y1="18" x2="21" y2="18"/>
          <path d="M4 7V5h1v4"/>
          <path d="M4 11h2l-2 3h2"/>
        </svg>
      </button>

      <div className="w-px h-4 bg-slate-300 mx-1" />

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={onAlign}
        className={`w-7 h-7 rounded-lg active:scale-95 flex items-center justify-center transition-colors cursor-pointer ${
          activeStates.align
            ? 'bg-orange-200/80 text-orange-700 shadow-2xs'
            : 'text-slate-800 hover:bg-black/5'
        }`}
        title="Align Center"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="16" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={onLink}
        className="w-7 h-7 rounded-lg hover:bg-black/5 active:scale-95 flex items-center justify-center text-slate-800 transition-colors cursor-pointer"
        title="Insert Link"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      </button>

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={onImage}
        className="w-7 h-7 rounded-lg hover:bg-black/5 active:scale-95 flex items-center justify-center text-slate-800 transition-colors cursor-pointer"
        title="Insert Image"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="m21 15-5-5L5 21"/>
        </svg>
      </button>
    </div>
  );
};

export default EditorToolbar;
