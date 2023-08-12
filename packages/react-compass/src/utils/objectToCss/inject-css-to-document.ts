function injectCssToDocument(css: string): void {
  if (!css) return
  const styleElement = document.createElement('style')
  styleElement.textContent = css
  document.head.appendChild(styleElement)
}

export default injectCssToDocument
