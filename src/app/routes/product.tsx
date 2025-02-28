    export default function ProductSection() {
        return (
            <div className="h-[490px] bg-white flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-light text-center mb-8 text-gray-900">
                        Produk dan Solusi
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center border-2 rounded-md">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Credit Scoring</h3>
                            <p className="text-gray-900 mb-4">Eksklusif cakup peminjaman dengan cepat dan akurat</p>
                            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                                Pelajari Lebih Lanjut
                            </button>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Collection Solution</h3>
                            <p className="text-gray-900 mb-4">Optimalkan proses penagihan dengan AI cerdas</p>
                            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                                Coba Sekarang
                            </button>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Sales Solution</h3>
                            <p className="text-gray-900 mb-4">Pantau kinerja tim sales secara real-time</p>
                            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                                Dapatkan Demo
                            </button>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">AI LMS</h3>
                            <p className="text-gray-900  mb-4">Transformasikan pembelajaran digital dengan AI</p>
                            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                                Ajak Fitur
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }