import * as echarts from 'echarts/core';
import {
  BarChart,
  // The series types are defined with the SeriesOption suffix
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
} from 'echarts/charts';
import {
  TitleComponent,
  // The component types are defined with the suffix ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // Dataset
  DatasetComponent,
  DatasetComponentOption,
  // Built-in transform (filter, sort)
  TransformComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useEffect, useRef } from 'react';
// import ReactECharts from 'echarts-for-react/esm/core';

// Combine an Option type with only required components and charts via ComposeOption
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

const option: ECOption = {
  title: {
    text: 'ECharts Getting Started Example',
  },
  tooltip: {},
  xAxis: {
    data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks'],
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

/* eslint-disable-next-line */
export interface ChartProps {
  theme?: 'light' | 'dark';
  settings?: echarts.SetOptionOpts;
  loading?: boolean;
  style?: React.CSSProperties;
}

export function Chart(props: ChartProps) {
  const { theme = 'light', settings, loading, style } = props;
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chart
    let chart: echarts.ECharts | undefined;

    // Initialize chart
    if (chartRef.current !== null) {
      chart = echarts.init(chartRef.current, theme);
    }

    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener('resize', resizeChart);

    // Return cleanup function
    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, [theme]);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = echarts.getInstanceByDom(chartRef.current);

      if (chart !== undefined) {
        chart.setOption(option, settings);
      }
    }
  }, [settings, theme]); // Whenever theme changes we need to add option and setting due to it being deleted in cleanup function

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = echarts.getInstanceByDom(chartRef.current);

      if (chart !== undefined) {
        loading === true ? chart.showLoading() : chart.hideLoading();
      }
    }
  }, [loading, theme]);

  return (
    <div>
      <h1>Welcome to Chart!</h1>

      <div
        ref={chartRef}
        style={{ width: '100%', height: '500px', ...style }}
      />
    </div>
  );
}

export default Chart;
