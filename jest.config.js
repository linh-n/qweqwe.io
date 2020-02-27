module.exports = {
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(png|jpg|gif|svg|eot|ttf|woff|woff2|css)$": "<rootDir>/testconfig/loader-mock.js",
  },
  setupFiles: ["./testconfig/jest-setup.js"],
};
