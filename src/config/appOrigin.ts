export const APP_ORIGIN = "https://kudlo.triobrain.com";

export function appUrl(path: string): string {
  return `${APP_ORIGIN}${path}`;
}
