


interface HeaderProps  {
    title?: string;
}

const HeaderPanel = ({title} : HeaderProps) => (
  <div className="bg-lightblue-200">
    <div className="mx-auto flex py-3 lg:px-24 md:px-16 sm:px-8 px-8 items-center justify-between lg:justify-start">
        <h2 className="my-5 text-4xl text-darkblue-100 font-normal">
          <span className="font-bold text-darkblue-100">{title}</span>
          <hr className="h-px my-6 mx-2 bg-darkblue-100 border-darkblue-100 dark:bg-darkblue-100 border-2 w-3/6"/>
        </h2>
    </div>
  </div>
);

export default HeaderPanel;
