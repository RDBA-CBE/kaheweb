import React from "react";
import { split } from "sentence-splitter";

export const removeShortcodes = (content) => {
  if (!content) return "";
  return content.replace(/\[\/?[^\]]+\]/g, "");
};

export const truncateText = (text = "", maxLength = 100) => {
  if (typeof text !== "string") return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const FirstLetterUp = (text = "") => {
  console.log("text", text);

  return (
    text
      .toLowerCase()
      // Capitalize first letter of each word
      .replace(/\b\w/g, (c) => c.toUpperCase())
      // Preserve acronyms inside brackets
      .replace(/\(([^)]+)\)/g, (_, v) => `(${v.toUpperCase()})`)
  );
};

// export const FirstLetterUp = (text = "") => {
//   const ROMAN_REGEX =
//     /^(?=[MDCLXVI])M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;

//   // 🔒 Whitelist real acronyms
//   const ACRONYMS = ["CIA", "API", "HTML", "CSS", "JS", ];

//   return text
//     .split("-")
//     .map(word => {
//       const upper = word.toUpperCase();

//       // Roman numerals → keep caps
//       if (ROMAN_REGEX.test(upper)) {
//         return upper;
//       }

//       // Known acronyms → keep caps
//       if (ACRONYMS.includes(upper)) {
//         return upper;
//       }

//       // Everything else → Title Case
//       return upper.charAt(0) + upper.slice(1).toLowerCase();
//     })
//     .join("-");
// };


// export const  splitChar = (
//   html = "",
//   maxLength = 500,
//   tagClasses = {} // 👈 dynamic classes from JSON
// ) => {
//   if (!html) return null;

//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, "text/html");

//   const INLINE_TAG_MAP = {
//     h1: "span",
//     h2: "span",
//     h3: "span",
//     h4: "span",
//     h5: "span",
//     h6: "span",
//     p: "span",
//     div: "span",
//   };

//   const processNode = (node, key) => {
//     /* ---------------- TEXT NODE ---------------- */
//     if (node.nodeType === Node.TEXT_NODE) {
//       let text = node.textContent;
//       if (!text.trim()) return null;

//       // Space fix after tags
//       if (
//         node.previousSibling &&
//         node.previousSibling.nodeType === Node.ELEMENT_NODE &&
//         !text.startsWith(" ")
//       ) {
//         text = " " + text;
//       }

//       const sentenceNodes = split(text);

//       const sentenceTexts = sentenceNodes
//         .filter((n) => n.type === "Sentence")
//         .map((n) => {
//           const txt = n.raw.trim();
//           if (txt.length === 1) return txt; // avoid A.
//           return txt.match(/[.!?]$/) ? txt : txt + " ";
//         });

//       let current = "";
//       const blocks = [];

//       sentenceTexts.forEach((sentence) => {
//         if ((current + sentence).length > maxLength) {
//           if (current) blocks.push(current);
//           current = sentence;
//         } else {
//           current += sentence;
//         }
//       });

//       if (current) blocks.push(current);

//       return blocks.map((block, i) => (
//         <span key={`${key}-text-${i}`}>{block}</span>
//       ));
//     }

//     /* ---------------- ELEMENT NODE ---------------- */
//     if (node.nodeType === Node.ELEMENT_NODE) {
//       const originalTag = node.tagName.toLowerCase();
//       const Tag = INLINE_TAG_MAP[originalTag] || originalTag;

//       return React.createElement(
//         Tag,
//         {
//           key,
//           className: tagClasses?.[originalTag] || undefined, // 👈 MAGIC
//         },
//         Array.from(node.childNodes).map((child, i) =>
//           processNode(child, `${key}-${i}`)
//         )
//       );
//     }

//     return null;
//   };

//   return (
//     <p>
//       {Array.from(doc.body.childNodes).map((node, i) =>
//         processNode(node, `root-${i}`)
//       )}
//     </p>
//   );
// };



