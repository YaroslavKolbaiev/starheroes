import { Img } from 'react-image';

export function BgImage() {
  return (
    <Img
      src="/assets/sky-mobile.jpg"
      srcSet="
        /assets/sky-mobile.jpg 300w,
        /assets/sky-small.jpg 600w,
        /assets/sky-medium.jpg 900w,
        /assets/sky.jpg 1200w
      "
      loader={<div className="absolute w-full h-full bg-neutral-800 brightness-50 bg-cover" />}
      alt="sky-bg"
      className="absolute w-full h-full brightness-50 object-fill"
    />
  );
}
