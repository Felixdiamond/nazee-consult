import { Headphones } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

export function SupportBtn() {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <button className="bg-orange-600 text-white border-none rounded-lg p-3 text-lg shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-orange-700">
                <a href="https://forms.gle/7EihcEP6FV3X5JQSA" className="flex items-center">
                    <Headphones className="w-6 h-6" />
                    {isDesktop && <span className="ml-2 font-semibold">Contact</span>}
                </a>
            </button>
        </div>
    );
}
