var path = require("path");

module.exports = {
  //Đóng đói js
  mode: "development", //chế độ develop hay production
  devtool: "source-map",
  entry: {
    main: "./src/controllers/main.js",
    
  }, // đầu vào

  output: {
    path: path.resolve(__dirname, "dist"), //Thư mục chứa file đầu ra
    filename: "js/[name].js" //Tên file đầu ra
  },
  //Đóng gói css và sass
  module: {
    rules: [
      //Đóng gói css
        {
        test: /\.css$/, //đọc những file có đuôi .css để đóng gói
        use: ["style-loader", "css-loader"] // sử dụng 2 loaders để đóng gói css
      },
      // Đóng gói scss
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
        //   đóng gói hình ảnh
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', //đặt tên đúng khi đóng gói
              outputPath: 'images', // đặt tên cho thư mục ở trong thư mục đóng gói
              publicPath: '/dist/images/', // đặt lại đường dẫn file hình trong file đã được đóng gói
              limit: 10000, //giới hạn dung lượng file
            },
          },
        ],
      }
    ]
  }
};
