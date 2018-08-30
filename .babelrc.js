module.exports = {
    "presets": [
        ["@babel/preset-env", {
            "modules": false,
            "useBuiltIns": "usage",
            "targets": "last 2 Chrome versions"
        }],
        ["@babel/preset-react", {
            "development": process.env.BABEL_ENV === "development",
        }]
    ],
    "plugins": [
        "@babel/plugin-transform-async-to-generator",
        "@babel/plugin-proposal-class-properties",
        "react-hot-loader/babel"
    ]
}
