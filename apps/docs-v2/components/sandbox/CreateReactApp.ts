export const getHtml = ({
  title,
  language,
}: {
  title: string
  language: string
}) => {
  return `<!DOCTYPE html>
<html lang="${language}">
  <head>
    <title>${title}</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100&display=swap"
    />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
}

export const getRootIndex = () => {
  return `import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Demo from './demo';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);`
}

export const getTsconfig = () => `{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": [
    "src"
  ]
}
`
