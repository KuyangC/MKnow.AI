import Link from 'next/link';

export default function MainSection() {
    return (
        <div className="min-h-screen bg-#0a0b14 text-white flex flex-col justify-center items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Solusi AI Terdepan untuk Bisnis Anda!
                </h1>
                <p className="text-base mb-8">
                    Maksimalkan efisiensi, tingkatkan profitabilitas, dan buat keputusan bisnis lebih cerdas.
                </p>
                <Link href="/produk">
                    <button className="bg-white text-gray-900 font-medium py-3 px-8 rounded-lg hover:bg-blue-100 transition duration-300">
                        Jelajahi Produk Kami
                    </button>
                </Link>
            </div>
        </div>
    );
}