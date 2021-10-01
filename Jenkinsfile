pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''npm install yarn
yarn'''
      }
    }

    stage('Unit Test') {
      steps {
        sh 'yarn test'
      }
    }

    stage('Component Test') {
      steps {
        sh 'yarn test'
      }
    }

    stage('Integration Test') {
      steps {
        sh 'yarn test'
      }
    }

    stage('Deploy') {
      steps {
        sh 'yarn deploy'
      }
    }

  }
}