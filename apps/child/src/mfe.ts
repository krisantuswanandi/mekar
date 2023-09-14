declare global {
  interface Window {
    MFE_ENABLED: boolean;
  }
}

export function isMfe() {
  return window.MFE_ENABLED;
}
