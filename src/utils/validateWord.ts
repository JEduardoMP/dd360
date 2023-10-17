export const validateWord = (targetWord: string, givenWord: string) => {
  const result: string[] = [];
  givenWord.split('').forEach((char, idx) => {
    if (char === targetWord[idx]) {
      result.push('bg-success')
    } else if (targetWord.includes(char)) {
      result.push('bg-warning')
    } else {
      result.push('bg-neutral')
    }
  })
  return result;
};
