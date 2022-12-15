import Image from "next/image";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__profile" style={{}}>
        <Image
          src="/images/test_profile_photo.jpg"
          layout="fill"
          objectFit="cover"
          alt="profilephoto"
        />
      </div>
      <div className="footer__content">
        <div className="footer__twitter">
          <div className="footer__twitter__img">
            <Image
              src="/images/twitter__logo.svg" // Route of the image file
              layout="fill"
              objectFit="cover"
              alt="twitter"
            />
          </div>
          <div className="footer__twitter__text">
            <h4>Twitter</h4>
          </div>
          <div className="footer__twitter__link">
            <Image
              src="/images/external-link.png" // Route of the image file
              layout="fill"
              objectFit="cover"
              alt="twitter"
            />
          </div>
        </div>
        <div className="footer__github">
          <div className="footer__github__img">
            <Image
              src="/images/github__logo.svg" // Route of the image file
              layout="fill"
              objectFit="cover"
              alt="twitter"
            />
          </div>
          <div className="footer__github__text">
            <h4>Github</h4>
          </div>
          <div className="footer__github__link">
            <Image
              src="/images/external-link.png" // Route of the image file
              layout="fill"
              objectFit="cover"
              alt="twitter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
