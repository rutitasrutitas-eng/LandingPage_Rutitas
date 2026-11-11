/** Returns only a canonical, public Google Play listing URL. */
export function getGooglePlayUrl(value: unknown): string | null {
  if (typeof value !== 'string' || value.trim() === '') return null

  try {
    const url = new URL(value.trim())
    const appId = url.searchParams.get('id')
    if (
      url.protocol !== 'https:' ||
      url.hostname !== 'play.google.com' ||
      url.pathname !== '/store/apps/details' ||
      !appId ||
      !/^[A-Za-z0-9._]+$/.test(appId) ||
      url.username ||
      url.password
    ) return null

    return `https://play.google.com/store/apps/details?id=${encodeURIComponent(appId)}`
  } catch {
    return null
  }
}

export const googlePlayUrl = getGooglePlayUrl(
  import.meta.env.VITE_GOOGLE_PLAY_URL || import.meta.env.VITE_APP_URL,
)

export const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? ''
