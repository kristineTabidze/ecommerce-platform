import React from 'react';

const Header: React.FC = () => {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl sm:px-6 lg:flex lg:justify-between lg:px-8">
          <div>
            <h2 className="text-4xl tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Get your Kemper Profiling Amp
            </h2>
            <p className="mt-5 text-xl text-gray-500">
              All your favorite amps and effects, together in one little box.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Header;