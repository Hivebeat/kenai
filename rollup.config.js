import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  plugins: [babel()],
  format: 'cjs',
  sourceMap: true,
  dest: 'dist/kenai.js'
};
