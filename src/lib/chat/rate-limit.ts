const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_REQUESTS_PER_DAY = 30;

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + DAY_MS });
    return { allowed: true, remaining: MAX_REQUESTS_PER_DAY - 1 };
  }

  if (entry.count >= MAX_REQUESTS_PER_DAY) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: MAX_REQUESTS_PER_DAY - entry.count };
}
