import React from "react";

interface MDXPagesLayoutProps {
  children: React.ReactNode;
}

const MDXPagesLayout: React.FC<MDXPagesLayoutProps> = ({ children }) => {
  return <div className="prose prose-invert mx-auto">{children}</div>;
};

export default MDXPagesLayout;
