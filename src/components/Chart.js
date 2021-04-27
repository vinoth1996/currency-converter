import {Line} from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const Chart = () => {
    const chartData = {
        labels: [],
        datasets:[{
            label: '',
            data: [],
            fill: 'start',
            backgroundColor: 'rgba(75,192,192,1)',
            borderWidth: 2
        }]
    }

    const historicalData = useSelector((state) => state.historicalData);

    for(let x in historicalData){
        chartData.labels.push('');
        chartData.datasets[0].data.push(historicalData[x]);
    }
    
    return(
        <div>
            <Line
                data={chartData} 
                options={{
                    elements: {
                        point: {
                            radius: 0
                        }    
                    }      
                }}                
            />
        </div>
    )
}

export default Chart;