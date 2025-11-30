import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const ClickSound: React.FC = () => {
    const [enabled, setEnabled] = useState(true);
    const audioContextRef = useRef<AudioContext | null>(null);

    // Initialize Audio Context
    useEffect(() => {
        const initAudio = () => {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            // Resume context if suspended (browser policy)
            if (audioContextRef.current.state === 'suspended') {
                audioContextRef.current.resume();
            }
        };

        const handleInteraction = () => {
            initAudio();
            // Remove listener after first interaction
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('keydown', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };
    }, []);

    const playClick = () => {
        if (!enabled || !audioContextRef.current) return;

        const ctx = audioContextRef.current;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        // Mechanical "Thock" Sound
        oscillator.type = 'triangle';

        const now = ctx.currentTime;

        // Frequency sweep
        oscillator.frequency.setValueAtTime(600, now);
        oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.08);

        // Volume envelope
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.3, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        oscillator.start(now);
        oscillator.stop(now + 0.1);
    };

    useEffect(() => {
        const handleGlobalClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Trigger on interactive elements
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer') ||
                target.getAttribute('role') === 'button'
            ) {
                playClick();
            }
        };

        document.addEventListener('mousedown', handleGlobalClick);
        return () => document.removeEventListener('mousedown', handleGlobalClick);
    }, [enabled]);

    return (
        <button
            onClick={() => setEnabled(!enabled)}
            className="fixed bottom-24 right-6 z-40 p-3 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300 hover:text-[#EC1D24] dark:hover:text-[#EC1D24] hover:border-[#EC1D24] transition-all duration-300 shadow-lg"
            title={enabled ? "Mute Click Sounds" : "Enable Click Sounds"}
        >
            {enabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
    );
};

export default ClickSound;
