import { useRef, useContext, useLayoutEffect } from "react";
import * as d3 from "d3";
import { SurfaceContext } from "../contexts/Surface";
import { AppContext } from "../contexts/AppStore";
  
const HexaGraph = () => {
    const surface = useContext(SurfaceContext);
    const d3Container = useRef(null);
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);

    const renderHexagraph = () => {
        d3.selectAll('path.hex').remove()
        d3.selectAll('text.hexText').remove()

        const p = [(410/1.8),(260/3)], i = [35/3,80/3] // hexcoords
        const hexGrid = [[0,0],[(i[0]*2),0],[i[0],(-i[1]*.75)],[-i[0], (-i[1]*.75)],[-i[0]*2,0],[-i[0],(i[1]*.75)],
            [i[0],(i[1]*.75)],[i[0]*3,(i[1]*.75)],[i[0]*4,(0)],[i[0]*3,(-i[1])*.75],[i[0]*2,(-i[1])*1.5],
            [0,(-i[1])*1.5],[-i[0]*2,(-i[1])*1.5],[-i[0]*3,(-i[1])*.75],[-i[0]*4,(0)],[-i[0]*3,(i[1]*.75)],
            [-i[0]*2,(i[1]*1.5)],[(0),(i[1]*1.5)],[i[0]*2,(i[1]*1.5)],[i[0]*5,(i[1]*.75)],[i[0]*5,(-i[1]*.75)],
            [-i[0]*5,(-i[1]*.75)],[-i[0]*5,(i[1]*.75)],[i[0]*6,(0)],[-i[0]*6,(0)],[i[0],(-i[1]*2.25)],
            [-i[0],(-i[1]*2.25)],[i[0],(i[1]*2.25)],[-i[0],(i[1]*2.25)],[-i[0]*3,(-i[1]*2.25)],
            [i[0]*4,(-i[1]*1.5)],[i[0]*4,(i[1]*1.5)],[i[0]*3,(i[1]*2.25)],[i[0]*3,(-i[1]*2.25)],
            [-i[0]*4,(-i[1]*1.5)],[-i[0]*4,(i[1]*1.5)],[-i[0]*3,(i[1]*2.25)]];
        // get text summary of data
        const getHexagraphText = (data) => {
        let s = {HIGH: [], MED:[], LOW: []};
        data.forEach(d => {
        d[2] === 200 ? s.HIGH.push(d[2]) 
          : d[2] === 50 ? s.MED.push(d[2])
          : s.LOW.push(d[2])
        })
        return [`${(s.HIGH.length/37*100).toFixed(1)}% - 200`, 
                `${(s.MED.length/37*100).toFixed(1)}% - 50`,
                ` ${(s.LOW.length/37*100).toFixed(1)}% - 5 `] 
        }
        
        const hexGridData = hexGrid.map((d,i) => [...d, surface.hexTypes[i]])
        const hexText = getHexagraphText(hexGridData)
        const hexColors = {5: "rgba(0, 224, 135, 0.4)", 50: "rgba(0, 168, 224, 0.5)", 200: "rgba(135, 0, 224, 0.5)"};
        const hexPos = (d) => [(p[0]+d[0]),(p[1]+d[1])]
        const coords = [[i[0], i[1]],[i[0]-i[0], (i[1]*.75)],[(i[0]-i[0]), (i[1]*.25)],[i[0], (i[1]-i[1])],[i[0]*2, i[1]*.25], [i[0]*2, i[1]*.75]]
        const width = 420, height = 360;
        const svg = d3.select(d3Container.current)
            .attr('width', width)
            .attr('height', height)
     
        svg.selectAll('path')
          .data(hexGridData)
          .join(
            enter => enter.append('path')
            .transition().duration(2000)
            .attr('transform', (d, i) => `translate(${hexPos(d)})`)
            .attr('d', `M${coords.join("L")}Z`)
            .attr('fill', d => hexColors[d[2]] || "rgba(0, 224, 135, 0.4)")
            .attr('stroke', 'white')
            .attr('stroke-width', 2)
            .attr('stroke-opacity', 0.1)
            .attr('class', 'hex')
            .selection(),
            update => update
              .transition().duration(2000)
              .selection(),
            exit => exit
              .transition().duration(2000)
              .selection(),
          )

            svg.selectAll('text')
              .data(hexText)
              .enter()
              .append('text')
              .attr('text-anchor', 'right')
              .attr("font-size", "12px")
              .attr("font-family", "Helvetica") 
              .style('font-style', 'italic')
              .attr("startOffset", "50%")
              .style("fill", "white")
              .attr("fill-opacity", 0.3)
              .attr('class', 'hexText')
              .transition()
              .duration(3000)
              .attr("x", (d,i) => (width/3.6-(1+i*10)) )
              .attr("y", (d,i) => (40+i*24))
              .text(d => d)
    }

    useLayoutEffect(() => {
        // surface.hexTypes && renderHexagraph()
        appContext.surfaceRequest && renderHexagraph()
        console.log('ran hexagraph')
    }, [appContext.surfaceRequest, d3Container.current]);

  return (
      <>
      <div className="hexagraph">
        <svg ref={d3Container} />
      </div>
      </>
  )
};

export default HexaGraph;
