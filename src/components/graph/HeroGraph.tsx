import {
  ReactFlow,
} from '@xyflow/react';
import { Film, Hero, Starship } from '../../types';
import '@xyflow/react/dist/style.css';
import { FilmNode, ParentNode, StarshipNode } from '.';
import {
  filmEdjesService,
  filmNodesService,
  parentNodeX,
  starshipEdjesService,
  starshipNodesService,
} from '../../services/nodes-services';

// nodeTypes is used to define the custom nodes
const nodeTypes = {
  film: FilmNode,
  starship: StarshipNode,
  parent: ParentNode,
};

// main component for the graph
export function HeroGraph(
  { hero, films, starships }: { hero: Hero | null, films: Film[], starships: Starship[] },
) {
  // define the nodes for react flow
  const nodes = [
    {
      id: 'parent',
      type: 'parent',
      data: { ...hero },
      position: { x: parentNodeX(films.length), y: 0 },
    },
    // filmNodesService is a function that returns an array of nodes for the films
    ...filmNodesService(films),
    // starshipNodesService is a function that returns an array of nodes for the starships
    ...starshipNodesService(starships),
  ];

  const edges = [
    // filmEdjesService is a function that returns an array of edges
    // between the parent node and the film nodes
    ...filmEdjesService(films),
    // starshipEdjesService is a function that returns an array of edges
    // between the film nodes and the starship nodes
    ...starshipEdjesService(starships),
  ];

  return (
    <div className="h-full">
      {/* ReactFlow component is used to render the graph */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        // nodeTypes is used to define the custom nodes
        nodeTypes={nodeTypes}
        zoomOnPinch={false}
        panOnScroll={false}
        fitView
      />
    </div>
  );
}
