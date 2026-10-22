import { Component } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { languageStrings } from '../data/gymData'

function ErrorBoundaryContent({ children, hasError, error, errorInfo, resetError }) {
  const { t } = useLanguage()
  const strings = languageStrings[t]

  if (hasError) {
    return (
      <div className="min-h-screen bg-gym-black text-gym-white flex items-center justify-center p-4">
        <div className="max-w-2xl text-center">
          <h1 className="font-heading text-4xl text-gym-red mb-4">{t === 'en' ? 'Something went wrong' : 'कुछ गलत हो गया'}</h1>
          <pre className="text-left bg-gym-card border border-gym-border p-4 rounded-lg text-sm text-gym-white-soft overflow-auto max-h-[60vh]">
            {error && error.toString()}
            {errorInfo && '\n\n' + errorInfo.componentStack}
          </pre>
          <button
            onClick={resetError}
            className="mt-6 btn-primary"
          >
            {t === 'en' ? 'Try Again' : 'फिर से कोशिश करें'}
          </button>
        </div>
      </div>
    )
  }

  return children
}

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo })
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    return (
      <ErrorBoundaryContent
        hasError={this.state.hasError}
        error={this.state.error}
        errorInfo={this.state.errorInfo}
        resetError={this.resetError}
      >
        {this.props.children}
      </ErrorBoundaryContent>
    )
  }
}