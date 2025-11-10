import { ImageResponse } from "next/og";

import { Telescope } from "lucide-react";

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
          backgroundColor: "#fff8ed",
          padding: "50px",
        }}
      >
        <img
          src={"https://www.eloquentshelf.com/images/logos/main-logo.png"}
          alt="Eloquent Shelf Logo"
          style={{
            position: "absolute",
            top: "150px",
            left: "50px",
            height: "50px",
          }}
        />
        <img
          src={"https://www.eloquentshelf.com/images/graphics/book-tree.png"}
          alt="Eloquent Shelf Book Tree"
          style={{
            position: "absolute",
            top: "50px",
            right: "50px",
            height: "530px",
          }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: "225px",
            left: "0px",
            backgroundColor: "#15475e",
            padding: "0px 50px",
            maxWidth: "620px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "30px",
              textAlign: "left",
            }}
          >
            Discover your perfect book match on Eloquent Shelf.
          </h1>
        </div>
        <h1
          style={{
            position: "absolute",
            top: "350px",
            left: "50px",
            color: "#15475e",
            fontSize: "26px",
            textAlign: "left",
            maxWidth: "620px",
          }}
        >
          Let our AI discovery tool help you find your next favourite book.
        </h1>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Copse",
          data: await loadGoogleFont(
            "Copse",
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}<>?,."
          ),
          style: ["normal"],
        },
      ],
    }
  );
};

export default Image;
