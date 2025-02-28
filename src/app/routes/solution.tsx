import Image from 'next/image';

export default function SolutionSection() {
    return (
        <div className="h-[490px] bg-gray-100 flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-light mb-12 text-gray-900">
                    Mengapa Memilih M-Knows.AI?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15">
                    <div className="flex flex-col items-center">
                        <Image src="/images/memory.svg" alt="AI Technology" width={64} height={64} />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Teknologi AI Canggih</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/images/chain.svg" alt="Easy Integration" width={64} height={64} />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Integrasi Mudah</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/images/speed.svg" alt="Operational Efficiency" width={64} height={64} />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Efisiensi Operasional Tinggi</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/images/security.svg" alt="Data Security" width={64} height={64} />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Keamanan Data Terjamin</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}