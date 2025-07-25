This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
#   m i c r o f r o n t e n d - n e x t j s 
 
 

# microfrontend-nextjs

```sh
echo "# microfrontend-nextjs" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/judhisahoo/microfrontend-nextjs.git
git push -u origin main
```

```sh
npx create-next-app host
cd host.
npm i -D eslint
npm - -D prettier
touch .prettierrc
```

#### Add bellow line

```sh
{
"semi": false,
"singleQuote": true,
"tabWidth": 2,
"trailingComma": "all"
}
```

##### in above file i.e "".prettierrc"

Go open package.json go to End of "script" section as below code.

#### _"format": "prettier --write \"\*_/_.{js,jsx,ts,tsx,json,css,scss,md}\""_

#### _now time to install new package to automate the eslint and prettier by instlling "husky"_

#### _husky is the paackge work like action on pre-commit hook for git. but before install "husky", plz do git install and add remote url process. then follow steps._

```sh
- npm i -D husky
- npx husky-init
```

by calling "npx husky-init" does 3 things:

- Adds .husky/ directory

- Creates a sample pre-commit hook

- Adds prepare script in your package.json

#### _to add multiple command to .husky/pre-commit. just edit the file with vsCode add command what ever you want._

with above setup "format" action work well but link action will show error but not stop to commit for any issue. to over comme the issue.. Open "package.json" file and go to "scripts" section.. change

#### _"lint":"next lint"_

to

#### _"lint": "eslint . --ext .js,.jsx,.ts,.tsx --max-warnings=0",_

now it id done.

#### now time set up unit testing for next project with "jest".

#### those we are working with next framwork.. let go to nextjs website and do the setup acordingly. i have copy the install command from next js site. but you need rechec if any new update is there are not.

### 🧩 1. Install Required Dependencies

##### _npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @testing-library/dom identity-obj-proxy babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript_

#### _npm install --save-dev @types/jest @types/testing-library\_\_jest-dom_

#### _npm install --save-dev ts-node_

### 🧩 2. Create Jest Config (jest.config.ts)

```js
// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',         // CSS Modules
    '^@/(.*)$': '<rootDir>/src/$1',                      // Path alias (if using `@`)
  },
  testMatch: ['**/__tests__/**/*.test.ts?(x)'],
};

export default config;
```

### 🧩 3. Add Babel Config (babel.config.js)

```js
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-react', { runtime: 'automatic' }], // No need to import React
    '@babel/preset-env',
    '@babel/preset-typescript',
  ],
}
```

### 🧩 4. Create Jest Setup File (jest.setup.ts)

```js
// jest.setup.ts
import '@testing-library/jest-dom'
```

### 🧩 5. Add Test Script in package.json

```js
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}
```

### 🧩 6. Create a Sample Test File

📁 src/app/\_\_tests\_\_/home.test.tsx:

### 🧩 7. Handle CSS Modules

Make sure .module.css is mapped with:

```js
moduleNameMapper: {
  '\\.(css|scss|sass)$': 'identity-obj-proxy',
}
```

### 🧩 8. Optional: Handle Next.js Specific Features

## Mock Next.js Image (if used)

Create **mocks**/next/image.ts:

```js
// __mocks__/next/image.ts
export default function Image(props: any) {
  return <img {...props} />;
}
```

And add to jest.config.ts:

```js
moduleNameMapper: {
  '^next/image$': '<rootDir>/__mocks__/next/image.ts',
}
```

## Mock next/router:

##### Create **mocks**/next/router.ts:

```js
// __mocks__/next/router.ts
export const useRouter = () => ({
  route: '/',
  pathname: '',
  query: {},
  asPath: '/',
  push: jest.fn(),
})
```

### now time implement Material UI in project.

#### _npm install @mui/material-nextjs @emotion/cache_
