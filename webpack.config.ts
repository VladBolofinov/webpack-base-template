import type webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { type BuildMode, type BuildPaths } from './config/build/types/types';
import path from 'path';

interface EnvVariables {
    mode: BuildMode;
    analyzer?: boolean;
    port: number;
}
export default (env: EnvVariables): webpack.Configuration => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src')

    }
    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer // npm run build:prod -- --env analyzer=true
    })
    return config;
}
