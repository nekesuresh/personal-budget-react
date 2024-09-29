import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3ChartComponent = ({ budgetData }) => {
  const d3ChartRef = useRef(null);

  useEffect(() => {
    const width = 800;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    // Create SVG
    const svg = d3.select(d3ChartRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Pie and Arc setup
    const pie = d3.pie().value(d => d.budget);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    // Append paths (pie chart slices)
    svg.selectAll('path')
      .data(pie(budgetData))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => d3.schemeCategory10[i]);

    // Cleanup function (to avoid memory leaks)
    return () => {
      d3.select(d3ChartRef.current).selectAll('*').remove();
    };
  }, [budgetData]);

  return <svg ref={d3ChartRef}></svg>;
};

export default D3ChartComponent;
