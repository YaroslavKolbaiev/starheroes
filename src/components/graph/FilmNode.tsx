import { Handle, Position } from '@xyflow/react';
import { FILM_NODE_WIDTH } from '../../services/nodes-services';
import { Film } from '../../types';

// custom implementation of react flow node
export function FilmNode({ data }: { data: Film }) {
  return (
    <>
      <div
        className="p-2 text-center border border-gray-500 rounded-md bg-slate-700 cursor-default"
        // inline style is used to set the width of the node due to the dynamic nature of the graph
        style={{ width: FILM_NODE_WIDTH }}
      >
        <h1 className="text-lg text-gray-300">
          Star Wars: Episode
          {' '}

          {data.episode_id}
        </h1>

        <p>{data.title}</p>
      </div>

      {/* custom Handle for incoming connections */}
      <Handle
        type="target"
        position={Position.Top}
        className="w-4 h-4 bg-yellow-300 blur-sm"
      />

      {/* custom Handle for outgoing connections */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-2 h-2 bg-sky-700"
      />
    </>
  );
}
