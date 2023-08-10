"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner
          fullname="Pattarapol Na Nakorn"
          id="650610796"
          text="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207 "
        ></PostOwner>

        {/* Comment Example */}
        {/* <Comment
          userImagePath="/profileImages/lisa.jpg"
          username="Lisa"
          commentText="จริงค่า"
          likeNum="999"
        ></Comment> */}
        {comments.map((com, i) => (
          <Comment
            key={com.username}
            userImagePath={com.userImagePath}
            username={com.username}
            commentText={com.commentText}
            likeNum={com.likeNum}
            replies={com.replies}
          />
        ))}

        {/* Reply Example */}
        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
