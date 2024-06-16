import { Headphones } from 'lucide-react';
import './SupportBtn.css';
import { useMediaQuery } from 'react-responsive';

export function SupportBtn() {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <div className="support-btn-container">
            <button>
                <a className="flex" href="https://forms.gle/7EihcEP6FV3X5JQSA">
                {isDesktop ? (
                    <>
                        <Headphones className="icon" />
                        <span>Contact</span>
                    </>
                ) : (
                    <Headphones className="icon" />
                )}
                </a>
            </button>
        </div>
    );
}