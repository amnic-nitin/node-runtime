// Importing express module
const processEnv=process.env;
'config_path' in processEnv && processEnv.config_path && require('dotenv').config({path:processEnv.config_path })
const express = require("express")
const app = express()
app.use("/", (req, res, next) => {
    res.status(200).json({
      Message: "Hello Amnic",
      ConfigData: `${process.env?.SAMPLE_CONFIG}`,
      NodeRunTimeVersion: `Node version is ${process.version}`,
      SampleSecret:   `Secret is ${process.env?.SAMPLE_SECRET}`,
      PackageManager: `${process.env?.PACKAGE_MANAGER}`,
      // runtimeEnvironment: processEnv,
      // NodeRunTimeVersion: `Node version is ${process.env?.NODE_VERSION}`,
      // ConfigEnvData: process.env,c
    })
})

// Server setup
app.listen(3000, () => {
    console.log("Server is Running")
})

