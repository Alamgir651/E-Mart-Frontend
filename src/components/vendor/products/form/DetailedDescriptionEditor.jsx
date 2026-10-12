import { useState, useRef, useEffect, useCallback } from 'react';
import EditorToolbar from './EditorToolbar';

export const DetailedDescriptionEditor = ({ value = '', onChange }) => {
  const editorRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [charCount, setCharCount] = useState(0);
  const [activeStates, setActiveStates] = useState({});

  const checkActiveFormats = useCallback(() => {
    try {
      setActiveStates({
        bold: document.queryCommandState('bold'),
        italic: document.queryCommandState('italic'),
        underline: document.queryCommandState('underline'),
        bullet: document.queryCommandState('insertUnorderedList'),
        numbered: document.queryCommandState('insertOrderedList'),
        align: document.queryCommandState('justifyCenter'),
      });
    } catch {
      // Ignore if document not focused
    }
  }, []);

  const handleInput = useCallback(() => {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML;
    const rawText = editorRef.current.innerText || '';
    const trimmed = rawText.trim();
    setIsEmpty(trimmed.length === 0);
    setCharCount(rawText.length);
    onChange(trimmed.length === 0 ? '' : html);
  }, [onChange]);

  useEffect(() => {
    if (editorRef.current) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value || '';
        const rawText = editorRef.current.innerText || '';
        setIsEmpty(rawText.trim().length === 0);
        setCharCount(rawText.length);
      }
    }
  }, [value]);

  const exec = (command, val = null) => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    document.execCommand(command, false, val);
    checkActiveFormats();
    handleInput();
  };

  const handleAlign = () => {
    if (document.queryCommandState('justifyCenter')) {
      exec('justifyLeft');
    } else {
      exec('justifyCenter');
    }
  };

  const handleLink = () => {
    const url = prompt('Enter link URL (e.g. https://example.com):', 'https://');
    if (url) exec('createLink', url);
  };

  const handleImage = () => {
    const url = prompt('Enter image URL:');
    if (url) exec('insertImage', url);
  };

  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all bg-white relative ${
        isFocused
          ? 'border-2 border-orange-500 shadow-sm shadow-orange-500/10'
          : 'border border-slate-200/90'
      }`}
    >
      <EditorToolbar
        activeStates={activeStates}
        onBold={() => exec('bold')}
        onItalic={() => exec('italic')}
        onUnderline={() => exec('underline')}
        onBullet={() => exec('insertUnorderedList')}
        onNumbered={() => exec('insertOrderedList')}
        onAlign={handleAlign}
        onLink={handleLink}
        onImage={handleImage}
      />

      <div className="relative">
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onFocus={() => {
            setIsFocused(true);
            checkActiveFormats();
          }}
          onBlur={() => {
            setIsFocused(false);
            handleInput();
          }}
          onInput={handleInput}
          onKeyUp={checkActiveFormats}
          onMouseUp={checkActiveFormats}
          className="w-full p-4 text-xs sm:text-sm text-slate-800 outline-none min-h-[120px] pb-8 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_a]:text-orange-600 [&_a]:underline"
        />

        {isEmpty && (
          <div
            onClick={() => editorRef.current?.focus()}
            className="absolute top-4 left-4 text-xs sm:text-sm text-slate-400 pointer-events-none select-none leading-relaxed pr-6"
          >
            Our fresh bananas are carefully sourced from trusted farms. Naturally ripened, rich in nutrients, and perfect for everyday use. Ideal for shakes, desserts, or a healthy snack.
          </div>
        )}

        <span className="absolute right-4 bottom-2.5 text-xs text-slate-400 font-medium select-none pointer-events-none">
          {charCount}/2000
        </span>
      </div>
    </div>
  );
};

export default DetailedDescriptionEditor;
