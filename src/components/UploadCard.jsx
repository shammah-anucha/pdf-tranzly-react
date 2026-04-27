import { useEffect, useRef, useState } from "react";
import LanguagePickDialog from "./LanguagePickDialog";
import { quickLanguages } from "../data/languages";
import { translatePdfOnServer } from "../services/translateService";

export default function UploadCard() {
  const fileInputRef = useRef(null);

  const [pickedFile, setPickedFile] = useState(null);
  const [sourceLang, setSourceLang] = useState(
    quickLanguages.find((l) => l.code === "en") || quickLanguages[0]
  );
  const [targetLang, setTargetLang] = useState(
    quickLanguages.find((l) => l.code === "es") || quickLanguages[1]
  );

  const [translatedBlob, setTranslatedBlob] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [fakeProgress, setFakeProgress] = useState(0);
  const [showLanguageDialog, setShowLanguageDialog] = useState(false);

  useEffect(() => {
    if (!isTranslating) return;

    const interval = setInterval(() => {
      setFakeProgress((prev) => {
        const next = prev + (0.95 - prev) * 0.08;
        return Math.min(Math.max(next, 0.05), 0.95);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isTranslating]);

  const pickFile = () => {
    if (isTranslating) return;
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    setPickedFile(file);
    setTranslatedBlob(null);
  };

  const openLanguagePopup = () => {
    if (!pickedFile || isTranslating) return;
    setShowLanguageDialog(true);
  };

  const startTranslation = async (source, target) => {
    if (!pickedFile || isTranslating) return;

    setSourceLang(source);
    setTargetLang(target);
    setShowLanguageDialog(false);

    setIsTranslating(true);
    setTranslatedBlob(null);
    setFakeProgress(0.05);

    try {
      const blob = await translatePdfOnServer({
        file: pickedFile,
        sourceLangCode: source.code,
        targetLangCode: target.code,
      });

      setTranslatedBlob(blob);
      setFakeProgress(1);
    } catch (error) {
      console.error(error);
      alert(`Translation failed: ${error.message}`);
    } finally {
      setIsTranslating(false);
    }
  };

  const downloadTranslated = () => {
    if (!translatedBlob || !pickedFile) return;

    const originalName = pickedFile.name;
    const filename = originalName.toLowerCase().endsWith(".pdf")
      ? `${originalName.slice(0, -4)}-translated.pdf`
      : `${originalName}-translated.pdf`;

    const url = URL.createObjectURL(translatedBlob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  };

  const hasExtraUi = isTranslating || translatedBlob;
  const innerHeight = hasExtraUi ? 290 : 230;

  return (
    <>
      <div className="upload-card-wrapper">
        <div className="upload-dashed-border">
          <div
            className="upload-card"
            style={{ minHeight: `${innerHeight}px` }}
            onClick={pickFile}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              hidden
              onChange={handleFileChange}
            />

            <div className="upload-content">
              <div className="upload-plus">+</div>

              <h2 className="upload-title">
                {pickedFile ? pickedFile.name : "Upload or Drag & Drop your file"}
              </h2>

              {pickedFile ? (
                <>
                  <button
                    className="translate-button"
                    onClick={(event) => {
                      event.stopPropagation();
                      openLanguagePopup();
                    }}
                    disabled={isTranslating}
                  >
                    {isTranslating ? "Translating..." : "Translate"}
                  </button>

                  <p className="language-label">
                    {sourceLang.flag} {sourceLang.name} → {targetLang.flag}{" "}
                    {targetLang.name}
                  </p>

                  {isTranslating && (
                    <>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${fakeProgress * 100}%` }}
                        />
                      </div>

                      <p className="translation-warning">
                        Please don’t close or refresh this page while we
                        translate your document.
                      </p>
                    </>
                  )}

                  {translatedBlob && (
                    <button
                      className="download-button"
                      onClick={(event) => {
                        event.stopPropagation();
                        downloadTranslated();
                      }}
                    >
                      Download translated PDF
                    </button>
                  )}
                </>
              ) : (
                <p className="upload-size">Size up to 100 MB</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {showLanguageDialog && (
        <LanguagePickDialog
          initialSource={sourceLang}
          initialTarget={targetLang}
          onCancel={() => setShowLanguageDialog(false)}
          onConfirm={startTranslation}
        />
      )}
    </>
  );
}