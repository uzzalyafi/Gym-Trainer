/* eslint-disable react/prop-types */


const Header = ({title, image, children}) => {
  return (
    <header className="header">
      <div className=" header_container">
        {/*  header bg-image*/}
        <div className="header_container-bg">
          <img src={image} alt="header image" />
        </div>
        {/* header text */}
        <div className="header_content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>    
  )
}

export default Header