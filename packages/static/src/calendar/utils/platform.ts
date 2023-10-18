function testPlatform(re: RegExp) {
  return typeof window !== 'undefined' && window.navigator != null
    ? re.test(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        re.test(
          // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          window.navigator['userAgentData']?.platform ||
            window.navigator.platform,
        ),
      )
    : false
}

function testUserAgent(re: RegExp) {
  if (typeof window === 'undefined' || window.navigator == null) {
    return false
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    window.navigator.userAgentData?.brands.some(
      (brand: {brand: string; version: string}) => re.test(brand.brand),
    ) || re.test(window.navigator.userAgent)
  )
}

export function isMac() {
  return testPlatform(/^Mac/i)
}

export function isIPhone() {
  return testPlatform(/^iPhone/i)
}

export function isIPad() {
  return testPlatform(/^iPad/i) || (isMac() && navigator.maxTouchPoints > 1)
}

export function isIOS() {
  return isIPhone() || isIPad()
}

export function isAndroid() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return testUserAgent(/Android/i)
}
