module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-rem-to-responsive-pixel')({
      // rootValue: 32,
      // propList: ['*'],
      // transformUnit: 'rem',
    }),
  ],
}

// export default {
//   plugins: {
//     tailwindcss: {}
//   }
//   // plugins: [
//   //   // require('autoprefixer'),
//   //   // require('tailwindcss'),
//   //   require("postcss-rem-to-responsive-pixel")({
//   //     rootValue: 32,
//   //     propList: ["*"],
//   //     transformUnit: "rpx",
//   //   }),
//   // ],
// };

