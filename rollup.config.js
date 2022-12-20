/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

///// Plugins

import { terser } from 'rollup-plugin-terser';              // Remove comments, minify
import { visualizer } from 'rollup-plugin-visualizer';      // Visualize
import cleanup from 'rollup-plugin-cleanup';                // Remove comments, supports sourcemap

///// Post Build Header

function header() {
	return {
		renderChunk(code) {
			return `/**
 * @description Osui
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
 * @source      https://github.com/onsightengine/osui
 */
${code}`;
        }
    };
}

///// Builds

const builds = [

    { // Standard Build
        input: './src/Osui.js',
        treeshake: false,
        external: p => /^three/.test(p),

        plugins: [
            cleanup({
                comments: "none",
                extensions: [ "js", "ts" ],
                sourcemap: false,
            }),
            header(),
        ],

        output: [{
            format: 'esm',
            file: './build/osui.module.js',
            sourcemap: false,
        }],
    },

    { // Minified
        input: './src/Osui.js',
        treeshake: false,
        external: p => /^three/.test(p),

        plugins: [
            header(),
            visualizer(),
        ],

        output: [{
            format: 'esm',
            file: './build/osui.min.js',
            sourcemap: false,
            plugins: [
                terser({ format: { comments: false } }),
            ],
        }],
    },

];

export default builds;