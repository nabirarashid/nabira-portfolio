import React from "react";
import Image from "/assets/website/pfp.jpg";

const InstagramPost = () => {
  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-105 cursor-pointer">
        <div style={{ padding: "12px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <img
              src={Image}
              alt="tech.with.nabira profile"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                marginRight: "12px",
                objectFit: "cover",
              }}
            />
            <div>
              <a
                href="https://www.instagram.com/tech.with.nabira/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#262626",
                  textDecoration: "none",
                }}
              >
                tech.with.nabira
              </a>
            </div>
          </div>

          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              color: "#262626",
              lineHeight: "1.4",
              marginBottom: "12px",
            }}
          >
            ꣑ৎ ˖˚⊹ join me in my journey as i explore tech & computer science
            ˖˚⊹ ꣑ৎ‎
            <br />
            check out the blog ⬇️🌟
          </div>

          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              color: "#8e8e8e",
              fontWeight: "600",
            }}
          >
            681 followers
          </div>

          <a
            href="https://www.instagram.com/reel/DLOYMVzspIw/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginTop: "12px",
              color: "#0095f6",
              textDecoration: "none",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
            }}
          >
            View more on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramPost;
