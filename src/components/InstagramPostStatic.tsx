import React from "react";

const InstagramPost = () => {
  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div style={{ padding: "12px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#f0f0f0",
                marginRight: "12px",
              }}
            ></div>
            <div>
              <div
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#262626",
                }}
              >
                tech.with.nabira
              </div>
              <div
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "12px",
                  color: "#8e8e8e",
                }}
              >
                Original audio
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "180px",
              backgroundColor: "#f8f8f8",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "12px",
            }}
          >
            <svg width="50" height="50" viewBox="0 0 24 24" fill="#8e8e8e">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
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
            How I went from 0 to ML as a Computer Science student (No CS degree.
            No bootcamp.)
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "12px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </div>

          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              color: "#8e8e8e",
              fontWeight: "600",
            }}
          >
            119 likes
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
