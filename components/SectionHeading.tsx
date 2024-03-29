type sectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: sectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium mb-8 capitalize text-center">
      {children}
    </h2>
  );
}
