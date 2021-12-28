/**
 * Convert a Timestamp to a human readable date format
 * @param date Timestamp to convert
 */
export function dateToString(date: number): string {
  const options: any = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const toConvert = new Date(date);
  return toConvert.toLocaleDateString('en-US', options);
}
