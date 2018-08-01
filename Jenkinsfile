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
    wrapStep('build_packages', {name -> stage(name) { npm ci } })
    wrapStep('build_project', {name -> stage(name) { npm run build } })
    wrapStep('deploy_dashboard', { name -> stage(name) { sh 'rsync -arv -e "ssh -2" dist/* sshacs@unprotected.upload.akamai.com:/114034/insightsbeta/platform/storybook/' } })
  }
}
