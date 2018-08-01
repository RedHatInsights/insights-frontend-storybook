def wrapStep(String stepName, Closure step) {
  println "In wrapStep ${stepName}"
  try {
    step(stepName)
  } catch (e) {
    notify('FAILED', stepName)
    throw e
  }
}

node {
  if (env.BRANCH_NAME == 'master') {
    wrapStep('clone', { name -> stage(name) { checkout scm } })
    wrapStep('console_out', { name -> stage(name) { System.out('use deploy.sh') } })
    wrapStep('build', { name -> stage(name) { sh './jenkins/deploy.sh' } })
  }
}
