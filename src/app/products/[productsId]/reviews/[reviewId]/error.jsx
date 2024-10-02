"use client";

const ErrorBoundary = ({error, reset}) => {
    console.log(reset);
  return (
    <div>
        <p>{error.message}</p>
        <button onClick={reset} className="border-2 p-2">Try again</button>
    </div>
  )
}

export default ErrorBoundary;