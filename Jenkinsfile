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
    env.NODEJS_HOME = "${tool 'node-8'}"
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

    checkout scm

    stage('deploy') {
        sh './jenkins/deploy.sh'
    }
}
