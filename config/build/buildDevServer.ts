import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { type BuildOptions } from './types/types';
export function buildDevServer (options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3001,
        open: true,
        //если раздавать статику через nginx. То надо делать проксирование на Index.html
        historyApiFallback: true
    }
}
