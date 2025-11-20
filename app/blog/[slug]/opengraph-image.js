import { ImageResponse } from "next/og";

import loadGoogleFont from "@/lib/og/loadGoogleFont";
import { fetchBlogPostBySlug } from "@/actions/blog";
import imageURL from "@/lib/cms/imageURL";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const Image = async ({ params }) => {
  const { slug } = await params;
  const { data: blogPost } = await fetchBlogPostBySlug(slug);

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
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "white",
          }}
        >
          <img
            src={"https://eloquentshelf.com/images/graphics/blog_og_bg.png"}
            alt="Eloquent Shelf Blog Background"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.3,
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "50px",
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
            top: "50px",
            left: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              color: "#15475e",
              fontSize: "55px",
              marginTop: "10px",
              backgroundColor: "white",
              padding: "10px 15px",
              borderRadius: "5px",
              textWrap: "wrap",
              maxWidth: "1100px",
            }}
          >
            {blogPost.title}: {blogPost.subtitle}
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <img
              src={"https://eloquentshelf.com/images/logos/main-logo.png"}
              alt="Eloquent shelf logo"
              style={{ width: "250px", marginTop: "10px", marginLeft: "15px" }}
            />
            <p
              style={{ color: "#15475e", marginLeft: "10px", fontSize: "40px" }}
            >
              Blog
            </p>
          </div>
        </div>
        <img
          src="https://eloquentshelf.com/images/graphics/booktree_transparent.png"
          alt="Book Tree"
          style={{
            position: "absolute",
            right: "50px",
            bottom: "-150px",
            height: "600px",
            width: "600px",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Copse",
          data: await loadGoogleFont(
            "Copse",
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
          ),
          style: ["normal", "italic"],
        },
      ],
    }
  );
};

export default Image;
