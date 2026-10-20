import { Component } from 'react'

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

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gym-black text-gym-white flex items-center justify-center p-4">
          <div className="max-w-2xl text-center">
            <h1 className="font-heading text-4xl text-gym-red mb-4">Something went wrong</h1>
            <pre className="text-left bg-gym-card border border-gym-border p-4 rounded-lg text-sm text-gym-white-soft overflow-auto max-h-[60vh]">
              {this.state.error && this.state.error.toString()}
              {this.state.errorInfo && '\n\n' + this.state.errorInfo.componentStack}
            </pre>
            <button
              onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
              className="mt-6 btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}