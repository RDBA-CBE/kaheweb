export const removeShortcodes = (content) => {
    if (!content) return "";
    return content.replace(/\[\/?[^\]]+\]/g, "");
  };