import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const AuthPage = () => {
    const [login, setLogin] = useState(true)

    return (
        <div className="min-h-screen animated-gradient flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Floating background elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-xl float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-2xl float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl"></div>

            {/* Main content */}
            <div className="relative z-10 w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8 slide-in-bottom">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 pulse-slow">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        {login ? 'Welcome Back!' : 'Join Us Today!'}
                    </h1>
                    <p className="text-white/80">
                        {login ? 'Sign in to your account to continue' : 'Create your account to get started'}
                    </p>
                </div>

                {/* Auth Form */}
                <div className="glass-morphism p-8 rounded-2xl shadow-2xl hover-scale slide-in-bottom">
                    {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
                </div>

                {/* Footer */}
                <div className="text-center mt-6 slide-in-bottom">
                    <p className="text-white/70 text-sm">
                        {login ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setLogin(!login)}
                            className="text-yellow-300 hover:text-yellow-200 font-medium transition-colors duration-200"
                        >
                            {login ? 'Sign up here' : 'Sign in here'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AuthPage