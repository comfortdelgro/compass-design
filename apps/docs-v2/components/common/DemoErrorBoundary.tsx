import {Button, Typography} from '@comfortdelgro/react-compass'
import Link from 'next/link'
import * as React from 'react'

function newGitHubIssueUrl(options: any) {
  const url = `https://github.com/${options.user}/${options.repo}/issues/new`

  const query = Object.keys(options)
    .map((type) => {
      const value = options[type]
      return `${type}=${encodeURIComponent(String(value))}`
    })
    .join('&')

  return `${url}?${query}`
}

export default class DemoErrorBoundary extends React.Component {
  state = {
    error: null,
  }

  static getDerivedStateFromError(error: any) {
    return {error}
  }

  render() {
    const {children, name, onResetDemoClick} = this.props as any
    const {error} = this.state

    if (error) {
      const title = `[docs] Demo ${name} crashes`
      const searchQuery = encodeURIComponent(`is:issue ${title}`)
      const issueLink = newGitHubIssueUrl({
        user: 'mui',
        repo: 'material-ui',
        title,
        body: `
<!-- Please make sure you have fulfilled the following items before submitting -->
<!-- Checked checkbox should look like this: [x] -->
- [ ] I have [searched for similar issues](https://github.com/mui/material-ui/issues?q=${searchQuery}) in this repository and believe that this is not a duplicate.

## Steps to Reproduce
1. Visit ${window.location.href}
2. ??
3. demo *${name}* crashes

## Your Environment
| Tech         | Version |
|--------------|---------|
| MUI  | v${process.env.LIB_VERSION}  |
| Netlify deploy | ${process.env.NETLIFY_DEPLOY_URL} |
| Browser      | ${
          typeof window !== 'undefined' && window.navigator
            ? window.navigator.userAgent
            : '*Unknown*'
        } |
`,
      })

      /* eslint-disable material-ui/no-hardcoded-labels */
      return (
        <div>
          <Typography.Label color='error'>
            This demo had a runtime error!
          </Typography.Label>
          <Typography.Label>
            We would appreciate it if you{' '}
            <Link href={issueLink} rel='noreferrer' target='_blank'>
              report this error
            </Link>{' '}
            directly in our issue tracker. You will be provided with a prefilled
            description that includes valuable information about this error.
          </Typography.Label>
          <pre style={{whiteSpace: 'pre-wrap'}}>{error}</pre>
          <Button color='secondary' onClick={onResetDemoClick}>
            Reset demo
          </Button>
        </div>
      )
    }

    return children
  }
}
