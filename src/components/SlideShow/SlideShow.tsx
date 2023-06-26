import "./SlideShow.css";

interface Props {
  field: string;
}

const SlideShow = ({ field }: Props) => {
  return (
    <div>
      <h1 className="centered m-0">Marvel {field}</h1>
    </div>
  );
};

export default SlideShow;
