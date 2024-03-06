function generateRandomString(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substring(2)}`
}

export default generateRandomString
