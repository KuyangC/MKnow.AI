import Image from 'next/image';

export default function Footer() {
    return (
        <div className=" bg-white text-gray-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Kolom 4: Ikon Sosial Media */}
                    <div>
                        <h3 className="text-lg font-light mb-4">Kampus Gratis</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:opacity-75">
                                <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
                            </a>
                            <a href="#" className="hover:opacity-75">
                                <Image src="/images/tweeter.svg" alt="Twitter" width={24} height={24} />
                            </a>
                            <a href="#" className="hover:opacity-75">
                                <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
                            </a>
                            <a href="#" className="hover:opacity-75">
                                <Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                            </a>
                        </div>
                    </div>
                    {/* Kolom 1: Kampus Gratis */}
                    <div>
                        <h3 className="text-lg font-light mb-4">Halaman</h3>
                        <ul className="space-y-2">
                            <li>Rencana Studi</li>
                            <li>Studi-Ku</li>
                            <li>Panduan</li>
                            <li>Sekilas Ilmu</li>
                        </ul>
                    </div>

                    {/* Kolom 2: Kontak */}
                    <div>
                        <h3 className="text-lg font-light mb-4">Kontak</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <Image src="/images/phone-icon.svg" alt="Phone" width={16} height={16} className="mr-2" />
                                085183004001
                            </li>
                            <li className="flex items-center">
                                <Image src="/images/phone-icon.svg" alt="Phone" width={16} height={16} className="mr-2" />
                                +62 21 38890052
                            </li>
                            <li className="flex items-center">
                                <Image src="/images/email-icon.svg" alt="Email" width={16} height={16} className="mr-2" />
                                info@kampusgratis.id
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 3: Alamat */}
                    <div>
                        <h3 className="text-lg font-light mb-4">Alamat</h3>
                        <ul className="space-y-2">
                            <li>
                                <strong>Utama:</strong> Jl. Radio IV No.8B Barito, Kebayoran Baru, Jakarta Selatan 12130
                            </li>
                            <li>
                                <strong>Produksi:</strong> Jl. Raya Cirendeu No.61, Tangerang Selatan 15419
                            </li>
                            <li>
                                <strong>Cabang:</strong> Jl. Raya Darmo Permai III, Surabaya 60119
                            </li>
                        </ul>
                    </div>

                    
                </div>

                {/* Bagian Bawah Footer */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-sm">
                        2024 - www.kampusgratis.id - Hak Cipta Dilindungi.
                    </p>
                    <div className="mt-2 space-x-4">
                        <a href="#" className="text-sm hover:underline">Terms of use</a>
                        <a href="#" className="text-sm hover:underline">Privacy policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}