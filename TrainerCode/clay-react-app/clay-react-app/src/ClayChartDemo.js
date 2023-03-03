import ClayChart from '@clayui/charts';
import React,{useState} from 'react'
export const ClayChartDemo = () => {
    const [active, setActive] = useState(false);
  
    const sales2021 = [
      ["Sales-2021", 100, 20, 30],
      ["Sales-2022", 20, 70, 100]
    ];
    const sales2022 = [
      ["Sales-2021", 10, 50, 60],
      ["Sales-2022", 70, 30, 10]
    ];
  
    return (
      <div>
        <button onClick={() => setActive(val => !val)}>
          {"Change Data"}</button>
  
        <ClayChart
          data={{
            columns: active ? sales2021 : sales2022,
            type: "bar"
          }}
        />
      </div>
    );
  };
  