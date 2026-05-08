export function uid(prefix = 'id'): string {
  const random = Math.random().toString(36).slice(2, 10);
  return `${prefix}_${random}`;
}

export function formatMoney(value: number, currency = 'USD'): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

export function formatDateTime(value: string | Date): string {
  const date = typeof value === 'string' ? new Date(value) : value;
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(date);
}

export function svgDataUrl(title: string, accent = '#7c3aed', accent2 = '#14b8a6'): string {
  const safeTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 420" role="img" aria-label="${safeTitle}">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stop-color="${accent}" offset="0%" />
          <stop stop-color="${accent2}" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="600" height="420" rx="36" fill="#0f172a"/>
      <circle cx="470" cy="100" r="120" fill="url(#g)" fill-opacity="0.18"/>
      <circle cx="110" cy="320" r="140" fill="url(#g)" fill-opacity="0.16"/>
      <rect x="36" y="36" width="528" height="348" rx="30" fill="white" fill-opacity="0.04" stroke="white" stroke-opacity="0.08"/>
      <text x="48" y="84" fill="white" fill-opacity="0.82" font-size="26" font-family="Inter, Arial, sans-serif">${safeTitle}</text>
      <text x="48" y="118" fill="white" fill-opacity="0.45" font-size="16" font-family="Inter, Arial, sans-serif">Mock visual asset</text>
      <rect x="48" y="158" width="220" height="18" rx="9" fill="url(#g)"/>
      <rect x="48" y="194" width="310" height="14" rx="7" fill="white" fill-opacity="0.14"/>
      <rect x="48" y="224" width="260" height="14" rx="7" fill="white" fill-opacity="0.1"/>
      <rect x="48" y="274" width="164" height="78" rx="24" fill="url(#g)" fill-opacity="0.28"/>
      <rect x="224" y="274" width="164" height="78" rx="24" fill="white" fill-opacity="0.05"/>
      <rect x="400" y="274" width="140" height="78" rx="24" fill="white" fill-opacity="0.08"/>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
