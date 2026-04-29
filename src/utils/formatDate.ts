export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
export function formatYearMonth(date: string | Date): { year: string; month: string } {
  const d = typeof date === 'string' ? new Date(date) : date;
  return { year: String(d.getFullYear()), month: String(d.getMonth() + 1).padStart(2, '0') };
}
