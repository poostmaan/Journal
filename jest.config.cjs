module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'],
    transformIgnorePatterns: [] // EVITAR TRANSPILACIONES EN LA PARTE DE FIREBASE
}