import React from "react";

const Bot = () => {
  const handleChatClick = () => {
    // Add your chat functionality logic here
    console.log("Chat bubble clicked!");
  };

  return (
    <div
      className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
      onClick={handleChatClick}
    >
      <ion-icon name="chatbubble-ellipses"></ion-icon>
    </div>
  );
};

export default Bot;
