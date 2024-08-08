interface IPosition {
  title: string;
  start: string;
  end?: string;
  summary: string;
  isCurrent: boolean;
  company: string;
  link?: string;
}
export default function JobCard({
  title = 'Developer',
  start = '00/0000',
  end = '00/0000',
  summary,
  isCurrent,
  company = 'Company',
  link,
}: IPosition) {
  return (
    <div className="md:flex mb-8 w-full">
      <div className="min-w-[150px] text-medium">
        <span>
          {start} - {isCurrent && <span className="uppercase">present</span>}
          {!isCurrent && <>{end}</>}
        </span>
      </div>
      <div className="md:pl-2">
        <div className="flex flex-wrap">
          <h6 className="text-medium">
            <span className="font-medium">{title}</span> @{' '}
            <span>
              {link && (
                <a
                  className="underline"
                  href={link}
                  target="_blank"
                  title={`${company} | opens in new tab`}>
                  {company}
                </a>
              )}{' '}
              {!link && company}
            </span>
          </h6>
        </div>
        <p>{summary}</p>
      </div>
    </div>
  );
}
