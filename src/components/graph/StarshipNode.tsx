import { Handle, Position } from '@xyflow/react';
import { STARSHIP_NODE_WIDTH } from '../../services/nodes-services';
import { Starship } from '../../types';

// custom implementation of react flow node
export function StarshipNode({ data }: { data: Starship }) {
  return (
    <div
      className="p-2 border border-gray-500 rounded-md cursor-default"
      // inline style is used to set the width of the node due to the dynamic nature of the graph
      style={{ width: STARSHIP_NODE_WIDTH }}
    >
      <p className="text-center text-gray-300">{data.name}</p>

      {/* custom Handle for incoming connections */}
      <Handle
        type="target"
        position={Position.Top}
        className="w-2 h-2 bg-sky-700"
      />

    </div>
  );
}
