import React, {useState, useEffect, useRef} from 'react';

interface IProps {
    initialMin: number;
    initialMax: number;
    min: number;
    max: number;
    step: number;
    priceCap: number;
}

const RangeSlider: React.FC<IProps> = ({initialMin, initialMax, min, max, step, priceCap}) => {
    const progressRef = useRef<HTMLDivElement>(null);
    const [minValue, setMinValue] = useState<number>(initialMin);
    const [maxValue, setMaxValue] = useState<number>(initialMax);

    const handleMin = (event: {target: HTMLInputElement}) => {
        if (maxValue - minValue >= priceCap && maxValue <= max) {
            if (parseInt(event.target.value) > maxValue) {
            } else {
                setMinValue(parseInt(event.target.value));
            }
        } else {
            if (parseInt(event.target.value) < minValue) {
                setMinValue(parseInt(event.target.value));
            }
        }
    };

    const handleMax = (event: {target: HTMLInputElement}) => {
        if (maxValue - minValue >= priceCap && maxValue <= max) {
            if (parseInt(event.target.value) < minValue) {
            } else {
                setMaxValue(parseInt(event.target.value));
            }
        } else {
            if (parseInt(event.target.value) > maxValue) {
                setMaxValue(parseInt(event.target.value));
            }
        }
    };

    useEffect(() => {
        if (progressRef.current) {
            progressRef.current.style.left = (minValue / max) * step + '%';
            progressRef.current.style.right = step - (maxValue / max) * step + '%';
        }
    }, [minValue, maxValue, max, step]);

    return (
        <div className="min-h-screen grid place-items-center bg-green-300">
            <div className="flex flex-col w-96 bg-white shadow-xl rounded-lg px-6 py-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-1"> Price Range</h1>
                <p className="font-semibold text-lg text-gray-700">
                    Use slider or enter min and max price
                </p>

                <div className="flex justify-between items-center my-6 ">
                    <div className="rounded-md">
                        <span className="p-2 font-semibold"> Min</span>
                        <input
                            onChange={(e) => setMinValue(parseInt(e.target.value))}
                            type="number"
                            value={minValue}
                            className="w-24 rounded-md border border-gray-400"
                        />
                    </div>
                    <div className="ml-2 font-semibold text-lg"> -</div>
                    <div className=" ">
                        <span className="p-2 font-semibold"> Max</span>
                        <input
                            onChange={(e) => setMaxValue(parseInt(e.target.value))}
                            type="number"
                            value={maxValue}
                            className="w-24 rounded-md border border-gray-400"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <div className="slider relative h-1 rounded-md bg-gray-300">
                        <div
                            className="progress absolute h-1 bg-green-300 rounded "
                            ref={progressRef}
                        />
                    </div>

                    <div className="range-input relative  ">
                        <input
                            onChange={handleMin}
                            type="range"
                            min={min}
                            step={step}
                            max={max}
                            value={minValue}
                            className="range-min absolute w-full  -top-1  h-1   bg-transparent  appearance-none pointer-events-none"
                        />

                        <input
                            onChange={handleMax}
                            type="range"
                            min={min}
                            step={step}
                            max={max}
                            value={maxValue}
                            className="range-max absolute w-full  -top-1 h-1  bg-transparent appearance-none  pointer-events-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RangeSlider;
