import React from 'react';

function Hero() {
    return (
        <div>
            <section className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Manage Your Expense
                            <strong className="font-extrabold text-primary sm:block"> Control your Money </strong>
                        </h1>
                        <p className="mt-4 sm:text-xl/relaxed">
                            Start Creating your Budget And Save Money
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-primary sm:w-auto"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
