export const removeShortcodes = (content) => {
    if (!content) return "";
    return content.replace(/\[\/?[^\]]+\]/g, "");
  };

  export const titleCaseWithAcronyms = (text = "") => {
    console.log("text",text);
    
  return text
    .toLowerCase()
    // Capitalize first letter of each word
    .replace(/\b\w/g, (c) => c.toUpperCase())
    // Preserve acronyms inside brackets
    .replace(/\(([^)]+)\)/g, (_, v) => `(${v.toUpperCase()})`);
};
