'use client';

type Props = {
  children?: React.ReactNode;
  title: String;
};

const Heading: React.FC<Props> = function ({ children, title }) {
  return (
    <div className="flex items-center justify-between flex-row pb-3">
      <h1 className="text-2xl sm:text-3xl font-[700]">{title}</h1>
      {children}
    </div>
  );
};

export default Heading;
