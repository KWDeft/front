import React from "react";
import ApexCharts from "react-apexcharts";


const DBChart = () => {
    return (
        <div>
        <ApexCharts 
          type="line" 
          series={ [
              { name: "회원권",
                data: [21, 0, 0, 0],
              },
              { name: "기타",
                data: [9, 0, 0, 0],
              },
              ]} 
          options={{    
              chart : {
                  height: 600,
                  width: 500,  
                  toolbar:{show:false},                  
              }, 
              xaxis: {
                categories: ['1분기', '2분기', '3분기', '4분기'],
              }
              
            }}>
          </ApexCharts>
       
        </div>
        );
}

export default DBChart;