interface HeaderProps {
  title?: string;
}

const HeaderPanel = ({ title }: HeaderProps) => (
  <div className="bg-lightblue-200">
    <div className="mx-auto flex items-center justify-between py-3 px-8 sm:px-8 md:px-16 lg:justify-start lg:px-24">
      <h2 className="my-5 text-4xl font-normal text-darkblue-100">
        <span className="font-bold text-darkblue-100">{title}</span>
        <hr className="my-6 mx-2 h-px w-3/6 border-2 border-darkblue-100 bg-darkblue-100 dark:bg-darkblue-100" />
      </h2>
    </div>
  </div>
);

export default HeaderPanel;
