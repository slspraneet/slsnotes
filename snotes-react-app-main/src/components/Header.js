const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>
        <span>sls</span>Notes
      </h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="toggle-btn"
      >
        Switch Mode
      </button>
    </div>
  );
};

export default Header;
