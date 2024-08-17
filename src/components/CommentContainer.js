import React from "react";
import userImage from "../assets/user_image.png";

const comments = [
  {
    owner: "Adarsh",
    text: "The guard who is clearly spooked by the illusion unraveling is also the same one who actually reaches out to touch it. Major kudos to him for being brave.",
    likes: "12",
    dislikes: "1",
    replies: [
      {
        owner: "Adarsh reply",
        text: "I love how every plot beat in this movie is 'the party makes a plan, then rolls 1s.'",
        likes: "12",
        dislikes: "1",
        replies: [],
      },
      {
        owner: "Adarsh reply",
        text: "How every great DND adventure truly starts.",
        likes: "12",
        dislikes: "1",
        replies: [],
      },
    ],
  },
  {
    owner: "Adarsh",
    text: "I got to give props on how the barbarian is technically fighting the same group during that entire time in the forge. The fight is not over quick and she is having to keep trying to disable or kill them over and over again because their armor is actually DOING ITS JOB!.",
    likes: "12",
    dislikes: "1",
    replies: [],
  },
  {
    owner: "Adarsh",
    text: "Trashing the puzzle bridge felt more like 'okay, I am NOT going through that convoluted mess, I'd rather have the party fail!'",
    likes: "12",
    dislikes: "1",
    replies: [],
  },
  {
    owner: "Adarsh",
    text: "It's the 'BRUUUUUUUUUUUEEEEEEEEHHHHHHH' that always sends me over the edge.",
    likes: "12",
    dislikes: "1",
    replies: [],
  },
  {
    owner: "Adarsh",
    text: "I love this scene! The look on the guard's face: 'What madness is this??'",
    likes: "12",
    dislikes: "1",
    replies: [
      {
        owner: "Adarsh",
        text: "The audio description narration is the equivalent of a GM version.",
        likes: "12",
        dislikes: "1",
        replies: [
          {
            owner: "Adarsh",
            text: "Will Wheaton is rolling for every character.",
            likes: "12",
            dislikes: "1",
            replies: [
              {
                owner: "Adarsh",
                text: "loreem ispum asd nnn dsasadm dfefe dwds",
                likes: "12",
                dislikes: "1",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    owner: "Adarsh",
    text: "loreem ispum asd nnn dsasadm dfefe dwds",
    likes: "12",
    dislikes: "1",
    replies: [
      {
        owner: "Adarsh",
        text: "loreem ispum asd nnn dsasadm dfefe dwds",
        likes: "12",
        dislikes: "1",
        replies: [],
      },
    ],
  },
];

const CommmentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment comment={comment} />
            <div className="border-l border-gray-200 pl-4 ml-2">
              <CommmentList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Comment = ({ comment }) => {
  return (
    <div className="my-3 p-2 rounded-lg">
      <div className="flex">
        <div className="w-9 mr-3">
          <img className="rounded-full" src={userImage} />
        </div>
        <div>
          <h1>{comment.owner}</h1>
          <p className="font-thin">{comment.text}</p>
        </div>
      </div>
      <div className="flex ml-10 text-sm">
        <p>👍{comment.likes}</p>
        <p className="ml-2">👎{comment.dislikes}</p>
        <p className="ml-4 font-semibold">Reply</p>
      </div>
    </div>
  );
};

const CommentContainer = ({ commentCount }) => {
  return (
    <div className="my-4">
      <h1 className="font-bold">{commentCount} Comments</h1>
      <CommmentList comments={comments} />
    </div>
  );
};

export default CommentContainer;
