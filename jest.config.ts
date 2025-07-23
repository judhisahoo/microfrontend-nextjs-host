// jest.config.ts
import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy', // CSS Modules
    '^@/(.*)$': '<rootDir>/src/$1', // Path alias (if using `@`)
  },
  testMatch: ['**/__tests__/**/*.test.ts?(x)'],
}

export default config
