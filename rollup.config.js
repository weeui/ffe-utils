import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: 'dist/ffe-utils.cjs.js',
      name: 'ffe'
    },
    {
      format: 'esm',
      file: 'dist/ffe-utils.esm.js',
      name: 'ffe'
    },
    {
      format: 'umd',
      file: 'dist/ffe-utils.umd.js',
      name: 'ffe',
      minifyInternalExports: true
    }
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve()]
}