import {
  LOCALES,
  DEFAULT_LOCALE,
  ui,
  type SupportedLocale,
  type TranslationDictionary,
} from './ui';

/**
 * Strips any supported locale prefix from the given pathname.
 * E.g.: "/es/faq" -> "/faq", "/fr/" -> "/", "/" -> "/"
 */
export function getCleanPathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';

  // Normalize path
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && LOCALES.includes(segments[0] as SupportedLocale)) {
    const remaining = segments.slice(1).join('/');
    return remaining ? `/${remaining}/` : '/';
  }

  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/**
 * Extracts and validates the language code from a URL or pathname.
 * Defaults to DEFAULT_LOCALE ('en') if not found or invalid.
 */
export function getLangFromUrl(url: URL | string): SupportedLocale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length > 0 && LOCALES.includes(segments[0] as SupportedLocale)) {
    return segments[0] as SupportedLocale;
  }

  return DEFAULT_LOCALE;
}

/**
 * Returns the strongly-typed translation dictionary for the given locale.
 * Falls back to the default locale ('en') if the requested locale is missing.
 */
export function useTranslations(lang?: string): TranslationDictionary {
  const validLang =
    lang && LOCALES.includes(lang as SupportedLocale)
      ? (lang as SupportedLocale)
      : DEFAULT_LOCALE;

  return ui[validLang] || ui[DEFAULT_LOCALE];
}

/**
 * Generates a localized path for a given target language.
 * E.g.:
 *   getLocalizedPath("/", "es") -> "/es/"
 *   getLocalizedPath("/es/", "en") -> "/"
 *   getLocalizedPath("/fr/faq", "pt") -> "/pt/faq/"
 */
export function getLocalizedPath(
  pathname: string,
  targetLang: SupportedLocale
): string {
  const cleanPath = getCleanPathname(pathname);

  if (targetLang === DEFAULT_LOCALE) {
    return cleanPath;
  }

  const normalized = cleanPath === '/' ? '' : cleanPath.replace(/\/$/, '');
  return `/${targetLang}${normalized}/`;
}

export interface HrefLangEntry {
  lang: string;
  href: string;
}

/**
 * Generates the full set of 7 bidirectional alternate hreflang entries
 * (6 locales + 'x-default' fallback pointing to the default English URL).
 */
export function getHrefLangUrls(
  pathname: string,
  siteUrl: string = 'https://makepng.github.io'
): HrefLangEntry[] {
  const normalizedBase = siteUrl.replace(/\/$/, '');

  const entries: HrefLangEntry[] = LOCALES.map((locale) => {
    const localizedPath = getLocalizedPath(pathname, locale);
    return {
      lang: locale,
      href: `${normalizedBase}${localizedPath}`,
    };
  });

  // 7th bidirectional tag: x-default pointing to the default English URL
  const defaultPath = getLocalizedPath(pathname, DEFAULT_LOCALE);
  entries.push({
    lang: 'x-default',
    href: `${normalizedBase}${defaultPath}`,
  });

  return entries;
}
