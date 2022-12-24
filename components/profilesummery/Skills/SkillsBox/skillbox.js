import Image from "next/image";
import { useMemo } from "react";

function SkillBox({ name, logo, totalStars, activeStars }) {
  const starRating = useMemo(() => {
    return new Array(totalStars)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <svg
          key={idx}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#fff"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      ));
  }, [totalStars, activeStars]);

  return (
    <div className="skillbox">
      <div className="skillbox__header">
        <h2>{name}</h2>
      </div>
      <div className="skillbox__body">
        <div
          className="skillbox__body__image"
          style={{ position: "relative", width: "40px", height: "40px" }}
        >
          <Image
            src={logo}
            alt="profilephoto"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="skillbox__body__rating">
          <div className="skillbox__body__rating--star">{starRating}</div>
        </div>
      </div>
    </div>
  );
}

export default SkillBox;
