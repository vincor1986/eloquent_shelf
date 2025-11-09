import { ImageResponse } from "next/og";

import loadGoogleFont from "@/lib/og/loadGoogleFont";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const Image = async () => {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "1200px",
          height: "630px",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Copse, serif",
          overflow: "hidden",
        }}
      >
        <img
          src={"https://www.eloquentshelf.com/images/graphics/bookshelf.jpg"}
          alt="Eloquent Shelf Bookshelf"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(to right, #15475e, rgba(21,71,94,0))",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "50px",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={"https://www.eloquentshelf.com/images/logos/circle-white.png"}
            alt="Eloquent Shelf Logo"
            style={{
              position: "absolute",
              height: "100px",
              width: "100px",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            bottom: "0px",
            left: "0px",
            marginBottom: "40px",
            marginLeft: "40px",
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          <p style={{ margin: 0 }}>An eloquent shelf</p>
          <p style={{ margin: 0 }}>is an eloquent self.</p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Copse",
          data: await loadGoogleFont(
            "Copse",
            "An eloquent shelf is an eloquent self."
          ),
          style: ["normal", "italic"],
        },
      ],
    }
  );
};

export default Image;
