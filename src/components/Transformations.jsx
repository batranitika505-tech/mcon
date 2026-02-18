import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import gsap, { fadeInUp } from '../utils/gsapAnimations';
import { Play, Pause } from 'lucide-react';

const VideoCard = ({ src, label, index }) => {
    const videoRef = useRef(null);
    const cardRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal animation
            fadeInUp(cardRef.current, {
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                }
            });

            // Parallax effect on the video itself
            gsap.to(videoRef.current, {
                y: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, cardRef);
        return () => ctx.revert();
    }, [index]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateTime = () => setCurrentTime(video.currentTime);
        const updateDuration = () => setDuration(video.duration);

        video.addEventListener('timeupdate', updateTime);
        video.addEventListener('loadedmetadata', updateDuration);

        return () => {
            video.removeEventListener('timeupdate', updateTime);
            video.removeEventListener('loadedmetadata', updateDuration);
        };
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleSeek = (e) => {
        const time = Number(e.target.value);
        videoRef.current.currentTime = time;
        setCurrentTime(time);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div ref={cardRef} className="reveal flex flex-col space-y-8 w-full gpu-accel">
            {/* Header Label */}
            <div className="text-center space-y-3">
                <h4 className="text-2xl md:text-3xl font-light text-[#333F48] tracking-tight uppercase">
                    {label}
                </h4>
                <div className="h-[2px] w-12 bg-[#F58220] mx-auto rounded-full" />
            </div>

            {/* Video Container */}
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative w-full h-[300px] md:h-[450px] rounded-[40px] overflow-hidden shadow-premium border border-black/5 bg-black"
            >
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover will-animate scale-110"
                >
                    <source src={src} type="video/mp4" />
                </video>

                {/* Floating Play/Pause Button */}
                <button
                    onClick={togglePlay}
                    className={`absolute bottom-8 right-8 z-30 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 hover:bg-white/30 transition-all duration-500 transform ${isHovered ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-2 opacity-0'}`}
                >
                    {isPlaying ? (
                        <Pause size={20} className="text-white fill-white" />
                    ) : (
                        <Play size={20} className="text-white fill-white translate-x-[2px]" />
                    )}
                </button>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* YouTube Style Seek Bar & Controls */}
            <div className="px-4 py-2 space-y-4">
                <div className="relative group/bar flex items-center">
                    <input
                        type="range"
                        min="0"
                        max={duration || 100}
                        step="0.01"
                        value={currentTime}
                        onChange={handleSeek}
                        style={{
                            background: `linear-gradient(to right, #F58220 0%, #F58220 ${(currentTime / (duration || 1)) * 100}%, rgba(0,0,0,0.1) ${(currentTime / (duration || 1)) * 100}%, rgba(0,0,0,0.1) 100%)`
                        }}
                        className="youtube-range w-full h-1.5 md:h-2 rounded-full appearance-none cursor-pointer outline-none transition-all duration-300 hover:h-2.5"
                    />
                </div>

                <div className="flex justify-between items-center px-1">
                    <span className="text-[10px] font-bold tracking-widest text-[#999]">
                        {formatTime(currentTime)}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-[#999]">
                        {formatTime(duration)}
                    </span>
                </div>
            </div>

            <style>{`
                .youtube-range::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 14px;
                    height: 14px;
                    background: #F58220;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                    box-shadow: 0 0 10px rgba(245, 130, 32, 0.5);
                }
                .youtube-range::-webkit-slider-thumb:hover {
                    transform: scale(1.3);
                }
                .youtube-range::-moz-range-thumb {
                    width: 14px;
                    height: 14px;
                    background: #F58220;
                    border-radius: 50%;
                    cursor: pointer;
                    border: none;
                }
            `}</style>
        </div>
    );
};

const Transformations = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            fadeInUp(subtitleRef.current, { delay: 0 });
            fadeInUp(titleRef.current, { delay: 0.1 });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-[#ffffff] overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-24 space-y-6">
                    <p ref={subtitleRef} className="reveal text-[#F58220] uppercase tracking-[0.6em] font-bold text-xs">
                        Success Story
                    </p>
                    <h3 ref={titleRef} className="reveal text-5xl md:text-7xl font-light tracking-tight text-[#333F48]">
                        Before & After <span className="serif text-[#F58220] italic">Basement</span>
                    </h3>
                </div>

                {/* Symmetrical 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-start justify-items-center">
                    <VideoCard
                        src="/beforebasement.mp4"
                        label="Before Basement"
                        index={0}
                    />
                    <VideoCard
                        src="/afterproduct.mp4"
                        label="After Product"
                        index={1}
                    />
                </div>
            </div>

            {/* Background Decorative Accent */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-[#fafafa] -z-10" />
            <div className="absolute bottom-0 left-10 w-40 h-[1px] bg-[#F58220]/20 -z-10" />
        </section>
    );
};

export default Transformations;
