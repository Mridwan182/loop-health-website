interface CardFeatureProps {
  description?: any;
  title?: any;
  icon?: any;
  color?: any;
}

const colorBg: any = {
  lightgreen: 'bg-lightgreen-100',
  purple: 'bg-purple-100',
  orange: 'bg-orange-100',
};

const colorText: any = {
  lightgreen: 'text-lightgreen-200',
  purple: 'text-purple-200',
  orange: 'text-orange-200',
};

const colorBorder: any = {
  lightgreen: 'border-lightgreen-200',
  purple: 'border-purple-200',
  orange: 'border-orange-200',
};

const CardFeature = ({ description, title, icon, color }: CardFeatureProps) => {
  return (
    <div
      className={`rounded-3xl px-6 pb-16 pt-8 mxl:h-[25rem] mxl:px-4 xl:h-[calc(100%_-_1rem)] 2xl:h-[100%] ${colorBg[color]}`}
    >
      {icon}
      <h5
        className={`my-4 text-left text-2xl font-bold ssm:text-3xl md:text-[2rem] lg:text-2xl mxl:text-[1rem] xl:text-2xl  4xl:text-3xl ${colorText[color]}`}
      >
        {title}
      </h5>
      <hr className={`my-2 w-2/6 border-2 ${colorBorder[color]}`} />
      <p className="mt-5 text-left text-[18px] leading-7 ssm:text-[1.3rem] md:text-[1.4rem] mxl:text-[1rem] mxl:leading-6 mmxl:text-[0.85rem] mmxl:leading-normal xl:text-[1.1rem] 4xl:leading-10">
        {description}
      </p>
    </div>
  );
};

export default CardFeature;
