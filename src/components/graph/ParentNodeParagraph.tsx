type Props = {
  key1: string;
  val1: string;
  key2: string;
  val2: string;
};

export function ParentNodeParagraph({
  key1, val1, key2, val2,
}: Props) {
  return (
    <div className="flex justify-between mt-1.5">
      <p className="text-slate-400">
        {key1}
        :

        {' '}

        <span className="text-gray-200 text-lg">{val1}</span>
      </p>

      <p className="text-slate-400">
        {key2}
        :

        {' '}

        <span className="text-gray-200 text-lg">{val2}</span>
      </p>
    </div>
  );
}
