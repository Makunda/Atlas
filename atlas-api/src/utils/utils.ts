/**
 * Generate a pseudo-unique token
 */
export const uuidv4 = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export function timeConverter(timestamp: number) {
  const a = new Date(timestamp * 1000);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time = date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}

/**
 * Fixed length String
 * @param text Text to format
 * @param length Length of text to format
 * @returns The formatted string
 */
export function fixedLengthString(text: string, length: number): string {
  const toAdd: number = length - text.length;
  if (toAdd < 0) return text;
  return " ".repeat(toAdd) + text;
}

/**
 * Get the value inside an enum
 * @param e Enum to parse
 * @returns
 */
export function enumKeys<E>(e: E): (keyof E)[] {
  return Object.keys(e) as (keyof E)[];
}