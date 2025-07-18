import { IMG_CDN } from "../utils/const";

const Moviecard = ({ posterpath }) => {
    if(!posterpath) return null;
  return (
    <div className="w-48 pr-6 bg-opacity-80">
      <img alt="POSTER" src={IMG_CDN + posterpath} />
    </div>
  );
};

export default Moviecard;
