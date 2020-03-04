// generate rooms and use/import graph for map
// Render Graph component from react-d3-graph
// state = rooms, game data/info

import React, { useState, useEffect, useCallback } from 'react';
import { Graph } from "react-d3-graph";

const myConfig = {
    automaticRearrangeAfterDropNode: true,
    collapsible: false,
    directed: false,
    focusAnimationDuration: 0.75,
    focusZoom: 1,
    highlightDegree: 0, // set to 1 if we want light highlights added
    highlightOpacity: 0,
    linkHighlightBehavior: false, //set true if we want to see line highlights
    maxZoom: 5, // ? test
    minZoom: 0.1, // ? test
    nodeHighlightBehavior: true,
    panAndZoom: false,
    staticGraph: true,
    staticGraphWithDragAndDrop: true,
    d3: {
        alphaTarget: 0,
        gravity: -400,
        linkLength: 180, // ? test
        linkStrength: 1
      },
    node: {
        color: "#d3d3d3",
        fontColor: "black",
        fontSize: 12,
        fontWeight: "normal",
        highlightColor: "SAME",
        highlightFontSize: 12,
        highlightFontWeight: "bold",
        highlightStrokeColor: "SAME",
        highlightStrokeWidth: "SAME",
        mouseCursor: "pointer",
        opacity: 1,
        renderLabel: false,
        size: 50, // play with sizes
        strokeColor: "none",
        strokeWidth: 2,
        svg: "",
        symbolType: "square" // play with shape of nodes
      }, 
    link: {
        color: "#d3d3d3",
        fontColor: "red",
        fontSize: 10,
        fontWeight: "normal",
        highlightColor: "blue",
        highlightFontSize: 8,
        highlightFontWeight: "bold",
        labelProperty: "label",
        mouseCursor: "pointer",
        opacity: 1,
        renderLabel: false,
        semanticStrokeWidth: true,
        strokeWidth: 1.5
      }
}

const Map = (props) => {
    const [ graph, setGraph ] = useState({});
    const [ curNode, setCurNode ] = useState({});

    const handleReload = useCallback(() => {
        //setCurNode to find room and room id via worldMap.room data
        const visited = []
        // const nodes = filter rooms if visited -- include it in map
        // const adjacent - new Set() ????
        // for each node -- set new Set directions (greyed links)

        // const coords = mapRef.current -- RESEARCH VIEWPORT

        // const adjacentNodes - filter rooms for adjacent rooms
        // const newGraph
    })

    useEffect(() => {
        handleReload();
        // window.addEventListener("resize", handleRefresh);
        // return () => window.removeEventListener("resize", handleRefresh);
    }, [])

    return(
        <div className='map-container'>
            <div className='graph-container'>
                <Graph
                    className="graph"
                    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                    data={graph}
                    config={myConfig}
                />

            <h2>
                display the possible exits of this room
            </h2>
            </div>
        </div>
    )
}

export default Map;