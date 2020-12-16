import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { format } from 'path';
import addHash from './rollup-plugin-add-hash.js';

export default{
    //入口
    entry:'src/index.js',
    output: {
        file: 'build/bundle.js',
        format: 'umd'
    },
    plugins:[
        resolve(),
        babel({
            exclude:'node_modules/**'
        }),
        /**
         * 第一个参数需要处理的html文件
         * 第二个参数需要添加hash的js文件（如不设置 默认不添加hash）
         */
        addHash('./build/index.html','bundle.js') 
    ],
}