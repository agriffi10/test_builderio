interface IHomeSectionProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

export default function HomeSection({ title, children }: IHomeSectionProps) {
  return (
    <section className="mb-14">
      <h3 className="text-3xl mb-8">{title}</h3>
      {children}
    </section>
  );
}