import MonitoringIcon from "../icon";

interface CardFeatureProps {
  description?: any,
  title?: any,
  icon?: any,
  color?: any,
}

const colorBg : any = {
   lightgreen : "bg-lightgreen-100",
   purple: "bg-purple-100",
  orange: "bg-orange-100"
}

const colorText : any = {
  lightgreen : "text-lightgreen-200",
  purple: "text-purple-200",
  orange: "text-orange-200"
}

const colorBorder : any = {
  lightgreen : "border-lightgreen-200",
  purple: "border-purple-200",
  orange: "border-orange-200"
}


const CardFeature = ({description, title, icon, color} : CardFeatureProps) =>  {

  return (
        <div className={`rounded-3xl px-6 pb-16 pt-8 ` + colorBg[color]}
        >
          {icon}
          <h5 className={`text-left text-2xl my-4 font-bold 4xl:text-3xl ` + colorText[color]}>{title}</h5>
          <hr className={`my-2 border-1 w-2/6 ` + colorBorder[color]}/>
          <p className="text-left text-[18px] leading-7 4xl:leading-10 mt-5">
          {description}
          </p>
      </div> 
)};

export default CardFeature
