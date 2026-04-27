export async function translatePdfOnServer({
    file,
    sourceLangCode,
    targetLangCode,
  }) {
    const formData = new FormData();
  
    formData.append("source", sourceLangCode);
    formData.append("target", targetLangCode);
    formData.append("file", file, file.name);
  
    const response = await fetch(
      "https://pdf-tranzly-python.onrender.com/translate",
      {
        method: "POST",
        body: formData,
      }
    );
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Translate failed: ${response.status} ${errorText}`);
    }
  
    return await response.blob();
  }