// Get visible citations

export default (citations, { text, sortBy, startDate, endDate }) => {
  return citations.filter((citation) => {
    const startDateMatch = typeof startDate !== 'number' || citation.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || citation.createdAt <= endDate;
    const textMatch = citation.fullCitation.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}
