const path = require('path');

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['css-loader'], // ✅ removed style-loader
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
    'react-router-dom': {
      commonjs: 'react-router-dom',
      commonjs2: 'react-router-dom',
      amd: 'react-router-dom',
    },
    '@gadagi/types': {
      commonjs: '@gadagi/types',
      commonjs2: '@gadagi/types',
    },
    '@gadagi/design-system': {
      commonjs: '@gadagi/design-system',
      commonjs2: '@gadagi/design-system',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'gadagiUiNavigation',
      type: 'umd',
    },
    globalObject: 'this',
    clean: true,
  },
};