export function calculateReadingTime(content: string): string {
  const chineseChars = (content.match(/[\u4e00-\u9fff]/g) || []).length;
  const englishWords = (content.match(/[a-zA-Z]+/g) || []).length;
  const minutes = Math.ceil(chineseChars / 400 + englishWords / 200);
  return `${Math.max(1, minutes)} MIN READ`;
}
