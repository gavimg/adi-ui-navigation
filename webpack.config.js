const path = require('path');

module.exports = {
  entry: './src/index.ts',
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      { test: /\.tsx?$/, use: [{ loader: 'ts-loader', options: { transpileOnly: true } }], exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  externals: {
    react:                { commonjs: 'react', commonjs2: 'react', amd: 'React', root: 'React' },
    'react-dom':          { commonjs: 'react-dom', commonjs2: 'react-dom' },
    'react-router-dom':   { commonjs: 'react-router-dom', commonjs2: 'react-router-dom' },
    '@adi/types':         { commonjs: '@adi/types', commonjs2: '@adi/types' },
    '@adi/design-system': { commonjs: '@adi/design-system', commonjs2: '@adi/design-system' },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: { name: 'AdiUiNavigation', type: 'umd' },
    globalObject: 'this',
    clean: true,
  },
};
