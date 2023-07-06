const breakpoints = {
  // Primary breakpoints
  xs: '(min-width: 0px) and (max-width: 600px)',
  sm: '(min-width: 600px) and (max-width: 900px)',
  md: '(min-width: 900px) and (max-width: 1200px)',
  lg: '(min-width: 1200px) and (max-width: 1536px)',
  xl: '(min-width: 1536px) and (max-width: 1920px)',

  // Secondary breakpoints
  tablet: '(max-width: 768px)',
  mobile: '(max-width: 480px)',

  // Tertiary breakpoints
  min_320: '(min-width: 320px)',
  min_480: '(min-width: 480px)',
  min_768: '(min-width: 768px)',
  min_1024: '(min-width: 1024px)',
  min_1200: '(min-width: 1200px)',

  // Quaternary breakpoints
  max_320: '(max-width: 320px)',
  max_480: '(max-width: 480px)',
  max_768: '(max-width: 768px)',
  max_1024: '(max-width: 1024px)',
  max_1200: '(max-width: 1200px)',
}

export default breakpoints
