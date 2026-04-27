import { useState } from "react";
import { allLanguages, quickLanguages } from "../data/languages";

export default function LanguagePickDialog({
  initialSource,
  initialTarget,
  onCancel,
  onConfirm,
}) {
  const [source, setSource] = useState(initialSource);
  const [target, setTarget] = useState(initialTarget);
  const [searchMode, setSearchMode] = useState(null);
  const [query, setQuery] = useState("");

  const filteredLanguages = allLanguages.filter((lang) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;

    return (
      lang.name.toLowerCase().includes(q) ||
      lang.code.toLowerCase().includes(q)
    );
  });

  const chooseLanguage = (lang) => {
    if (searchMode === "source") {
      setSource(lang);
    }

    if (searchMode === "target") {
      setTarget(lang);
    }

    setSearchMode(null);
    setQuery("");
  };

  if (searchMode) {
    const selected = searchMode === "source" ? source : target;

    return (
      <div className="dialog-backdrop">
        <div className="language-search-sheet">
          <div className="sheet-handle" />

          <div className="sheet-header">
            <h2>
              {searchMode === "source"
                ? "Source language"
                : "Target language"}
            </h2>

            <button onClick={() => setSearchMode(null)}>×</button>
          </div>

          <input
            className="language-search-input"
            placeholder="Search language…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />

          <div className="language-search-list">
            {filteredLanguages.map((lang) => (
              <button
                key={lang.code}
                className="language-search-item"
                onClick={() => chooseLanguage(lang)}
              >
                <span className="language-flag">{lang.flag}</span>

                <span>
                  <strong>{lang.name}</strong>
                  <small>{lang.code}</small>
                </span>

                {selected.code === lang.code && <span>✓</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dialog-backdrop">
      <div className="language-dialog-large">
        <button className="dialog-close-button" onClick={onCancel}>
          ×
        </button>

        <h2 className="language-dialog-title">
          Now, choose the language
          <br />
          to translate into
        </h2>

        <div className="language-columns">
          <LanguageColumn
            title="Source language:"
            selected={source}
            onSelect={setSource}
            onMore={() => setSearchMode("source")}
          />

          <LanguageColumn
            title="Target language:"
            selected={target}
            onSelect={setTarget}
            onMore={() => setSearchMode("target")}
          />
        </div>

        <div className="language-dialog-actions">
          <button className="language-cancel-button" onClick={onCancel}>
            Cancel
          </button>

          <button
            className="language-start-button"
            onClick={() => onConfirm(source, target)}
          >
            🌐 Start Translation
          </button>
        </div>
      </div>
    </div>
  );
}

function LanguageColumn({ title, selected, onSelect, onMore }) {
  const selectedIsQuick = quickLanguages.some(
    (lang) => lang.code === selected.code
  );

  return (
    <div className="language-column">
      <h3>{title}</h3>

      <div className="language-quick-list">
        {quickLanguages.map((lang) => (
          <button
            key={lang.code}
            className={
              selected.code === lang.code
                ? "language-tile selected"
                : "language-tile"
            }
            onClick={() => onSelect(lang)}
          >
            <span className="language-check">
              {selected.code === lang.code ? "✓" : ""}
            </span>

            <span>{lang.flag}</span>
            <strong>{lang.name}</strong>
          </button>
        ))}
      </div>

      <button
        className={
          selectedIsQuick ? "more-languages-button" : "language-tile selected"
        }
        onClick={onMore}
      >
        {selectedIsQuick ? (
          <>
            <span>More languages</span>
            <span>⌄</span>
          </>
        ) : (
          <>
            <span className="language-check">✓</span>
            <span>{selected.flag}</span>
            <strong>{selected.name}</strong>
            <span>⌄</span>
          </>
        )}
      </button>
    </div>
  );
}