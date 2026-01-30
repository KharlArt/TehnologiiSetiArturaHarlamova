import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <header className="bg-gradient-to-r from-emerald-600 to-green-700 shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Логотип или название приложения */}
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-emerald-600 font-bold text-xl">✓</span>
                            </div>
                            <h1 className="text-white text-2xl font-bold tracking-tight">
                                Умный список дел
                            </h1>
                        </div>

                        {/* Навигация */}
                        <nav className="hidden md:flex items-center space-x-6">
                            <a 
                                href="/" 
                                className="text-white hover:text-emerald-200 font-medium px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-emerald-500/30"
                            >
                                Главная
                            </a>
                            <a 
                                href="/blog" 
                                className="text-white hover:text-emerald-200 font-medium px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-emerald-500/30"
                            >
                                Блог
                            </a>
                            <a 
                                href="/about" 
                                className="text-white hover:text-emerald-200 font-medium px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-emerald-500/30"
                            >
                                О нас
                            </a>
                            <button className="ml-4 bg-white text-emerald-600 font-semibold px-5 py-2 rounded-lg hover:bg-emerald-50 transition-colors duration-200 shadow-sm">
                                Войти
                            </button>
                        </nav>

                        {/* Мобильное меню (бургер) */}
                        <button className="md:hidden text-white p-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header