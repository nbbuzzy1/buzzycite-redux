// Get visible citations

export default (citations, { text, sortBy }) => {
  return citations.filter((citation) => {
    const textMatch = citation.fullCitation.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'type') {
      return a.type.toLowerCase() > b.type.toLowerCase() ? 1 : -1;
    }
  });
};
