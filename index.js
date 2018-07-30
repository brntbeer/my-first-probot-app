var recastai = require('recastai').default


module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}

module.exports = robot => {
  var request = new recastai.request(process.env.RECASTAI_TOKEN)

      request.analyseText(context.payload.issue.title)
      .then(function(res) {
        var labels = []

        if(res.isAssert()) {
          labels.push('bug')
        }
        if(res.isCommand()) {
          labels.push('enhancement')
        }

        let params = context.issue({
          labels: labels
        })
        return context.github.issues.addLabels(params)
      })
      .catch(function(err) {
        app.log(err)
      })
    })
}
