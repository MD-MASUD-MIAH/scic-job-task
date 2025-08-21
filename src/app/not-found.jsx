import Link from 'next/link';
import React from 'react';

function notFound(props) {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#ff99c8] mb-4 animate-bounce">404</h1>
        <p className="text-2xl md:text-3xl text-base-content mb-6">
          Oops! Page Not Found
        </p>
        <p className="text-lg text-base-content/70 mb-8 max-w-md mx-auto">
          It looks like the page you're looking for doesn't exist or has been moved.
        </p>
        <Link className="btn btn-primary tom-btn" href="/">
          Go Back Home
        </Link>
      </div>
    </div>
    );
}

export default notFound;