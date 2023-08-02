import Card from "../../components/Card";

export interface CardProjectProps {
  key: number;
  title: string;
  description: string;
  img: {
    data: string,
    contentType: string;
  }
  className?: string;
}


const CardProject: React.FC<CardProjectProps> = ({ key, title, description, img, className }) => {
  return (
    <Card key={key} className={`flex flex-col ${className} max-w-sm min-w-1/2`}>
      <img 
        height={200}
        width={200}
        className="rounded-md object-cover object-center h-48 w-full"
        src={`data:${img.contentType};base64,${img.data}`} 
        alt={title}
      />
      <span className="text-white text-2xl font-bold pt-4">{title}</span>
      <span className="text-gray-400 text-lg py-2 truncate">{description}</span>
    </Card>
  );
};

export default CardProject;