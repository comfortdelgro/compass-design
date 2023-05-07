export const focusableElements = [
  'input:not([disabled]):not([type=hidden])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'a[href]',
  'area[href]',
  'summary',
  'iframe',
  'object',
  'embed',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]',
]

export const FOCUSABLE_ELEMENT_SELECTOR =
  focusableElements.join(':not([hidden]),') +
  ',[tabindex]:not([disabled]):not([hidden])'

focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])')
export const TABBABLE_ELEMENT_SELECTOR = focusableElements.join(
  ':not([hidden]):not([tabindex="-1"]),',
)
export const roleSymbol = `__role_${Date.now()}`

export const focusManagerSymbol = `__focusManager_${Date.now()}`
