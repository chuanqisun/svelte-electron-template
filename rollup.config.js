import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'cjs',
    name: 'app',
    file: 'dist/bundle.js',
  },
  plugins: [
    svelte({
      dev: !production,
      css: css => {
        css.write('dist/bundle.css');
      },
    }),
    production && terser(),
    nodeResolve(),
    /**
     * Configure this to convert CommonJS modules into ES6 modules so they can be bundled.
     * By default, all CommonJS `require()` imports are ignored from the bundle.
     * https://github.com/rollup/rollup-plugin-commonjs
     */
    commonjs(),
  ],
  watch: {
    clearScreen: false,
  },
};
