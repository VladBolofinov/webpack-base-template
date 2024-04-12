import {ModuleOptions} from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";
export function buildLoaders(options: BuildOptions):ModuleOptions['rules'] {
    const isDev = options.mode === 'development';
    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }
    const svgrLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                }
                            }
                        ]
                    }
                }
            }
        ],
    }
    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                auto: (resPath: string) => Boolean(resPath.includes('.module')),
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
        },
    }
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            "sass-loader"
        ],
    }

    const tsLoader = {
        //ts-loader умеет работать с JSX
        //если б мы не использовали тайпскрипт: нужен был бы babel-loader
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                    transpileOnly: isDev
                }
            }
        ]
    };
    return [scssLoader, tsLoader, assetLoader, svgrLoader]
}