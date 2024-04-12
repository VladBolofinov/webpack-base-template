import webpack, {Configuration} from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
export function buildPlugins({mode, paths, analyzer}: BuildOptions):Configuration['plugins'] {
    const isDev = mode === 'development';
    const isProd = mode === 'production';
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: paths.html})
    ]
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
        /** Выносит проверку типов в отдельный процесс: не нагружая сборку */
        plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
    }
    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }
    return plugins;
}