import { Handle, Position } from '@xyflow/react';
import { Hero } from '../../types';
import { PARENT_NODE_WIDTH } from '../../services/nodes-services';
import { ParentNodeParagraph } from './ParentNodeParagraph';

export function ParentNode({ data }: { data: Hero }) {
  return (
    <div
      className="p-4
        bg-gradient-to-tr
        from-neutral-800
        to-slate-600
        shadow-md
        shadow-yellow-300
        rounded-md
        cursor-default
        "
      // inline style is used to set the width of the node due to the dynamic nature of the graph
      style={{ width: PARENT_NODE_WIDTH }}
    >
      <div className="flex justify-center">
        <h2
          className="text-2xl
            w-fit
            text-center
            bg-gradient-to-r
            from-slate-400
            to-yellow-300
            text-transparent
            bg-clip-text
            "
        >
          {data.name}
        </h2>
      </div>

      {/* custom paragraph component used to avoid code duplication */}
      <ParentNodeParagraph
        key1="Born"
        val1={data.birth_year}
        key2="Gender"
        val2={data.gender}
      />

      <ParentNodeParagraph
        key1="Height"
        val1={`${data.height} cm`}
        key2="Mass"
        val2={`${data.mass} kg`}
      />

      <ParentNodeParagraph
        key1="Hair"
        val1={data.hair_color}
        key2="Eyes"
        val2={data.eye_color}
      />

      {/* custom Handle for incoming connections */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-4 h-4 bg-yellow-300 blur-sm"
      />
    </div>
  );
}
