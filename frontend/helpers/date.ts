// Helper function to format the date
export function formatDate(publishedAt: string) {
  const publishedDate = new Date(publishedAt);
  return publishedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
