import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const currentYear = new Date().getFullYear();
        
        return (
            <footer className="bg-gradient-to-b from-emerald-900 to-green-800 text-white py-10 mt-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Левая часть - лого и описание */}
                        <div className="mb-6 md:mb-0 max-w-md">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                    <span className="text-emerald-600 font-bold text-2xl">✓</span>
                                </div>
                                <h2 className="text-2xl font-bold">Умный список дел</h2>
                            </div>
                            <p className="text-emerald-100 text-sm">
                                Приложение, которое помогает организовать задачи по правилу 1-3-5. 
                                Одна большая, три средние и пять маленьких задач в день.
                            </p>
                        </div>

                        {/* Правая часть - навигация */}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                            <div>
                                <h3 className="font-bold text-lg mb-3 text-emerald-300">Навигация</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a 
                                            href="/" 
                                            className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline"
                                        >
                                            Главная
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="/blog" 
                                            className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline"
                                        >
                                            Блог
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="/about" 
                                            className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline"
                                        >
                                            О нас
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="font-bold text-lg mb-3 text-emerald-300">Контакты</h3>
                                <ul className="space-y-2 text-emerald-100">
                                    <li className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        email@example.com
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        +7 (XXX) XXX-XX-XX
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Нижняя часть - копирайт */}
                    <div className="border-t border-emerald-700 mt-8 pt-6 text-center text-emerald-300 text-sm">
                        <p>© {currentYear} Умный список дел. Все права защищены.</p>
                        <p className="mt-2">Сделано с ❤️ для продуктивного дня</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer