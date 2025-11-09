import { ImageResponse } from "next/og";

import imageURL from "@/lib/cms/imageURL";
import formatList from "@/lib/helpers/formatList";

import client from "@/lib/cms/client";
import loadGoogleFont from "@/lib/og/loadGoogleFont";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const Image = async ({ params }) => {
  const { slug } = await params;

  const query = `*[_type == "summary" && slug == $slug][0]{
    title,
    subtitle,
    author,
    description,
    cover_image,
    rating,
  }`;

  const summary = await client.fetch(query, { slug });
  const imageUrl = imageURL(summary.cover_image.asset._ref);

  console.log("Summary", summary);
  console.log(imageUrl);

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
          backgroundColor: "white",
          padding: "50px",
        }}
      >
        <img
          src={imageUrl}
          alt={`${summary.title} Cover Image`}
          style={{
            height: "450px",
            position: "absolute",
            left: "50px",
            top: "50px",
          }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "300px",
            height: "100px",
            left: "50px",
            bottom: "50px",
            fontSize: "28px",
            color: "#15475e",
            textAlign: "center",
          }}
        >
          {summary.rating} out of 5 stars
        </div>
        <img
          src={"https://www.eloquentshelf.com/images/logos/main-logo.png"}
          alt="Eloquent Shelf Logo"
          style={{
            position: "absolute",
            top: "50px",
            right: "50px",
            height: "50px",
          }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            right: "50px",
            width: "750px",
            top: "50px",
            bgColor: "white",
            flexDirection: "column",
            paddingTop: "80px",
            paddingLeft: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              color: "#15475e",
            }}
          >
            {summary.title}
            {summary.subtitle ? ": " : " "}
            {summary.subtitle}
          </h2>
          <h3
            style={{
              color: "#0069a8",
              fontSize: "32px",
            }}
          >
            {summary.description}
          </h3>
        </div>
        <h4
          style={{
            position: "absolute",
            bottom: "50px",
            right: "50px",
            fontSize: "26px",
            color: "#0069a8",
            maxWidth: "730px",
          }}
        >
          {formatList(summary.author, false)}
        </h4>
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
