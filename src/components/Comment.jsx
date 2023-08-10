import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{username}</span>
          <br />
          <span>{commentText}</span>
          {likeNum != 0 ? (
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">{likeNum} คน</span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* map-loop render Reply component here */}
      {replies.map((re, i) => (
        <Reply
          key={re.username}
          userImagePath={re.userImagePath}
          username={re.username}
          commentText={re.commentText}
          likeNum={re.likeNum}
          replies={re.replies}
        />
      ))}
    </div>
  );
};
