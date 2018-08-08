module.exports = {
   mode: 'development',
   entry: `${__dirname}/src/index.js`,
   output: {
      path: `${__dirname}/build`,
      filename: 'bundle.js',
      publicPath: '/build',
   },

   devServer: {
      inline: true,
      port:8000
   },

   module: {
      rules: [
         {
            test: /\.js?/,
            include: `${__dirname}/src`,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            },
         },
      ]
   }
}