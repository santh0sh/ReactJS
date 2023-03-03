import React, {useState} from 'react'
import {Slider} from 'primereact/slider'


const SliderDemo = () => {
    const [value, setValue] = useState(null);

    return (
            <div className="slider-demo">
                <div className="card">
                    <h3>Value: {value}</h3>
                    <Slider value={value} onChange={(e) => setValue(e.value)} />
                        </div>
                    </div>
                );
            }

    export default SliderDemo