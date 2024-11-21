module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ['@babel/preset-react', { runtime: 'automatic' }] // Include `@babel/preset-react` inside `babel.config.js`
    ],
};