export const splitChar = (text = "", maxLength = 500) => {
  if (!text) return null;

  // Use sentence-splitter which handles abbreviations better
  const sentenceNodes = split(text);

  // Filter out non-sentence nodes and get sentence text
  const sentenceTexts = sentenceNodes
    .filter((node) => node.type === "Sentence")
    .map((node) => {
      const sentenceText = node.raw.trim();
      // Ensure proper ending punctuation
      return sentenceText.match(/[.!?]$/) ? sentenceText : sentenceText + ".";
    });

  let current = "";
  const blocks = [];

  sentenceTexts.forEach((sentence) => {
    if (!sentence) return;

    if ((current + " " + sentence).length > maxLength) {
      if (current.trim()) {
        blocks.push(current.trim());
      }
      current = sentence;
    } else {
      current += (current ? " " : "") + sentence;
    }
  });

  if (current.trim()) blocks.push(current.trim());

  return blocks.map((block, index) => (
    <span key={index}>
      {block}
      <br />
      <br />
    </span>
  ));
};

export const splitFirstAndRemaining = (text, firstLength = 700) => {
  if (!text || typeof text !== "string") text = String(text);

  const sentenceNodes = split(text);

  const sentenceTexts = sentenceNodes
    .filter((node) => node.type === "Sentence")
    .map((node) => {
      const sentenceText = node.raw.trim();
      return sentenceText.match(/[.!?]$/) ? sentenceText : sentenceText + ".";
    });

  let current = "";
  let firstPart = "";
  let remaining = "";
  let firstPartDone = false;

  sentenceTexts.forEach((sentence) => {
    if (!sentence) return;

    if (!firstPartDone) {
      if ((current + " " + sentence).trim().length <= firstLength) {
        current += (current ? " " : "") + sentence;
      } else {
        firstPart = current.trim();
        remaining = sentence;
        current = "";
        firstPartDone = true;
      }
    } else {
      remaining += (remaining ? " " : "") + sentence;
    }
  });

  if (!firstPartDone) {
    firstPart = current.trim();
  } else if (current.trim()) {
    remaining = current.trim() + (remaining ? " " + remaining : "");
  }

  return {
    firstPart,
    remaining,
  };
};

// export const splitChar = (text = "", maxLength = 500) => {
//   if (!text) return null;

//   const sentences = text
//     .split(".")
//     .map(s => s.trim())
//     .filter(Boolean)
//     .map(s => s + ".");

//   let current = "";
//   const blocks = [];

//   sentences.forEach(sentence => {
//     if ((current + " " + sentence).length > maxLength) {
//       blocks.push(current.trim());
//       current = sentence;
//     } else {
//       current += " " + sentence;
//     }
//   });

//   if (current.trim()) blocks.push(current.trim());

//   // 🔥 return JSX directly
//   return blocks.map((block, index) => (
//     <span key={index}>
//       {block}
//       <br />
//       <br />
//     </span>
//   ));
// };

// export const splitFirstAndRemaining = (text, firstLength = 700) => {
//   if (!text || typeof text !== "string") text = String(text);

//   const sentences = text
//     .split(".")
//     .map(s => s.trim())
//     .filter(Boolean)
//     .map(s => s + ".");

//   let current = "";
//   const firstPartArray = [];
//   const remainingArray = [];
//   let firstPartDone = false;

//   sentences.forEach(sentence => {
//     if (!firstPartDone) {
//       if ((current + " " + sentence).trim().length <= firstLength) {
//         current += " " + sentence;
//       } else {
//         if (current.trim()) firstPartArray.push(current.trim());
//         current = sentence;
//         firstPartDone = true;
//       }
//     } else {
//       remainingArray.push(sentence);
//     }
//   });

//   if (!firstPartDone && current.trim()) {
//     firstPartArray.push(current.trim());
//   } else if (firstPartDone && current.trim()) {
//     remainingArray.unshift(current.trim());
//   }

//   return {
//     firstPart: firstPartArray.join(" "),
//     remaining: remainingArray.join(" "),
//   };
// };
