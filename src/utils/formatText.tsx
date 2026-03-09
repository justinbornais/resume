import React from 'react';

const tokenRegex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;

export function renderInlineMarkup(text: string): React.ReactNode[] {
  const parts = text.split(tokenRegex).filter(Boolean);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}
