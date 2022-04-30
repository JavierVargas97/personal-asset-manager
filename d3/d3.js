// const dataURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json';
// const dataUrl2 = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json'


const canvas = d3.select('#canvas');
const toolTip = d3.select('#tool-tip');
const legend = d3.select('#legend')

const width = 400;
const height = 250;
const format = d3.format(",d") // from https://github.com/d3/d3-format

// // Step 1: Read dataUrl and call render function
// const data = async () => {
//     try {
//         const response = await d3.json(dataURL);
//         const data = await response;
//         render(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

const render = data => {
    document.querySelector('#canvas').innerHTML = ""; // Needed to ensure canvas is wiped out on page refreshes
    // Step 2: Create the Hierarchy to use in the Treemap
    const hierarchy = d3.hierarchy(data)
        .sum(d => d.value) // Sum every children values
        .sort((a, b) => b.value - a.value); // Sort in descending order 

    // Step 3: Create the Treemap
    const treemap = d3.treemap()
        .size([width, height])
        .padding(1);

    // Step 4: Pass the Hierarchy to the Treemap and assign it to the root variable - this creates the x0, x1, y0, y1 values for each node
    const root = treemap(hierarchy)

    // Color Scheme: specifying colors for each category
    const categories = data.children.map(d => d.name)     
    const colors = ['#1C1832', '#9E999D', '#F2259C', '#347EB4', 
                '#08ACB6', '#91BB91', '#BCD32F', '#75EDB8',
                "#89EE4B", '#AD4FE8', '#D5AB61', '#BC3B3A',
                '#F6A1F9', '#87ABBB', '#412433', '#56B870', 
                '#FDAB41', '#64624F']
    const colorScale = d3.scaleOrdinal() // the scale function
        .domain(categories) // the data
        .range(colors);    // the way the data should be shown             
        
    // Canvas
    // Step 5: Create SVG Element
    const svg = canvas.append('svg')
            .attr("viewBox", [0, 0, width, height])
            .style("font", "10px sans-serif");
            // .attr('width', width)
            // .attr('height', height)

    console.log(root.leaves())

    // Step 6: Create dataGroup Elements
    const dataGroup = svg.selectAll('g')
        .data(root.leaves())
        .enter()
        .append('g')
        .attr('transform', d => {return `translate(${d.x0}, ${d.y0})`})

    // Append rectangles
    dataGroup.append("rect")
        // .attr("x", d => d.x0)   
        // .attr("y", d => d.y0)
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0)
        .attr("fill", d => colorScale(d.data.category))
        .attr("data-name", d => d.data.name)
        .attr("data-category", d => d.data.category)
        .attr("data-value", d => d.data.value)
        .attr("data-type", 'Tile')
        // .on('mouseover', (e, d) => {
        //     console.log(d)
        //     let category = d.data.category
        //     let name = d.data.name
        //     let value = d.data.value
        //     let top = d.y0
        //     let left = d.x0
        //     console.log(top, left)
        //     toolTip.html(`${category}<br>${name}<br>$${format(value)}`)
        //     toolTip.transition()
        //         .style('display', 'block')
        //         .style('top', `${top}px`)
        //         .style('left', `${left}px`)
        // })
        // .on('mouseout', d => {
        //     toolTip.transition()
        //         .style('display', 'none')
        // })

    // Append Text - Name
    dataGroup.append('text')
        .text(d => `${d.data.name}`)
        .attr('x', 5)
        .attr('y', 15)
        .attr('fill', 'white')
        
    // Append Text - Value
    dataGroup.append('text')
        .text(d => `$${format(d.data.value)}`)
        .attr('x', 5)
        .attr('y', 30)
        .attr('fill', 'white')

    // // Legend
    // const svgLegend = legend.append('svg')
    //         // .attr("viewBox", [0, 0, window.innerWidth/2, window.innerHeight * .10])
    //         .attr('width', window.innerWidth/2)
    //         .attr('height', window.innerHeight * .10)
    //         .style("font", "10px sans-serif")
    //         .style("display", "block")
    //         .style("margin", "auto")
            
    
    // const dataGroupLegend = svgLegend.selectAll('g')
    //     .data(categories)
    //     .enter()
    //     .append('g')
    //     .attr('transform', (d, i) => {return `translate(${0}, ${i * 26})`})

    // dataGroupLegend.append('rect')
    //     .attr("width", 25)
    //     .attr("height", 25)
    //     .attr("fill", d => colorScale(d.data.category))
    
}

// data();

