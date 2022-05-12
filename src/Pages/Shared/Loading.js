import React from "react";

const Loading = () => {
  return (
    <section className="h-screen flex items-center justify-center ">
      <div className="lg:hidden">
        <div className="w-16 h-16 border-t-2 border-b-2 border-accent rounded-full animate-spin"></div>
      </div>
      <div className="hidden lg:block">
        <div className="w-40 h-40 border-t-4 border-b-4 border-accent rounded-full animate-spin"></div>
      </div>
    </section>
  );
};

export default Loading;
