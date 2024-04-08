// module.exports = {
//     plugins: [
//         new webpack.DefinePlugin({
//           'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
//           'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
//           ... and so on ...
//         })
//     ],
//     }


    const config = {
        mode: 'none', // "production" | "development" | "none"
        cache: false,
        resolve: {
          alias: {
            "react/jsx-dev-runtime.js": "react/jsx-dev-runtime",
            "react/jsx-runtime.js": "react/jsx-runtime",
          },
            fallback: {
                'react/jsx-runtime': 'react/jsx-runtime.js',
                'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js'
            },
        },
        resolveLoader: {
          fallback: path.join(__dirname, './node_modules'),
        },
        resolve: {
            resolve: {
                fallback: {
                    'react/jsx-runtime': 'react/jsx-runtime.js',
                    'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
                },
            },
          extensions: ['*', '.mjs', '.js','.jsx', '.json']
        },
        module: {
          rules: [
            {
              test: /\.mjs$/,
              include: /node_modules/,
              type: 'javascript/auto'
            }
          ]
        }
      }
      
      module.exports = config