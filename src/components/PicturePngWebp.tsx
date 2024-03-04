type PicturePngWebpProps = {
  /**
   * The local directory of the image without extension
   * ex) /works/professional/rui -> for rui.png and rui.webp
   */
  src?: string;
  alt?: string;
  wrapperClassName?: string;
  className?: string;
};

/**
 *  Wrapper component to display webp/png
 *  !! Only for local images
 */
const PicturePngWebp = ({ src, alt, className, wrapperClassName }: PicturePngWebpProps) => {
  return (
    <picture className={wrapperClassName}>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img src={`${src}.png`} alt={alt} className={className} />
    </picture>
  );
};

export default PicturePngWebp;
