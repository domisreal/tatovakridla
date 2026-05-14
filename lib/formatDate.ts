export function formatDate(timestamp: number) {
  return new Intl.DateTimeFormat("cs-CZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(timestamp));
}

export function toDate(date: string) {
  return new Date(date).getTime();
}
