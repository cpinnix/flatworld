import React, {
  // useEffect,
  useState,
} from "react";
import Head from "next/head";
import objectToPixelArray from "utils/objectToPixelArray";
import _ from "utils/className";
import produce from "immer";

// function createImageCanvasContext(src, width, height) {
//   return new Promise((resolve) => {
//     const img = document.createElement("img");
//     img.src = src;
//     img.width = width;
//     img.height = height;

//     const canvas = document.createElement("canvas");
//     const canvasContext = canvas.getContext("2d");
//     canvas.width = img.width;
//     canvas.height = img.height;

//     img.onload = () => {
//       canvasContext.drawImage(img, 0, 0);
//       resolve(canvasContext);
//     };
//   });
// }

function Input({ label, value, onChange }) {
  return (
    <div className={_(`space-y-1`, `w-full`)}>
      <label className={_(`block`, `text-xs`, `font-mono`, `w-full`)}>
        {label}
      </label>
      <input
        {...{
          className: _(
            `w-full`,
            `border`,
            `border-gray-300`,
            `rounded`,
            `py-2`,
            `px-4`,
            `text-xs`,
            `font-mono`
          ),
          value,
          onChange: (event) => onChange(event.target.value),
        }}
      />
    </div>
  );
}

export default function Home() {
  // useEffect(() => {
  //   createImageCanvasContext(
  //     "https://www.charlespinnix.com/_next/image?url=%2Fimages%2Fhelping-people-move%2F100.png&w=3840&q=75",
  //     1728,
  //     1728
  //   );
  // }, []);

  const [state, updateState] = useState({
    boundary: "https://www.charlespinnix.com/flatworld/0000/boundary.png",
    floor: "https://www.charlespinnix.com/flatworld/0000/floor.png",
    ceiling: "https://www.charlespinnix.com/flatworld/0000/ceiling.png",
    neighbors: {
      northWest: "https://www.charlespinnix.com/flatworld/0000/north_west.png",
      north: "https://www.charlespinnix.com/flatworld/0000/north.png",
      northEast: "https://www.charlespinnix.com/flatworld/0000/north_east.png",
      east: "https://www.charlespinnix.com/flatworld/0000/east.png",
      southEast: "https://www.charlespinnix.com/flatworld/0000/south_east.png",
      south: "https://www.charlespinnix.com/flatworld/0000/south.png",
      southWest: "https://www.charlespinnix.com/flatworld/0000/south_west.png",
      west: "https://www.charlespinnix.com/flatworld/0000/west.png",
    },
  });

  const metadata = state;

  return (
    <div>
      <Head>
        <title>Flatworld</title>
        <meta name="description" content="Flatworld" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={_(`p-8`, `space-y-4`)}>
        <Input
          {...{
            label: "Boundary",
            value: state.boundary,
            onChange(newValue) {
              updateState((state) =>
                produce(state, (draftState) => {
                  draftState.boundary = newValue;
                })
              );
            },
          }}
        />
        <Input
          {...{
            label: "Floor",
            value: state.floor,
            onChange(newValue) {
              updateState((state) =>
                produce(state, (draftState) => {
                  draftState.floor = newValue;
                })
              );
            },
          }}
        />
        <Input
          {...{
            label: "Ceiling",
            value: state.ceiling,
            onChange(newValue) {
              updateState((state) =>
                produce(state, (draftState) => {
                  draftState.ceiling = newValue;
                })
              );
            },
          }}
        />
        <Input
          {...{
            label: "North West",
            value: state.neighbors.northWest,
            onChange(newValue) {
              updateState((state) =>
                produce(state, (draftState) => {
                  draftState.neighbors.northWest = newValue;
                })
              );
            },
          }}
        />
        <Input
          {...{
            label: "North",
            value: state.neighbors.north,
            onChange(newValue) {
              updateState((state) =>
                produce(state, (draftState) => {
                  draftState.neighbors.north = newValue;
                })
              );
            },
          }}
        />
        <Input
          {...{
            label: "North East",
            value: state.neighbors.northEast,
            onChange(newValue) {
              updateState((state) =>
                produce(state, (draftState) => {
                  draftState.neighbors.northEast = newValue;
                })
              );
            },
          }}
        />
        <Input
          {...{
            label: "East",
            value: state.neighbors.east,
            onChange(newValue) {
              updateState((state) =>
                produce(state, (draftState) => {
                  draftState.neighbors.east = newValue;
                })
              );
            },
          }}
        />
        <Input
          {...{
            label: "South East",
            value: state.neighbors.southEast,
            onChange(newValue) {
              updateState((state) =>
                produce(state, (draftState) => {
                  draftState.neighbors.southEast = newValue;
                })
              );
            },
          }}
        />
        <Input
          {...{
            label: "South",
            value: state.neighbors.south,
            onChange(newValue) {
              updateState((state) =>
                produce(state, (draftState) => {
                  draftState.neighbors.south = newValue;
                })
              );
            },
          }}
        />
        <Input
          {...{
            label: "South West",
            value: state.neighbors.southWest,
            onChange(newValue) {
              updateState((state) =>
                produce(state, (draftState) => {
                  draftState.neighbors.southWest = newValue;
                })
              );
            },
          }}
        />
        <Input
          {...{
            label: "West",
            value: state.neighbors.west,
            onChange(newValue) {
              updateState((state) =>
                produce(state, (draftState) => {
                  draftState.neighbors.west = newValue;
                })
              );
            },
          }}
        />
        <button
          {...{
            className: _(
              `border`,
              `border-gray-300`,
              `rounded`,
              `py-2`,
              `px-4`,
              `text-xs`,
              `font-mono`
            ),
            onClick() {
              const canvas = document.createElement("canvas");
              canvas.height = 960;
              canvas.width = 960;
              const context = canvas.getContext("2d");
              const pixelArray = objectToPixelArray(metadata, 960, 960);
              const clampedArray = new Uint8ClampedArray(pixelArray);
              const imageData = new ImageData(clampedArray, 960, 960);
              context.putImageData(imageData, 0, 0);

              const link = document.createElement("a");
              link.download = "metadata.png";
              link.href = canvas.toDataURL();
              link.click();
            },
          }}
        >
          Download Metadata Image
        </button>
      </div>
    </div>
  );
}
