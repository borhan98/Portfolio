import PropTypes from "prop-types";

const SectionTitle = ({ secTitle, secDetail }) => {
  return (
    <>
      <h3 className="text-xl md:text-3xl font-semibold text-zinc-600 mb-4">
        {secTitle}
      </h3>
      <p className="text-zinc-500 text-sm md:text-base">{secDetail}</p>
    </>
  );
};

export default SectionTitle;
SectionTitle.propTypes = {
  secTitle: PropTypes.string,
  secDetail: PropTypes.string,
};
