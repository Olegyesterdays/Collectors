// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import html from 'rollup-plugin-html';
import css from 'rollup-plugin-css-only';

export default {
    input: 'src/index.js',
    output: {
        file: 'public/bundle.js',
        format: 'iife',
    },
    plugins: [
        resolve(),
        commonjs(),
        terser(),
        html({ inject: false, template: 'index.html' }),
        css({ output: 'public/bundle.css' }),
    ],
};
