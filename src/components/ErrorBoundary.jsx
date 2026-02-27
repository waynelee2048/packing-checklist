import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 p-6">
          <div className="text-center max-w-sm">
            <p className="text-5xl mb-4">😵</p>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              發生錯誤
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              應用程式遇到問題，請重新載入再試一次。
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-sky-500 text-white rounded-lg font-medium active:bg-sky-600"
            >
              重新載入
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
