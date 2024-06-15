import { Headphones } from 'lucide-react';
import './SupportBtn.css';
import { useMediaQuery } from 'react-responsive';

export function SupportBtn() {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <div className="support-btn-container">
            <button>
                {isDesktop ? (
                    <>
                        <Headphones className="icon" />
                        <span>Contact</span>
                    </>
                ) : (
                    <Headphones className="icon" />
                )}
            </button>
        </div>
    );
}