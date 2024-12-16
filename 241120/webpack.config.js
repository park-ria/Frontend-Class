const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
//console.log(__dirname); //해당 프로젝트의 전체 경로를 찾아와주는 명령어 // /Users/pra/Project/Ria/Frontend-Class/241120
//console.log(path.resolve(__dirname, "assets", "js")); // 내가 원하는 맞춤형 경로를 만들어 줌 ///Users/pra/Project/Ria/Frontend-Class/241120/assets/js

module.exports = {
  entry: {
    main: "./src/client/js/main.js",
    videoPlayer: "./src/client/js/videoPlayer.js",
  },
  mode: "development",
  watch: true, // npm run assets을 할때마다 반복적으로 렌더링 할 필요가 없게함 // 계속 watch하고 있기 때문에 css를 변경할 때마다 npm run assets를 할 필요가 없이 실시간으로 변경됨
  plugins: [new MiniCssExtractPlugin({ filename: "css/style.css" })],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true, //업데이트가 될 때마다 노드몬이 재시작 되는 옵션 // nodemon.js라는 파일을 만들어 업데이트 될 때마다 노드몬이 assets에 있는것들을 매번 끌어올 필요없더록 함
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 자바스크립트 파일을 변환시킬거야, 로더들이 존재해야지만 변환됨
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // 가장 왼쪽이 파이널로 적용할 것을 넣어줘야 함. 오른쪽에서 왼쪽으로
      },
    ],
  },
};
//우리가 작성한 자바스크립트는 바벨을 통해서 로딩 시킬거야
