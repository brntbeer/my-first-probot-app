module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}

module.exports = robot => {
  robot.on('issues.opened', async context => {
    // An issue was just opened.
    robot.log(context)
  })
}
