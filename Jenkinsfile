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
  checkout scm

  stage('deploy') {
    sh './jenkins/deploy.sh'
  }
}
